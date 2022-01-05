import { ClickOutside, Column, Row } from "components";
import { CSSProperties, ReactNode, useState } from "react";

type Dropdown = {
  Button: ({ open }: any) => ReactNode;
  DropdownContent: ({
    Button,
    DropdownContent,
    dropdownContentClassName,
    dropdownStyle,
    open,
    setOpen,
  }: any) => ReactNode;
  containerClassName?: string;
  dropdownContentClassName?: string;
  dropdownStyle?: CSSProperties;
  onClick?: any;
  clickOutside?: boolean;
  close?: boolean;
};

export const Dropdown = ({
  Button,
  DropdownContent,
  dropdownContentClassName,
  dropdownStyle,
  onClick,
  containerClassName,
  clickOutside = true,
  close,
  ...rest
}: Dropdown) => {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <ClickOutside
      onClick={() => {
        if (clickOutside) {
          setOpen(false);
        }
      }}
    >
      <div className={`relative w-full ${containerClassName}`}>
        {open && (
          <Column
            className={
              "absolute shadow-test z-10 rounded-lg " + dropdownContentClassName
            }
            style={dropdownStyle}
          >
            {DropdownContent({
              Button,
              DropdownContent,
              dropdownContentClassName,
              dropdownStyle,
              open,
              setOpen,
              focused,
              ...rest,
            })}
          </Column>
        )}
        <Row
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full"
          onClick={() => {
            if (!close) setOpen(!open);
            if (typeof onClick === "function") onClick();
          }}
        >
          {Button({ open, setOpen, focused })}
        </Row>
      </div>
    </ClickOutside>
  );
};
