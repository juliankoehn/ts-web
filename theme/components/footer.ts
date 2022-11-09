import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(["container", "content", "text"]);

export const Footer = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      bg: "white",
      fontSize: "sm",
      fontWeight: "light",
      letterSpacing: "wider",
      py: "50px",
      color: "gray.800",
    },
    content: {
      display: "flex",
      flexDirection: {
        base: "column",
        md: "row",
      },
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "black",
    },
  },
});
