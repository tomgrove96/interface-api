import { IStringIndex } from "../interface/IStringIndex";
import { Component } from "./Component";

export class ComponentManager {
  private static instance: ComponentManager;

  private static components: IStringIndex = {};

  private constructor() {}

  private buildComponent(component: Component) {
    if (!component.parent) {
      document.body.insertAdjacentHTML("beforeend", component.getHTML());
    }

    const childEntries = Object.entries(component.children);
    if (childEntries.length > 0) {
      for (let [key] of childEntries) {
        const child = component.children[key];
        const parentElement = document.getElementById(component.id);
        if (parentElement)
          parentElement.insertAdjacentHTML("beforeend", child.getHTML());
        this.buildComponent(child);
      }
    }
  }

  public build() {
    document.body.innerHTML = "";
    const entries = Object.entries(ComponentManager.components);
    for (let [key] of entries) {
      this.buildComponent(ComponentManager.components[key]);
    }
  }

  public addChild(parent: Component, component: Component) {
    let build = false;
    if (ComponentManager.components[component.id])
      delete ComponentManager.components[component.id];
    const entries = Object.entries(ComponentManager.components);
    for (let [key] of entries) {
      if (key === parent.id) {
        component.parent = parent;
        ComponentManager.components[key].children[component.id] = component;
        build = true;
      }
    }
    if (build) {
      this.build();
      console.log("added child");
    }
  }

  public addParent(component: Component) {
    const key: string = component.id;
    if (!ComponentManager.components[key]) {
      ComponentManager.components[key] = component;
      this.build();
      console.log("added parent");
    }
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
