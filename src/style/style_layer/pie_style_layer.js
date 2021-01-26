// @flow

import StyleLayer from '../style_layer';

import PieBucket from '../../data/bucket/pie_bucket';
import {polygonIntersectsBufferedPoint} from '../../util/intersection_tests';
import {getMaximumPaintValue, translateDistance, translate} from '../query_utils';
import properties from './pie_style_layer_properties';
import {Transitionable, Transitioning, Layout, PossiblyEvaluated} from '../properties';
import {vec4} from 'gl-matrix';
import Point from '@mapbox/point-geometry';

import type {FeatureState} from '../../style-spec/expression';
import type Transform from '../../geo/transform';
import type {Bucket, BucketParameters} from '../../data/bucket';
import type {PaintProps} from './pie_style_layer_properties';
import type {LayerSpecification} from '../../style-spec/types';

class PieStyleLayer extends StyleLayer {

    _transitionablePaint: Transitionable<PaintProps>;
    _transitioningPaint: Transitioning<PaintProps>;
    paint: PossiblyEvaluated<PaintProps>;

    constructor(layer: LayerSpecification) {
        super(layer, properties);
    }

    createBucket(parameters: BucketParameters<*>) {
        return new PieBucket(parameters);
    }

    queryRadius(bucket: Bucket): number {
        const pieBucket: PieBucket<CircleStyleLayer> = (bucket: any);
        return getMaximumPaintValue('pie-radius', this, pieBucket);
    }

    queryIntersectsFeature(queryGeometry: Array<Point>,
                           feature: VectorTileFeature,
                           featureState: FeatureState,
                           geometry: Array<Array<Point>>,
                           zoom: number,
                           transform: Transform,
                           pixelsToTileUnits: number,
                           pixelPosMatrix: Float32Array): boolean {
        const translatedPolygon = translate(queryGeometry,
            this.paint.get('pie-translate'),
            this.paint.get('pie-translate-anchor'),
            transform.angle, pixelsToTileUnits);
        const size = this.paint.get('pie-radius').evaluate(feature, featureState);

        // For pitch-alignment: map, compare feature geometry to query geometry in the plane of the tile
        // // Otherwise, compare geometry in the plane of the viewport
        // // A circle with fixed scaling relative to the viewport gets larger in tile space as it moves into the distance
        // // A circle with fixed scaling relative to the map gets smaller in viewport space as it moves into the distance
        const alignWithMap = this.paint.get('pie-pitch-alignment') === 'map';
        const transformedPolygon = alignWithMap ? translatedPolygon : projectQueryGeometry(translatedPolygon, pixelPosMatrix);
        const transformedSize = alignWithMap ? size * pixelsToTileUnits : size;

        for (const ring of geometry) {
            for (const point of ring) {

                const transformedPoint = alignWithMap ? point : projectPoint(point, pixelPosMatrix);

                let adjustedSize = transformedSize;
                const projectedCenter = vec4.transformMat4([], [point.x, point.y, 0, 1], pixelPosMatrix);
                if (this.paint.get('pie-pitch-scale') === 'viewport' && this.paint.get('pie-pitch-alignment') === 'map') {
                    adjustedSize *= projectedCenter[3] / transform.cameraToCenterDistance;
                } else if (this.paint.get('pie-pitch-scale') === 'map' && this.paint.get('pie-pitch-alignment') === 'viewport') {
                    adjustedSize *= transform.cameraToCenterDistance / projectedCenter[3];
                }

                if (polygonIntersectsBufferedPoint(transformedPolygon, transformedPoint, adjustedSize)) return true;
            }
        }

        return false;
    }
}

function projectPoint(p: Point, pixelPosMatrix: Float32Array) {
    const point = vec4.transformMat4([], [p.x, p.y, 0, 1], pixelPosMatrix);
    return new Point(point[0] / point[3], point[1] / point[3]);
}

function projectQueryGeometry(queryGeometry: Array<Point>, pixelPosMatrix: Float32Array) {
    return queryGeometry.map((p) => {
        return projectPoint(p, pixelPosMatrix);
    });
}

export default PieStyleLayer;
