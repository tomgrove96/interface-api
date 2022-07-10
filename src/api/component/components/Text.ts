import { ComponentBuilder } from "../../builder/ComponentBuilder";
import { Component } from "../Component";

export class Text extends Component {
  constructor(id: string, value: string, parent?: Component) {
    super(id, parent);
    new ComponentBuilder(this)
      .setValue(value)
      .setFont("Arial")
      .setFontSize("16px")
      .setFontColor({ r: 0, g: 0, b: 0, a: 1 })
      .build();
  }
}
