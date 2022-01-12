import { ReactNode } from "react";

type TooltipProps = {
  children: ReactNode[] | ReactNode;
  position: "right" | "top" | "bottom" | "left";
  className?: string;
};

export const Tooltip = ({
  children,
  position,
  className,
}: TooltipProps): JSX.Element => {
  let tooltipPosition;
  switch (position) {
    case "right":
      tooltipPosition = "left-full ml-2 top-1/2 -translate-y-1/2";
      break;
    case "left":
      tooltipPosition = "right-full mr-2 top-1/2 -translate-y-1/2";
      break;
    case "bottom":
      tooltipPosition = "top-full mt-1 left-1/2 -translate-x-1/2";
      break;
    case "top":
      tooltipPosition =
        "bottom-full -translate-y-5 mb-1 left-1/2 -translate-x-1/2";
      break;
    default:
      "left-full ml-2 top-1/2 -translate-y-1/2";
      break;
  }

  return (
    <span
      // style={{ minWidth: 100 }}
      className={`px-2  text-xs py-1 border border-gray-200 bg-gradient-to-br max-md:border  dark:border-gray-700  from-gray-50 to-gray-100 dark:from-[#1c1c1c] dark:to-[#1c1c1c] dark:text-gray-400  rounded-lg  transition-all duration-75 text-gray-800 tooltip ${tooltipPosition} ${className}`}
    >
      {children}
    </span>
  );
};
