import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(["container", "maintext"]);

export const Welcome = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      position: "relative",
      zIndex: 2,
      overflow: "hidden",
      minH: "100vh",
      bg: "#00b9ff",
      display: "flex",
      alignItems: "center",
    },
    maintext: {
      fontWeight: "bold",
      fontSize: {
        base: "8xl",
        md: "9xl",
      },
      lineHeight: 1,
      color: "white",
      textAlign: {
        base: "center",
        md: "right",
      },
      position: "relative",
      width: "fit-content",
      mx: "auto",
      paddingRight: "10px",
      _after: {
        content: '""',
        width: {
          base: "10px",
          md: "20px",
        },
        height: {
          base: "10px",
          md: "20px",
        },
        display: "block",
        borderRadius: "50%",
        bg: "primary",
        position: "absolute",
        right: {
          base: 0,
          md: "-10px",
        },
        bottom: {
          base: "5px",
          md: "15px",
        },
      },
    },
  },
});
