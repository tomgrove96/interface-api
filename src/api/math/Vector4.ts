import { IVector } from "../interface/IVector";

export class Vector4 implements IVector {
  x = 0;
  y = 0;
  z = 0;
  w = 0;

  constructor(w: number, x: number, y: number, z: number) {
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
