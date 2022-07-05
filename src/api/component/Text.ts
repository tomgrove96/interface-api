import { RGBAColor } from "../color/RGBAColor";
import { Vector2 } from "../math/Vector2";
import { Component } from "../abstract/Component";

export class Text extends Component {
  value = "";
  font = "Arial";
  size = "16px";
  color = new RGBAColor(0, 0, 0, 1);
  weight = "400";
  align = "left";
  style = "normal";
  letterSpacing = "normal";
  wordSpacing = "normal";
  lineHeight = "normal";
  shadow = new Vector2(0, 0);

  constructor(id: string) {
    super(id);
  }

  public getHTML(): string {
    /*
    const html = `
			<div id="${this.id}" style="
				font-family: ${this.font};
				font-size: ${this.size};
				color: rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a});
				font-weight: ${this.weight};
				text-align: ${this.align};
				font-style: ${this.style};
				letter-spacing: ${this.letterSpacing};
				word-spacing: ${this.wordSpacing};
				line-height: ${this.lineHeight};
				text-shadow: ${this.shadow.x}px ${this.shadow.y}px;
			">
			${this.value}
			</div>`;
			*/
    return "";
  }
}
