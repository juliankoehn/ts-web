import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../theme";
import { Layout } from "../components/layout";
import { DefaultSeo } from "next-seo";
import { defaultSeo } from "../next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...defaultSeo} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
