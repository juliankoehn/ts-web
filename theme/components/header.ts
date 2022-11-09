import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers([
  "outer",
  "container",
  "wrapper",
]);

export const Header = helpers.defineMultiStyleConfig({
  baseStyle: {
    outer: {
      zIndex: 1,
      ".headroom-wrapper": {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      },
      ".headroom": {
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        bg: "transparent",
      },
      ".headroom--unfixed": {
        position: "relative",
        transform: "translateY(0)",
      },
      ".headroom--scrolled": {
        transition: "transform 200ms ease-in-out",
        bg: "black",
      },
      ".headroom--unpinned": {
        position: "fixed",
        transform: "translateY(-100%)",
      },
      ".headroom--pinned": {
        position: "fixed",
        transform: "translateY(0%)",
      },
    },
    container: {
      width: "100%",
      zIndex: 5,
      alignItems: "center",
      justifyContent: "space-between",
      ".header__overlay": {
        display: "flex",
        justifyContent: "center",
        transformOrigin: "left top",
        willChange: "transform, opacity",
        position: "fixed",
        inset: 0,
        backgroundColor: "white",
      },
    },
    wrapper: {
      //   height: "65px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "all 0.3s ease-in-out",
      py: 2,
    },
  },
  variants: {
    scrolled: {
      container: {
        ":before": {
          transform: "scaleY(1)",
        },
      },
    },
  },
});
