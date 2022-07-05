import { IVector } from "../interface/IVector";

export class Vector2 implements IVector {
  x = 0;
  y = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
