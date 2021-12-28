import { POSITIONX, POSITIONY, SET_ALIGNEMENT } from "./types";

export const ColumnX: any = {
  center: "items-center",
  left: "items-start",
  right: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};
export const RowY: any = {
  center: "items-center",
  left: "items-start",
  right: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

export const RowX: any = {
  center: "justify-center",
  left: "justify-start",
  right: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
  stretch: "justify-stretch",
};

export const ColumnY: any = {
  center: "justify-center",
  left: "justify-start",
  right: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
  stretch: "justify-stretch",
};

export const setAlignement = ({
  positionX,
  positionY,
  variant,
}: SET_ALIGNEMENT) => {
  let posX: string = "";
  let posY: string = "";
  if (variant === "col") {
    posY = ColumnY[positionY] || "justify-start";
    posX = ColumnX[positionX] || "items-start";
  } else if (variant === "row") {
    posY = RowY[positionY] || "items-start";
    posX = RowX[positionX] || "justify-start";
  }
  return `${posX} ${posY}`;
};
