import { createMultiStyleConfigHelpers, keyframes } from "@chakra-ui/react";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(["root", "bottom"]);

const animation = keyframes({
  "0%": {
    strokeWidth: "1pt",
    strokeDashoffset: 1200,
    fillOpacity: 0,
  },
  "50%": {
    fillOpacity: 0,
  },
  "100%": {
    strokeDashoffset: 0,
    fillOpacity: 1,
    strokeWidth: "0pt",
  },
});

export const Logo = helpers.defineMultiStyleConfig({
  baseStyle: {
    root: {
      py: 4,
      height: "100%",

      "> svg": {
        display: "block",
        width: "100%",
        height: "30px",
        "> #teamspiel": {
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: 0,
          animation: `${animation} 3s linear`,
          transition: "all .5s ease-in-out",
        },
      },
      _hover: {
        "#teamspiel": {
          animation: `${animation} 2s linear infinite`,
        },
      },
    },
  },
});
