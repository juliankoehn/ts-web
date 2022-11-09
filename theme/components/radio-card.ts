import { ComponentStyleConfig } from "@chakra-ui/react";

export const RadioCard: ComponentStyleConfig = {
  baseStyle: {
    position: "relative",
    padding: 4,
    transitionProperty: "common",
    border: "1px solid",
    borderColor: "white",
    transition:
      "background-color .4s ease-in-out, color .4s ease-in-out, opacity .4s ease-in-out, border .4s ease-in-out",
    color: "white",
    cursor: "pointer",
    borderRadius: 0,
    maxWidth: "320px",
    flex: 1,
    _hover: {
      backgroundColor: "black",
      borderColor: "black",
    },
    _checked: {
      backgroundColor: "primary",
      borderColor: "primary",
      color: "white",
      _hover: {
        opacity: 0.8,
      },
    },
  },
};
