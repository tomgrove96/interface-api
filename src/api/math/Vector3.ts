import { IVector } from "../interface/IVector";

export class Vector3 implements IVector {
  x = 0;
  y = 0;
  z = 0;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
