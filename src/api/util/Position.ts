import { Vector2 } from "../math/Vector2";

export enum Position {
  TOP_LEFT,
  TOP_RIGHT,
  TOP_CENTER,
  CENTER_LEFT,
  CENTER_RIGHT,
  CENTER,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  BOTTOM_CENTER
}

export function calcPosition(size: Vector2, position: Position): Vector2 {
  if (position === Position.TOP_LEFT) {
    return new Vector2(0, 0);
  }
  if (position === Position.TOP_RIGHT) {
    const x = window.innerWidth - size.x;
    return new Vector2(x, 0);
  }
  if (position === Position.TOP_CENTER) {
    const x = window.innerWidth / 2 - size.x / 2;
    return new Vector2(x, 0);
  }
  if (position === Position.CENTER_LEFT) {
    const y = window.innerHeight / 2 - size.y / 2;
    return new Vector2(0, y);
  }
  if (position === Position.CENTER_RIGHT) {
    const x = window.innerWidth - size.x;
    const y = window.innerHeight / 2 - size.y / 2;
    return new Vector2(x, y);
  }
  if (position === Position.CENTER) {
    const x = window.innerWidth / 2 - size.x / 2;
    const y = window.innerHeight / 2 - size.y / 2;
    return new Vector2(x, y);
  }
  if (position === Position.BOTTOM_LEFT) {
    const y = window.innerHeight - size.y;
    return new Vector2(0, y);
  }
  if (position === Position.BOTTOM_RIGHT) {
    const x = window.innerWidth - size.x;
    const y = window.innerHeight - size.y;
    return new Vector2(x, y);
  }
  if (position === Position.BOTTOM_CENTER) {
    const x = window.innerWidth / 2 - size.x / 2;
    const y = window.innerHeight - size.y;
    return new Vector2(x, y);
  }
  return new Vector2(0, 0);
}
