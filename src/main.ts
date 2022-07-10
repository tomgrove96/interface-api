import "./style.css";
import { Text } from "./api/component/components/Text";

const text1 = new Text("text1", "TEST1");
const text2 = new Text("text2", "TEST2", text1);

console.log(document.body.innerHTML);
