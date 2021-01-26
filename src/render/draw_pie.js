// @flow

import StencilMode from '../gl/stencil_mode';
import DepthMode from '../gl/depth_mode';
import CullFaceMode from '../gl/cull_face_mode';
import Program from './program';
import {pieUniformValues} from './program/pie_program';
import SegmentVector from '../data/segment';
import {OverscaledTileID} from '../source/tile_id';

import type Painter from './painter';
import type SourceCache from '../source/source_cache';
import type PieStyleLayer from '../style/style_layer/pie_style_layer';
import type PieBucket from '../data/bucket/pie_bucket';
import type ProgramConfiguration from '../data/program_configuration';
import type VertexBuffer from '../gl/vertex_buffer';
import type IndexBuffer from '../gl/index_buffer';
import type {UniformValues} from './uniform_binding';
import type {PieUniformsType} from './program/pie_program';

export default drawPies;

type TileRenderState = {
    programConfiguration: ProgramConfiguration,
    program: Program<*>,
    layoutVertexBuffer: VertexBuffer,
    indexBuffer: IndexBuffer,
    uniformValues: UniformValues<PieUniformsType>
};

type SegmentsTileRenderState = {
    segments: SegmentVector,
    sortKey: number,
    state: TileRenderState
};

function drawPies(painter: Painter, sourceCache: SourceCache, layer: PieStyleLayer, coords: Array<OverscaledTileID>) {
    if (painter.renderPass !== 'translucent') return;

    const context = painter.context;
    const gl = context.gl;

    const depthMode = painter.depthModeForSublayer(0, DepthMode.ReadOnly);
    // Turn off stencil testing to allow circles to be drawn across boundaries,
    // so that large circles are not clipped to tiles
    const stencilMode = StencilMode.disabled;
    const colorMode = painter.colorModeForRenderPass();

    const segmentsRenderStates: Array<SegmentsTileRenderState> = [];

    for (let i = 0; i < coords.length; i++) {
        const coord = coords[i];

        const tile = sourceCache.getTile(coord);
        const bucket: ?PieBucket<*> = (tile.getBucket(layer): any);
        if (!bucket) continue;

        const programConfiguration = bucket.programConfigurations.get(layer.id);
        const program = painter.useProgram('pie', programConfiguration);
        const layoutVertexBuffer = bucket.layoutVertexBuffer;
        const indexBuffer = bucket.indexBuffer;
        const uniformValues = pieUniformValues(painter, coord, tile, layer);

        const state: TileRenderState = {
            programConfiguration,
            program,
            layoutVertexBuffer,
            indexBuffer,
            uniformValues
        };

        segmentsRenderStates.push({
            segments: bucket.segments,
            sortKey: 0,
            state
        });
    }

    context.activeTexture.set(gl.TEXTURE0);

    // 扇形颜色纹理
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE,
    new ImageData(new Uint8ClampedArray(
        [
            255, 51, 51, 255, 
            51, 187, 255, 255, 
            255, 187, 51, 255, 
            51, 255, 187, 255, 
            112, 243, 255, 255,
            187, 51, 255, 255,
            255, 117, 51, 255,
            240, 0, 86, 255
        ]), 8, 1));

    for (const segmentsState of segmentsRenderStates) {
        const { programConfiguration, program, layoutVertexBuffer, indexBuffer, uniformValues, percentsBuffer } = segmentsState.state;
        const segments = segmentsState.segments;

        program.draw(context, gl.TRIANGLES, depthMode, stencilMode, colorMode, CullFaceMode.disabled,
            uniformValues, layer.id,
            layoutVertexBuffer, indexBuffer, segments,
            layer.paint, painter.transform.zoom, programConfiguration);
    }
}
