import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BackToTop from "@/components/backToTop";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <BackToTop />
    </>
  );
}
