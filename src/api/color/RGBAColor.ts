import { IColor } from "../interface/IColor";

export class RGBAColor implements IColor {
  r = 0;
  g = 0;
  b = 0;
  a = 1;
  constructor(r: number, g: number, b: number, a: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}
