// todo: add tooltip to element that indicate the path

import { Row, Link, ClickOutside } from "components";

import { TranslationIcon } from "components/base/Icons/Translation";
import { HTMLAttributes, useEffect, useState } from "react";

import { useRouter } from "next/dist/client/router";
import { links, toggleTheme } from "./utils";
import setNextLanguage from "next-translate/setLanguage";
import { Form } from "components/forms/Form";
import { Radio } from "components/forms/inputs/Radio";

const lng = [
  {
    label: "Fr",
    value: "fr",
  },
  {
    label: "En",
    value: "en",
  },

  {
    label: "Pl",
    value: "pl",
  },
];

export const NavBar = () => {
  const { pathname } = useRouter();

  const [isNavHover, setNavHover] = useState(false);

  const { locale } = useRouter();

  const [open, setOpen] = useState(false);

  const [animationConfig, setAnimationConfig] = useState([
    { name: "home", isHovered: false, style: {} },
    { name: "projects", isHovered: false, style: {} },
    { name: "contact", isHovered: false, style: {} },
    { name: "theme", isHovered: false, style: {} },
    { name: "language", isHovered: false, style: {} },
  ]);
  const isAtLeastOnElementHovered = animationConfig.some(
    (el) => el.isHovered === true
  );

  //  hover animation managment
  useEffect(() => {
    if (isAtLeastOnElementHovered) {
      setNavHover(true);
    }
    let notHovered = [...animationConfig].filter((el) => !el.isHovered);
    let hovered = [...animationConfig].filter((el) => el.isHovered);

    notHovered.forEach((element) => {
      element.style = {
        transform: "scale(1.3) translateY(-10px)",
      };
      // style right buttons
      if (element.name === "theme") {
        element.style = {
          marginRight: "20px",
          transform: "scale(1.3) translateY(-10px)",
        };
      }
      if (element.name === "contact") {
        element.style = {
          marginRight: "20px",
          transform: "scale(1.3) translateY(-10px)",
        };
      }
    });
  }, [animationConfig]);

  return (
    <>
      <nav
        className="fixed w-full bottom-5 max-md:bottom-3"
        style={{ zIndex: 999 }}
      >
        <Row className="max-w-3xl mx-auto max-md:mp-5" positionX="center">
          <Row
            positionX="center"
            positionY="center"
            onMouseEnter={() => setNavHover(true)}
            onMouseLeave={() => setNavHover(false)}
            className="py-1 duration-500 ease-in-out bg-white border border-gray-100 dark:bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl max-md:py-0 max-md:px-0 gap-x-2 max-md:border-none dark:border-none"
            style={{
              width: isNavHover ? 380 : 320,
              transitionProperty: "width",
            }}
          >
            {links.map((el, i) => {
              const copy = [...animationConfig];
              const isActive = pathname === `/${el.url}`;
              return (
                <Link key={i} href={`/${el.url}`}>
                  <Card
                    onMouseEnter={() => {
                      copy[i].isHovered = true;
                      copy[i].style = {
                        transform: "scale(1.6) translateY(-10px)",
                        margin: "0 20px",
                        zIndex: 28,
                      };

                      setAnimationConfig(copy);
                    }}
                    onMouseLeave={() => {
                      copy[i].isHovered = false;
                      if (isNavHover) {
                        copy[i].style = {
                          transform: "scale(1.3) translateY(-10px)",
                        };
                      } else {
                        copy[i].style = {
                          transform: "scale(1) translateY(-10px)",
                        };
                      }
                      setAnimationConfig(copy);
                    }}
                    style={
                      isNavHover && isAtLeastOnElementHovered
                        ? {
                            ...animationConfig[i]?.style,
                            transitionProperty: "transform, margin",
                          }
                        : {}
                    }
                    className={`${
                      isActive
                        ? "bg-gray-800  dark:bg-gray-200"
                        : "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1c1c1c] dark:to-[#1c1c1c]"
                    } ${el.value === "projects" ? "z-50" : ""}`}
                  >
                    <div>
                      <el.Icon />
                    </div>
                  </Card>
                </Link>
              );
            })}
            <Row className="gap-x-2">
              <div
                className={`pl-2 border-l border-gray-100 dark:border-[#1c1c1c]  ${
                  isAtLeastOnElementHovered ? "border-none" : ""
                }`}
              >
                <Card
                  onClick={() => {
                    toggleTheme();
                  }}
                  onMouseEnter={() => {
                    const copy = [...animationConfig];

                    copy[3].isHovered = true;
                    copy[3].style = {
                      transform: "scale(1.6) translateY(-10px)",
                      margin: "0 20px",
                      zIndex: 28,
                    };
                    setAnimationConfig(copy);
                  }}
                  onMouseLeave={() => {
                    const copy = [...animationConfig];
                    copy[3].isHovered = false;
                    if (isNavHover) {
                      copy[3].style = {
                        transform: "scale(1.3) translateY(-10px)",
                      };
                    } else {
                      copy[3].style = { transform: "scale(1)" };
                    }
                    setAnimationConfig(copy);
                  }}
                  style={
                    isNavHover && isAtLeastOnElementHovered
                      ? animationConfig[3]?.style
                      : {}
                  }
                  className={`bg-gradient-to-br dark:from-[#1c1c1c] dark:to-[#1c1c1c] relative from-gray-50 to-gray-200`}
                >
                  <ThemeIcon />
                </Card>
              </div>
              <ClickOutside onClick={() => setOpen(false)}>
                <div className="relative">
                  <Card
                    onMouseEnter={() => {
                      const copy = [...animationConfig];
                      copy[4].isHovered = true;
                      copy[4].style = {
                        transform: "scale(1.6) translateY(-10px)",
                        zIndex: 28,
                      };
                      setAnimationConfig(copy);
                    }}
                    onMouseLeave={() => {
                      const copy = [...animationConfig];
                      copy[4].isHovered = false;
                      if (isNavHover) {
                        copy[4].style = {
                          transform: "scale(1.3) translateY(-10px)",
                        };
                      } else {
                        copy[4].style = { transform: "scale(1)" };
                      }
                      setAnimationConfig(copy);
                    }}
                    style={
                      isNavHover && isAtLeastOnElementHovered
                        ? animationConfig[4]?.style
                        : {}
                    }
                    onClick={() => setOpen(!open)}
                    className={`bg-gradient-to-br dark:from-[#1c1c1c] dark:to-[#1c1c1c]  relative from-gray-50 to-gray-200`}
                  >
                    {open ? (
                      <div
                        className={`absolute flex flex-col w-full gap-5 p-2 duration-500 ease-in-out transition-transform  bg-white border border-gray-100 min-w-min dark:bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl max-md:py-0 max-md:px-0 gap-x-2 max-md:border-none dark:border-none -top-[90px] ${
                          isNavHover && isAtLeastOnElementHovered
                            ? "scale-[0.60]"
                            : "scale-[0.80]"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Form
                          submit={() => null}
                          initialBody={{ lng: locale }}
                          name="lng"
                          id="lng"
                          form="lng"
                          children={({ inputProps, body }) => (
                            <Radio
                              {...inputProps("lng")}
                              onChange={() => {
                                setNavHover(false);
                                changeLanguage(body.lng);
                                setOpen(false);
                              }}
                              options={lng}
                            />
                          )}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    <TranslationIcon />
                  </Card>
                </div>
              </ClickOutside>
            </Row>
          </Row>
        </Row>
      </nav>
    </>
  );
};

const Card = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    {...rest}
    className={`grid w-12 h-12 transition-all  duration-500 ease-in-out  cursor-pointer  place-items-center   rounded-xl ${className}`}
  >
    {children}
  </div>
);

const persistLocaleCookie = (language: string) => {
  const date = new Date();
  const expireMs = 100 * 365 * 24 * 60 * 60 * 1000; // 100 days
  date.setTime(date.getTime() + expireMs);
  document.cookie = `NEXT_LOCALE=${language};expires=${date.toUTCString()};path=/`;
};

const changeLanguage = (language: string) => {
  setNextLanguage(language);
  persistLocaleCookie(language);
};

const ThemeIcon = () => (
  <div className="dark:relative theme-toggle theme-toggle-js isolate">
    <span className="moon "></span>
    <span className="sun"></span>
    <small className="sun__ray"></small>
    <small className="sun__ray"></small>
    <small className="sun__ray"></small>
    <small className="sun__ray"></small>
    <small className="sun__ray"></small>
    <small className="sun__ray"></small>
  </div>
);
