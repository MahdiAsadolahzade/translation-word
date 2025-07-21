import { IconType } from "react-icons";
export type TLanguage = "En" | "Fa";

export interface TWord {
  id?: number;
  key: string;
  translation?: string;
  language: TLanguage;
}

export interface TNavigation {
  name: string;
  route: string;
  icon: IconType;
}
