export const positionsX = {
  center: "center",
  left: "start",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch",
};

export const positionsY = {
  center: "center",
  top: "start",
  bottom: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch",
};

type SET_ALIGNEMENT = {
  positionX: keyof typeof positionsX;
  positionY: keyof typeof positionsY;
  variant: "col" | "row";
};

export const setAlignement = ({
  positionX,
  positionY,
  variant,
}: SET_ALIGNEMENT) => {
  let posX: string = "";
  let posY: string = "";
  if (variant === "col") {
    posY = "justify-" + positionsY[positionY] || "start";
    posX = "items-" + positionsX[positionX] || "start";
  } else if (variant === "row") {
    posY = "items-" + positionsY[positionY] || "start";
    posX = "justify-" + positionsX[positionX] || "start";
  }
  return `${posX} ${posY}`;
};
