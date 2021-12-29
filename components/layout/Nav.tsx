import { Row, Link } from "components";

import { TranslationIcon } from "components/layout/Icons/Translation";
import { HTMLAttributes } from "react";
import { HomeIcon } from "./Icons/Home";
import { FolderIcon } from "./Icons/Folder";
import { ContactIcon } from "./Icons/Contact";
import { IdeaIcon } from "./Icons/Idea";
import setNextLanguage from "next-translate/setLanguage";

const toggleTheme = () => {
  const dark = localStorage.theme === "dark";
  if (dark) {
    localStorage.theme = "light";
  } else {
    localStorage.theme = "dark";
  }
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export const Nav = () => {
  const config = [
    {
      label: "Home",
      value: "",
      Icon: HomeIcon,
    },
    {
      label: "Projects",
      value: "projects",
      Icon: FolderIcon,
    },
    {
      label: "Contact",
      value: "contact",
      Icon: ContactIcon,
    },
  ];

  return (
    <>
      <nav className="absolute w-full bottom-8 max-md:bottom-3">
        <Row className="max-w-5xl mx-auto max-md:mp-5" positionX="center">
          <Row
            positionX="center"
            positionY="center"
            className="px-8 py-1 bg-white border border-gray-200 rounded-full max-md:py-0 max-md:px-0 gap-x-8 max-md:border-none"
          >
            {config.map((el, i) => (
              <Link key={i} href={`/${el.value}`}>
                <Card>
                  <el.Icon />
                </Card>
              </Link>
            ))}
            <Row className="">
              <div className="pl-5 border-l border-gray-100 max-md:hidden">
                <Card
                  onClick={() => {
                    toggleTheme();
                  }}
                >
                  <IdeaIcon />
                </Card>
              </div>
              <div className="pl-5 border-l border-gray-100">
                <Card
                  onClick={() => {
                    changeLanguage("en");
                  }}
                >
                  <TranslationIcon />
                </Card>
              </div>
            </Row>
          </Row>
        </Row>
      </nav>
    </>
  );
};

const Card = ({
  children,
  ...rest
}: { children: JSX.Element } & HTMLAttributes<HTMLDivElement>) => (
  <div
    {...rest}
    className="p-5 cursor-pointer max-md:p-4 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl"
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
  console.log("language :>> ", language);
  setNextLanguage(language);
  persistLocaleCookie(language);
};
