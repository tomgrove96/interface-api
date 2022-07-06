import { IStringIndex } from "./IStringIndex";

export interface IComponent {
  id: string;
  parent: IComponent | null;
  children: IStringIndex;
  props: IStringIndex;
}
