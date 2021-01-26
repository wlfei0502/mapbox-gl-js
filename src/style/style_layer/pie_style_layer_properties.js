// This file is generated. Edit build/generate-style-code.js, then run `yarn run codegen`.
// @flow
/* eslint-disable */

import styleSpec from '../../style-spec/reference/latest';

import {
    Properties,
    DataConstantProperty,
    DataDrivenProperty,
    CrossFadedDataDrivenProperty,
    CrossFadedProperty,
} from '../properties';

import type Formatted from '../../style-spec/expression/types/formatted';

export type PaintProps = {|
    "pie-radius": number,
    "pie-part_1": number,
    "pie-part_2": number,
    "pie-part_3": number,
    "pie-part_4": number,
    "pie-part_5": number,
    "pie-part_6": number,
    "pie-part_7": number,
    "pie-part_8": number,
    "pie-part_9": number,
    "pie-translate": DataConstantProperty<[number, number]>,
    "pie-translate-anchor": DataConstantProperty<"map" | "viewport">,
    "pie-pitch-scale": DataConstantProperty<"map" | "viewport">,
    "pie-pitch-alignment": DataConstantProperty<"map" | "viewport">
|};

const paint: Properties<PaintProps> = new Properties({
    "pie-radius": new DataDrivenProperty(styleSpec["paint_pie"]["pie-radius"]),
    "pie-part_1": new DataDrivenProperty(styleSpec["paint_pie"]["pie-part_1"]),
    "pie-part_2": new DataDrivenProperty(styleSpec["paint_pie"]["pie-part_2"]),
    "pie-part_3": new DataDrivenProperty(styleSpec["paint_pie"]["pie-part_3"]),
    "pie-part_4": new DataDrivenProperty(styleSpec["paint_pie"]["pie-part_4"]),
    "pie-part_5": new DataDrivenProperty(styleSpec["paint_pie"]["pie-part_5"]),
    "pie-part_6": new DataDrivenProperty(styleSpec["paint_pie"]["pie-part_6"]),
    "pie-part_7": new DataDrivenProperty(styleSpec["paint_pie"]["pie-part_7"]),
    "pie-part_8": new DataDrivenProperty(styleSpec["paint_pie"]["pie-part_8"]),
    "pie-part_9": new DataDrivenProperty(styleSpec["paint_pie"]["pie-part_9"]),
    "pie-translate": new DataConstantProperty(styleSpec["paint_pie"]["pie-translate"]),
    "pie-translate-anchor": new DataConstantProperty(styleSpec["paint_pie"]["pie-translate-anchor"]),
    "pie-pitch-scale": new DataConstantProperty(styleSpec["paint_pie"]["pie-pitch-scale"]),
    "pie-pitch-alignment": new DataConstantProperty(styleSpec["paint_pie"]["pie-pitch-alignment"]),
});

// Note: without adding the explicit type annotation, Flow infers weaker types
// for these objects from their use in the constructor to StyleLayer, as
// {layout?: Properties<...>, paint: Properties<...>}
export default ({ paint }: $Exact<{
  paint: Properties<PaintProps>
}>);
