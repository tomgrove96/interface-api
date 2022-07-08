import { IStringIndex } from "./IStringIndex";

export interface IComponent {
  id: string;
  value: string | null;
  parent: IComponent | null;
  children: IStringIndex;
  props: IStringIndex;
}
