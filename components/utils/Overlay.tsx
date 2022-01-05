import { Row, ClickOutside, Portal } from "@components";
import React, { ReactNode, useEffect } from "react";
interface OverlayProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
  bgClassName?: string;
  className?: string;
  withoutClickOutside?: boolean;
  log?: boolean;
}
export const Overlay = ({
  show,
  onClose,
  children,
  bgClassName = " bg-opacity-70 bg-black",
  log,
  className,
}: OverlayProps) => {
  const visibility = show ? "opacity-100  " : "opacity-0  -z-50";

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  return (
    <Portal>
      <Row
        className={`relative max-md:max-h-screen`}
        style={{ zIndex: show ? 999999 : -99999 }}
      >
        <Row
          className={`backdrop-blur-xl fixed min-h-screen w-screen top-0 left-0 z-50 ${visibility} ${bgClassName}`}
          style={{
            zIndex: show ? 999999 : -99999,
            transition: show ? "150ms ease-in-out" : "none",
            transitionDuration: "150ms",
            transitionProperty: "z-index",
            transitionTimingFunction: "ease-in-out",
          }}
        >
          <ClickOutside onClick={onClose} log={log}>
            <div
              className={`w-full xs:w-2/3 sm:w-2/3 lg:w-3/5 xl:w-1/2 m-auto max-sm:!max-h-screen flex justify-center  ${visibility}   ease-in-out ${className}`}
              style={{
                maxHeight: "90vh",
                zIndex: show ? 999999 : -99999,
                transform: show ? "translateY(0)" : "translateY(100vh)",
                transitionDuration: "400ms, 300ms",
                transitionProperty: "transform, opacity",
              }}
            >
              {children}
            </div>
          </ClickOutside>
        </Row>
      </Row>
    </Portal>
  );
};
