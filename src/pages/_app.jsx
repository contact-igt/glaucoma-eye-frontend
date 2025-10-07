import useUTMSource from "@/hooks/useUTMSource";
import "@/styles/globals.css";
// import Script from "next/script";

export default function App({ Component, pageProps }) {
  useUTMSource();
  return (
    <Component {...pageProps} />)
}
