export class Component {
  parent: Component | null = null;
  children: { [key: string]: any } = {};
  props: { [key: string]: any } = {};

  constructor(id: string) {
    this.props["id"] = id;
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

  private addProps() {
    let result = "";
    for (let [key, value] of Object.entries(this.props)) {
      if (key === "id") continue;
      if (key === "value") continue;

      result += value ? `${key}: ${value};` : "";
    }
    return result;
  }
}
