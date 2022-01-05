import { Column } from "@components";
import { forwardRef } from "react";

export const Scrollbar = forwardRef(({ className, ...rest }: any, ref): any => {
  return (
    <div
      // TEMPORAIRE
      className={`scrollbar-custom ${className}`}
      {...rest}
      ref={ref}
    />
  );
});
