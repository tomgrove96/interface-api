import { Vector2 } from "../math/Vector2";
import { RGBAColor } from "../color/RGBAColor";
import { Frame } from "../component/Frame";
import { Position, calcPosition } from "../enum/Position";
import { Component } from "../abstract/Component";
import { ComponentManager } from "../component/ComponentManager";

export class FrameBuilder {
  private static instance: FrameBuilder;
  componentManager = ComponentManager.getInstance();

  private constructor() {}

  public static getInstance() {
    if (!FrameBuilder.instance) {
      FrameBuilder.instance = new FrameBuilder();
    }
    return FrameBuilder.instance;
  }

  private frame = new Frame("");

  public setID(name: string): FrameBuilder {
    this.frame.props.id = name;
    return this;
  }

  public setPosition(position: Vector2 | Position): FrameBuilder {
    if (position instanceof Vector2) {
      this.frame.position = position;
      return this;
    }
    this.frame.position = calcPosition(this.frame.size, position);
    return this;
  }

  public setSize(size: Vector2): FrameBuilder {
    this.frame.size = size;
    return this;
  }

  public setBackgroundColor(color: RGBAColor): FrameBuilder {
    this.frame.color = color;
    return this;
  }

  public addText(component: Component): FrameBuilder {
    const key = component.props.id;
    this.frame.children[key] = component;
    return this;
  }

  public build() {
    return this.frame;
  }
}
