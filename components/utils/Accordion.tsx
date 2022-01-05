import { ReactNode } from "react";

interface Accordion {
  children: ReactNode | ReactNode[];
  open?: boolean;
}

export const Accordion = ({ children, open }: Accordion) => {
  return (
    <div
      className={`w-full ${
        open ? "opacity-1" : "opacity-0 -z-50 overflow-hidden"
      } `}
      style={{ height: open ? "100%" : "0" }}
    >
      {children}
    </div>
  );
};
