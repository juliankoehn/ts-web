import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(["container", "description"]);

export const MenuButton = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "transparent",
      transition: "all .3s ease-in-out",
      cursor: "pointer",
      px: 4,
      py: 2,
      color: "white",
      border: "1px solid",
      borderColor: "transparent",
      _hover: {
        color: "white",
      },
      _active: {
        bg: "white",
        color: "black",

        _hover: {
          color: "white",
          bg: "black",
          borderColor: "white",
        },
      },
      ".menu-button__icon": {
        width: "30px",
        height: "30px",
      },
      ".menu-button__line": {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3px",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        _groupHover: {},
      },
    },
    description: {
      mr: 4,
      fontSize: "sm",
      transition: "all .150s ease-in-out",
      color: "inherit",
    },
  },
});
