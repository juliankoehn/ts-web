import { ComponentStyleConfig, defineStyle } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      bg: "primary",
      borderRadius: "0",
      fontWeight: 600,
      transition:
        "background-color .4s ease-in-out,color .4s ease-in-out,opacity .4s ease-in-out,border .4s ease-in-out",
      _hover: {
        bg: "black",
      },
    },
  },
  sizes: {
    "2xl": defineStyle({
      h: "16",
      minW: "16",
      fontSize: "lg",
      px: "10",
    }),
  },
};
