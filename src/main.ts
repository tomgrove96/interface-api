import "./style.css";
import { ComponentManager } from "./api/component/ComponentManager";
import { Text } from "./api/component/components/Text";

const manager = ComponentManager.getInstance();

const text = new Text("text1", "TEST1"); // 3
const text2 = new Text("text2", "TEST2"); // 2
const text3 = new Text("text3", "TEST3"); // 1

manager.build();

console.log(document.body.innerHTML);
