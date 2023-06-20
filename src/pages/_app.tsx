import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/lib/Layout/intex";
import PopupProvider from "@/lib/context/popup";
import ModalProvider from "@/lib/context/modalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <PopupProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PopupProvider>
    </ModalProvider>
  );
}
