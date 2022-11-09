import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers([
  "container",
  "list",
  "item",
  "itemType",
  "itemTitle",
  "itemSubtitle",
]);

const bg = "black";

export const Cases = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      bg,
      minH: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    list: {
      padding: "60px 0",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      bg,
    },
    item: {
      display: "block",
      padding: "15px 0",
      color: "white",
      willChange: "color",
      transition: "color .4s linear",

      _hover: {
        textDecoration: "none",
        color: "primary",
      },
    },
    itemType: {
      fontSize: "xs",
      fontWeight: "black",
      textTransform: "uppercase",
      textAlign: {
        md: "right",
      },
    },
    itemTitle: {
      position: "relative",
      opacity: 1,
      willChange: "opacity",
      transition: "opacity .4s ease",
      _before: {
        fontSize: {
          base: "3rem",
          md: "8rem",
        },
        content: "attr(data-letter)",
        position: "absolute",
        textAlign: "left",
        maxW: "133px",
        top: "50%",
        left: "-90px",
        transform: "translateY(-50%) translateX(25px)",
        opacity: 0,
        pointerEvents: "none",
        backgroundClip: "text",
        backgroundImage:
          "repeating-linear-gradient(45deg,transparent,transparent 8px,#fff 0,#fff 10px)",
        willChange: "opacity,transform",
        transition: "opacity .4s linear,transform .4s linear",
        _groupHover: {
          opacity: 1,
          transform: "translateY(-50%) translateX(0px)",
        },
      },
    },
    itemSubtitle: {
      opacity: 0,
      willChange: "opacity",
      transition: "opacity .4s ease",
      textTransform: "uppercase",
      _groupHover: {
        opacity: 1,
      },
    },
  },
});
