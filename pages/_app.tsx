import { GlobalContextProvider } from "@/contexts/globalContext";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <GlobalContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContextProvider>
    </>
  );
}
