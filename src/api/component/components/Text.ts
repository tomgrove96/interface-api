import { ComponentBuilder } from "../../builder/ComponentBuilder";
import { ComponentManager } from "../ComponentManager";
import { Component } from "../Component";

export class Text {
  builder: ComponentBuilder;
  manager = ComponentManager.getInstance();

  constructor(id: string, value: string, parent?: Component) {
    this.builder = new ComponentBuilder(id)
      .setValue(value)
      .setFontSize("32px")
      .setFontColor({ r: 100, g: 0, b: 0, a: 1 })
      .setSize({ x: window.innerWidth, y: 64 })
      .setBackgroundColor({ r: 0, g: 0, b: 0, a: 1 });

    parent
      ? this.manager.addChild(parent, this.builder.build())
      : this.manager.addParent(this.builder.build());
  }
}
