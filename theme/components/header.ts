import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(["container", "wrapper"]);

export const Header = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      width: "100%",
      position: "fixed",
      zIndex: 5,
      left: 0,
      right: 0,
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
