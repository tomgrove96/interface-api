import { Component } from "../component/Component";
import { RGBAColor } from "../color/RGBAColor";
import { Vector2 } from "../math/Vector2";
import { Vector4 } from "../math/Vector4";

export class ComponentBuilder {
  private component: Component;

  constructor(id: string) {
    this.component = new Component(id);
  }

  setValue(value: string): ComponentBuilder {
    this.component.props.value = value;
    return this;
  }

  setSize(size: Vector2): ComponentBuilder {
    this.component.props["width"] = `${size.x}px`;
    this.component.props["height"] = `${size.y}px`;
    return this;
  }

  setPosition(position: Vector2): ComponentBuilder {
    this.component.props["left"] = `${position.x}px`;
    this.component.props["top"] = `${position.y}px`;
    return this;
  }

  setPadding(padding: Vector4): ComponentBuilder {
    this.component.props["padding-top"] = `${padding.w}px`;
    this.component.props["padding-right"] = `${padding.x}px`;
    this.component.props["padding-bottom"] = `${padding.y}px`;
    this.component.props["padding-left"] = `${padding.z}px`;
    return this;
  }

  setMargin(margin: Vector4): ComponentBuilder {
    this.component.props["margin-top"] = `${margin.w}px`;
    this.component.props["margin-right"] = `${margin.x}px`;
    this.component.props["margin-bottom"] = `${margin.y}px`;
    this.component.props["margin-left"] = `${margin.z}px`;
    return this;
  }

  setFont(font: string): ComponentBuilder {
    this.component.props["font-family"] = font;
    return this;
  }

  setFontSize(fontSize: string): ComponentBuilder {
    this.component.props["font-size"] = fontSize;
    return this;
  }

  setFontWeight(fontWeight: string): ComponentBuilder {
    this.component.props["font-weight"] = fontWeight;
    return this;
  }

  setFontColor(color: RGBAColor): ComponentBuilder {
    this.component.props[
      "color"
    ] = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    return this;
  }

  setBackgroundColor(color: RGBAColor): ComponentBuilder {
    this.component.props[
      "background-color"
    ] = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    return this;
  }

  add(component: Component): ComponentBuilder {
    this.component.children[component.props.id] = component;
    this.component.children[component.props.id].parent = this.component;
    return this;
  }

  getResult(): Component {
    return this.component;
  }
}
