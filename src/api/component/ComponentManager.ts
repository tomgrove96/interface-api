import { IStringIndex } from "../interface/IStringIndex";
import { Component } from "./Component";

export class ComponentManager {
  private static instance: ComponentManager;

  private static components: IStringIndex = {};

  private constructor() {}

  public buildComponent(component: Component): Component {
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
        this.buildComponent(child);
      }
    }
    return component;
  }

  private build() {
    const entries = Object.entries(ComponentManager.components);
    for (let [key] of entries) {
      this.buildComponent(ComponentManager.components[key]);
    }
  }

  public addChild(parent: Component, component: Component) {
    const entries = Object.entries(ComponentManager.components);
    for (let [key] of entries) {
      if (key === parent.id) {
        ComponentManager.components[key].children[component.id] = component;
      }
    }
    this.build();
  }

  public addParent(component: Component) {
    const key: string = component.props.id;
    if (!ComponentManager.components[key])
      ComponentManager.components[key] = component;

    this.build();
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
