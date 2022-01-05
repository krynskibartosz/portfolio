import { HomeIcon } from "../base/Icons/Home";
import { FolderIcon } from "../base/Icons/Folder";
import { ContactIcon } from "../base/Icons/Contact";

export const links = [
  {
    label: "Home",
    value: "home",
    url: "",
    Icon: HomeIcon,
  },
  {
    label: "Projects",
    value: "projects",
    url: "projects",
    Icon: FolderIcon,
  },
  {
    label: "Contact",
    value: "contact",
    url: "contact",
    Icon: ContactIcon,
  },
];

export const toggleTheme = () => {
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
