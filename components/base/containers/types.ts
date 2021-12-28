import { CSSProperties, ElementType, ReactNode } from "react";

export type POSITIONX =
  | "center"
  | "right"
  | "left"
  | "between"
  | "around"
  | "evenly"
  | "stretch";

export type POSITIONY =
  | "center"
  | "top"
  | "bottom"
  | "between"
  | "around"
  | "evenly"
  | "stretch";

export type ColumnAndRow = {
  children?: JSX.Element | JSX.Element[] | ReactNode;
  className?: string;
  style?: CSSProperties;
  positionY?: POSITIONY;
  positionX?: POSITIONX;
  as?: ElementType;
  id?: string;
  onFocus?: (e?: any) => void;
  onBlur?: (e?: any) => void;
  onClick?: (e?: any) => void;
};

export type SET_ALIGNEMENT = {
  positionX: POSITIONX;
  positionY: POSITIONY;
  variant: "col" | "row";
};
