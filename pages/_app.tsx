import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.css";

import i18nConfig from "../i18n";
import appWithI18n from "next-translate/appWithI18n";

function App({ Component, pageProps }: any) {
  i18nConfig.defaultLocale = "fr";

  useEffect(() => {
    //* On page load set theme
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return <Component id="root" {...pageProps} />;
}

export default appWithI18n(App, {
  ...i18nConfig,
});
