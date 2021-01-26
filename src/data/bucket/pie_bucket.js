// @flow

import { PieLayoutArray, StructArrayLayout1f4 as PiePercentsArray } from '../array_types';

import {members as layoutAttributes} from './pie_attributes';
import SegmentVector from '../segment';
import {ProgramConfigurationSet} from '../program_configuration';
import {TriangleIndexArray} from '../index_array_type';
import loadGeometry from '../load_geometry';
import EXTENT from '../extent';
import {register} from '../../util/web_worker_transfer';
import EvaluationParameters from '../../style/evaluation_parameters';

import type {CanonicalTileID} from '../../source/tile_id';
import type {
    Bucket,
    BucketParameters,
    BucketFeature,
    IndexedFeature,
    PopulateParameters
} from '../bucket';
import type PieStyleLayer from '../../style/style_layer/pie_style_layer';
import type Context from '../../gl/context';
import type IndexBuffer from '../../gl/index_buffer';
import type VertexBuffer from '../../gl/vertex_buffer';
import type Point from '@mapbox/point-geometry';
import type {FeatureStates} from '../../source/source_state';
import type {ImagePosition} from '../../render/image_atlas';

function addCircleVertex(layoutVertexArray, x, y, extrudeX, extrudeY) {
    layoutVertexArray.emplaceBack(
        (x * 2) + ((extrudeX + 1) / 2),
        (y * 2) + ((extrudeY + 1) / 2));
}

/**
 * Pies are represented by two triangles.
 *
 * Each corner has a pos that is the center of the circle and an extrusion
 * vector that is where it points.
 * @private
 */
class PieBucket<Layer: PieStyleLayer> implements Bucket {
    index: number;
    zoom: number;
    overscaling: number;
    layerIds: Array<string>;
    layers: Array<Layer>;
    stateDependentLayers: Array<Layer>;
    stateDependentLayerIds: Array<string>;

    layoutVertexArray: PieLayoutArray;
    layoutVertexBuffer: VertexBuffer;

    indexArray: TriangleIndexArray;
    indexBuffer: IndexBuffer;

    hasPattern: boolean;
    programConfigurations: ProgramConfigurationSet<Layer>;
    segments: SegmentVector;
    uploaded: boolean;

    constructor(options: BucketParameters<Layer>) {
        this.encrypt = options.encrypt;
        this.zoom = options.zoom;
        this.overscaling = options.overscaling;
        this.layers = options.layers;
        this.layerIds = this.layers.map(layer => layer.id);
        this.index = options.index;
        this.hasPattern = false;

        this.layoutVertexArray = new PieLayoutArray();
        this.indexArray = new TriangleIndexArray();
        this.segments = new SegmentVector();
        this.programConfigurations = new ProgramConfigurationSet(options.layers, options.zoom);
        this.stateDependentLayerIds = this.layers.filter((l) => l.isStateDependent()).map((l) => l.id);
    }

    populate(features: Array<IndexedFeature>, options: PopulateParameters, canonical: CanonicalTileID) {
        const styleLayer = this.layers[0];
        const bucketFeatures = [];

        for (const {feature, id, index, sourceLayerIndex} of features) {
            const needGeometry = this.layers[0]._featureFilter.needGeometry;
            const evaluationFeature = {type: feature.type,
                id,
                properties: feature.properties,
                geometry: needGeometry ? loadGeometry(feature, {
                    encrypt: this.encrypt
                }) : []};

            if (!this.layers[0]._featureFilter.filter(new EvaluationParameters(this.zoom), evaluationFeature, canonical)) continue;

            if (!needGeometry)  evaluationFeature.geometry = loadGeometry(feature, {
                encrypt: this.encrypt
            });

            const bucketFeature: BucketFeature = {
                id,
                properties: feature.properties,
                type: feature.type,
                sourceLayerIndex,
                index,
                geometry : evaluationFeature.geometry,
                patterns: {}
            };

            bucketFeatures.push(bucketFeature);
        }

        for (const bucketFeature of bucketFeatures) {
            const {geometry, index, sourceLayerIndex} = bucketFeature;
            const feature = features[index].feature;

            this.addFeature(bucketFeature, geometry, index, canonical);
            options.featureIndex.insert(feature, geometry, index, sourceLayerIndex, this.index);
        }
    }

    update(states: FeatureStates, vtLayer: VectorTileLayer, imagePositions: {[_: string]: ImagePosition}) {
        if (!this.stateDependentLayers.length) return;
        this.programConfigurations.updatePaintArrays(states, vtLayer, this.stateDependentLayers, imagePositions);
    }

    isEmpty() {
        return this.layoutVertexArray.length === 0;
    }

    uploadPending() {
        return !this.uploaded || this.programConfigurations.needsUpload;
    }

    upload(context: Context) {
        if (!this.uploaded) {
            this.layoutVertexBuffer = context.createVertexBuffer(this.layoutVertexArray, layoutAttributes);
            this.indexBuffer = context.createIndexBuffer(this.indexArray);
        }
        this.programConfigurations.upload(context);
        this.uploaded = true;
    }

    destroy() {
        if (!this.layoutVertexBuffer) return;
        this.layoutVertexBuffer.destroy();
        this.indexBuffer.destroy();
        this.programConfigurations.destroy();
        this.segments.destroy();
    }

    addFeature(feature: BucketFeature, geometry: Array<Array<Point>>, index: number, canonical: CanonicalTileID) {
        for (const ring of geometry) {
            for (const point of ring) {
                const x = point.x;
                const y = point.y;

                // Do not include points that are outside the tile boundaries.
                if (x < 0 || x >= EXTENT || y < 0 || y >= EXTENT) continue;

                // this geometry will be of the Point type, and we'll derive
                // two triangles from it.
                //
                // ┌─────────┐
                // │ 3     2 │
                // │         │
                // │ 0     1 │
                // └─────────┘

                const segment = this.segments.prepareSegment(4, this.layoutVertexArray, this.indexArray, feature.sortKey);
                const index = segment.vertexLength;

                addCircleVertex(this.layoutVertexArray, x, y, -1, -1);
                addCircleVertex(this.layoutVertexArray, x, y, 1, -1);
                addCircleVertex(this.layoutVertexArray, x, y, 1, 1);
                addCircleVertex(this.layoutVertexArray, x, y, -1, 1);

                this.indexArray.emplaceBack(index, index + 1, index + 2);
                this.indexArray.emplaceBack(index, index + 3, index + 2);

                segment.vertexLength += 4;
                segment.primitiveLength += 2;

                // 饼图信息
                // const pieFields = this.layers[0].getPaintProperty('pie-fields');
                // if (Array.isArray(pieFields)) {
                //     let count = 0;
                //     const parts = [];

                //     pieFields.forEach(field => {
                //         let value = feature.properties[field];
                //         value = Number(value);

                //         if (isNaN(value)) {
                //             value = 0;
                //         }

                //         count += value;

                //         parts.push(value);
                //     });

                //     if (count > 0) {
                //         parts.forEach(part => this.percentsBuffer.emplaceBack(part / count));
                //     }
                // }
            }
        }

        this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, feature, index, {}, canonical);
    }
}

register('PieBucket', PieBucket, {omit: ['layers']});

export default PieBucket;
