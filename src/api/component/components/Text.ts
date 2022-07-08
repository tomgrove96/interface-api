import { ComponentBuilder } from "../../builder/ComponentBuilder";
import { ComponentManager } from "../ComponentManager";

export class Text {
  manager = ComponentManager.getInstance();

  constructor(id: string, value: string) {
    new ComponentBuilder(id)
      .setValue(value)
      .setFontSize("32px")
      .setFontColor({ r: 100, g: 0, b: 0, a: 1 })
      .setSize({ x: window.innerWidth, y: 64 })
      .setBackgroundColor({ r: 0, g: 0, b: 0, a: 1 })
      .build();
  }
}
