import "./style.css";
import { ComponentManager } from "./api/component/ComponentManager";
import { ComponentBuilder } from "./api/builder/ComponentBuilder";
import { Vector4 } from "./api/math/Vector4";

const componentManager = ComponentManager.getInstance();
const component1 = new ComponentBuilder("test");
const text1 = new ComponentBuilder("text1");

text1
  .setValue("text")
  .setFontSize("32px")
  .setFontColor({ r: 0, g: 0, b: 100, a: 1 });

component1
  .setPadding(new Vector4(10, 10, 10, 10))
  .setSize({ x: 100, y: 100 })
  .setBackgroundColor({ r: 100, g: 0, b: 0, a: 1 })
  .add(text1.getResult());

componentManager.build(component1.getResult());

console.log(document.body.innerHTML);
