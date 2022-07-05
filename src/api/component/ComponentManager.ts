import { IStringIndex } from "../interface/IStringIndex";
import { Component } from "./Component";

export class ComponentManager {
  private static instance: ComponentManager;

  private static components: IStringIndex = {};

  private constructor() {}

  public build(component: Component): Component {
    const parent = component.parent;

    if (!parent) {
      document.body.insertAdjacentHTML("beforeend", component.getHTML());
    }

    const childEntries = Object.entries(component.children);
    if (childEntries.length > 0) {
      for (let [key] of childEntries) {
        const child = component.children[key];
        const parentElement = document.getElementById(component.props.id);
        if (parentElement)
          parentElement.insertAdjacentHTML("beforeend", child.getHTML());
        this.build(child);
      }
    }
    return component;
  }

  public add(component: Component) {
    const key: string = component.props.id;
    if (!ComponentManager.components[key])
      ComponentManager.components[key] = component;
  }

  public remove(component: Component) {
    const key: string = component.props.id;
    if (ComponentManager.components[key])
      delete ComponentManager.components[key];
  }

  public getComponents() {
    return ComponentManager.components;
  }

  public static getInstance() {
    if (!ComponentManager.instance) {
      ComponentManager.instance = new ComponentManager();
    }
    return ComponentManager.instance;
  }
}
