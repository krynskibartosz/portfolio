import { HTMLAttributes } from "react";
import { ColumnAndRow } from "./types";
import { setAlignement } from "./utils";

//! Ne pas utiliser de taille fix sur les containers
// example : width: "100%" || flex: 1

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
      className={`flex  flex-col ${setAlignement({
        positionX,
        positionY,
        variant: "col",
      })}} ${className}`}
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
      className={`flex flex-row ${setAlignement({
        positionX,
        positionY,
        variant: "row",
      })} ${className}`}
      {...rest}
    >
      {children}
    </HtmlRow>
  );
};

export const Section = ({
  title,
  children,
  className,
}: {
  children: JSX.Element;
  title?: string;
  className?: string;
}) => (
  <section className={`w-full max-w-2xl mx-auto relative ${className}`}>
    {title && (
      <h2 className="mb-8 text-3xl font-semibold text-gray-900 max-md:mb-5 whitespace-nowrap max-md:text-xl ma dark:text-white">
        {title}
      </h2>
    )}

    {children}
  </section>
);
