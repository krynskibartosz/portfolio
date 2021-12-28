import type { AppProps } from "next/app";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return <Component id="root" {...pageProps} />;
}

export default App;
