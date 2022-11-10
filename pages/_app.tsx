import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../theme";
import { Layout } from "../components/layout";
import { DefaultSeo } from "next-seo";
import { defaultSeo } from "../next-seo.config";
import dynamic from "next/dynamic";

// @ts-ignore
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...defaultSeo} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          border: "3px solid var(--chakra-colors-primary)",
        }}
        innerStyle={{
          backgroundColor: "var(--chakra-colors-primary)",
        }}
      />
    </ChakraProvider>
  );
}
