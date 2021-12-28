import { HTMLAttributes } from "react";
import { ColumnAndRow, SectionType } from "./types";

//! Ne pas utiliser de taille fix sur les containers
// example : width: "100%" || flex: 1

const positionsY = {
  center: "center",
  top: "start",
  bottom: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch",
};
const positionsX = {
  center: "center",
  left: "start",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch",
};

const setAlignement = (
  positionX: keyof typeof positionsX,
  positionY: keyof typeof positionsY,
  type: "col" | "row"
) => {
  let posX: string = "";
  let posY: string = "";
  if (type === "col") {
    posY = "justify-" + positionsY[positionY] || "start";
    posX = "items-" + positionsX[positionX] || "start";
  } else if (type === "row") {
    posY = "items-" + positionsY[positionY] || "start";
    posX = "justify-" + positionsX[positionX] || "start";
  }
  return `${posX} ${posY}`;
};

export const Column = ({
  children,
  className,
  positionX = "left",
  positionY = "top",
  as,
  ...rest
}: ColumnAndRow & HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const HtmlCol = as || "div";
  return (
    <HtmlCol
      className={`flex flex-col ${setAlignement(
        positionX,
        positionY,
        "col"
      )} ${className}`}
      {...rest}
    >
      {children}
    </HtmlCol>
  );
};
export const Row = ({
  children,
  className,
  positionX = "left",
  positionY = "top",
  as,
  ...rest
}: ColumnAndRow & HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const HtmlRow = as || "div";
  return (
    <HtmlRow
      className={`flex flex-row ${setAlignement(
        positionX,
        positionY,
        "row"
      )} ${className}`}
      {...rest}
    >
      {children}
    </HtmlRow>
  );
};
