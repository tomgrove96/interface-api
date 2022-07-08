import { IComponent } from "../interface/IComponent";
import { IStringIndex } from "../interface/IStringIndex";

export class Component implements IComponent {
  id = "";
  value = "";
  parent: Component | null = null;
  children: IStringIndex = {};
  props: IStringIndex = {};

  constructor(id: string, parent?: Component) {
    this.id = id;
    if (parent) this.parent = parent;
  }

  private addProps() {
    let props = "";
    for (let [key, value] of Object.entries(this.props)) {
      props += value ? `${key}: ${value};` : "";
    }
    return props;
  }

  public getHTML(): string {
    const html = `
			<div
				id="${this.id}"
				style="${this.addProps()}
			">
			${this.value.length > 0 ? this.value : ""}
			</div>`;
    return html;
  }
}
