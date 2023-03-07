import Head from "next/head";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>農チョク</title>
        <meta name="description" content="農家さんのファンを作るECサイト" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}
