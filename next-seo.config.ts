import type { DefaultSeoProps } from "next-seo";

export const defaultSeo: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "teamspiel",
  },
  titleTemplate: "%s | teamspiel",
  defaultTitle: "teamspiel - Hands-On Softwareentwicklung",
};
