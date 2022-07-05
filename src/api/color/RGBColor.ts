import { IColor } from "../interface/IColor";

export class RGBColor implements IColor {
  r = 0;
  g = 0;
  b = 0;
  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}
