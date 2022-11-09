import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers([
  "container",
  "headerBlock",
  "headerBlockMain",
  "headerBlockTop",
  "headerBlockSubtitleWrapper",
  "headerBlockSubtitle",
  "headerBlockTitle",
  "headerBlockBottom",
  "headerBlockBottomTitle",
  "headerBlockBottomDescription",
]);

export const CaseDetail = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      display: "flex",
      color: "white",
      minH: "100vh",
      bg: "#111B2D",
    },
    headerBlock: {},
    headerBlockMain: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      flex: 1,
    },
    headerBlockTop: {
      flex: "1 1 100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    headerBlockSubtitleWrapper: {},
    headerBlockSubtitle: {
      fontSize: ".6rem",
      opacity: ".5",
      fontWeight: "bold",
      letterSpacing: "widest",
      lineHeight: "10",
      textTransform: "uppercase",
    },
    headerBlockTitle: {
      fontFamily: "heading",
      fontSize: {
        base: "4xl",
        sm: "6xl",
        md: "8xl",
      },
      letterSpacing: {
        base: "wider",
      },
      lineHeight: {
        base: "none",
      },
    },
    headerBlockBottom: {
      py: "30px",
      borderTop: "1px solid #1A263B",
    },
    headerBlockBottomTitle: {
      color: "white",
      opacity: ".5",
      fontSize: ".6rem",
      fontWeight: "bold",
      letterSpacing: "widest",
      textTransform: "uppercase",
    },
    headerBlockBottomDescription: {
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold",
    },
  },
});
