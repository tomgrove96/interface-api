import { RGBAColor } from "../color/RGBAColor";
import { Vector2 } from "../math/Vector2";
import { Component } from "../abstract/Component";

export class Frame extends Component {
  position = new Vector2(0, 0);
  size = new Vector2(480, 360);
  color = new RGBAColor(0, 0, 0, 1);

  constructor(id: string) {
    super(id);
  }

  public getHTML(): string {
    /*
    let html = `
		<div
			id="${this.id}"
			style="
				position: absolute;
				left: ${this.position.x}px;
				top: ${this.position.y}px;
				width: ${this.size.x}px;
				height: ${this.size.y}px;
				background-color: rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a});
		">
		</div>
		`;
		*/
    return "";
  }
}
