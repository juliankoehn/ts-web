import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import { CaseDetail } from "./components/case";
import { Cases } from "./components/cases";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { Logo } from "./components/logo";
import { MenuButton } from "./components/menu-button";
import { Navigation } from "./components/navigation";
import { Welcome } from "./components/welcome";
import { Fira_Mono } from "@next/font/google";
import { Button } from "./components/button";
import { RadioCard } from "./components/radio-card";

const yellow = {
  "50": "#FEF8E6",
  "100": "#FDECBA",
  "200": "#FBE08E",
  "300": "#FAD561",
  "400": "#F8C935",
  "500": "#F7BD08",
  "600": "#C59707",
  "700": "#947105",
  "800": "#634B03",
  "900": "#312602",
};

const red = {
  "50": "#FBE9E9",
  "100": "#F5C2C2",
  "200": "#EF9A9A",
  "300": "#E87272",
  "400": "#E24B4B",
  "500": "#DC2323",
  "600": "#B01C1C",
  "700": "#841515",
  "800": "#580E0E",
  "900": "#2C0707",
};

const mono = Fira_Mono({
  weight: ["400", "500", "700"],
});

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: "white",
        color: "black",
      },
    },
  },
  fonts: {
    heading: `${mono.style.fontFamily}, ${defaultTheme.fonts?.heading}`,
    body: `${mono.style.fontFamily}, ${defaultTheme.fonts?.body}`,
  },
  colors: {
    black: "#070707",
    yellow,
    secondary: "#054ADA",
    primary: "#f80",
  },
  components: {
    Button,
    CaseDetail,
    Cases,
    Contact,
    Header,
    Footer,
    Logo,
    Layout,
    MenuButton,
    Navigation,
    Welcome,
    RadioCard,
  },
});
