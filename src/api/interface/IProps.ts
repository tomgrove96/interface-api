import { Component } from "../abstract/Component";
import { IStringIndex } from "./IStringIndex";
import { Vector2 } from "../math/Vector2";
import { Vector4 } from "../math/Vector4";
import { RGBAColor } from "../color/RGBAColor";

export interface IProps {
  id: string;
  parent?: Component;
  children?: IStringIndex;
  value?: string;
  font?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  fontColor?: RGBAColor;
  fontShadow?: Vector2;
  backgroundColor?: RGBAColor;
  borderRadius?: Vector4;
}
