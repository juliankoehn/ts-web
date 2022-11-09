import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers([
  "container",
  "body",
  "rects",
  "rect",
  "outer",
  "inner",
]);

export const Navigation = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      visibility: "hidden",
      pointerEvents: "none",
    },
    body: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      width: "100%",
      minHeight: "100vh",
      zIndex: 1,
    },
    rects: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      flexWrap: "nowrap",
      pointerEvents: "none",
      zIndex: -1,
    },
    rect: {
      width: "25%",
      height: "100%",
      bg: "primary",
      transformOrigin: "50% 0 0",
    },
    outer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      bg: "white",
      transformOrigin: "50% 0 0",
    },
    inner: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      width: "100%",
      padding: "calc(50px + 6.25vw) 17.29167vw 6.25vw",
      color: "black",
    },
  },
});
