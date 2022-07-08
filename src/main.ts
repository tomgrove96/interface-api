import "./style.css";
import { ComponentManager } from "./api/component/ComponentManager";
import { DefaultText } from "./api/component/DefaultText";

const manager = ComponentManager.getInstance();
const text = new DefaultText("text-id", "TEST");

manager.build();

console.log(document.body.innerHTML);
