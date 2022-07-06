import { IComponent } from "../interface/IComponent";
import { IStringIndex } from "../interface/IStringIndex";

export class Component implements IComponent {
  id = "";
  parent = null;
  children: IStringIndex = {};
  props: IStringIndex = {};

  constructor(id: string) {
    this.props["id"] = id;
  }

  private addProps() {
    let props = "";
    for (let [key, value] of Object.entries(this.props)) {
      if (key === "id") continue;
      if (key === "value") continue;

      props += value ? `${key}: ${value};` : "";
    }
    return props;
  }

  public getHTML(): string {
    const html = `
			<div
				id="${this.props.id}"
				style="${this.addProps()}
			">
			${this.props.value ? this.props.value : ""}
			</div>`;
    return html;
  }
}
