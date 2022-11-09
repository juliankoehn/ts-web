import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(["wrapper", "content", "main"]);

export const Layout = helpers.defineMultiStyleConfig({
  baseStyle: {
    wrapper: {
      display: "flex",
      minH: "100vh",
      maxW: "100%",
      flexDirection: "column",
      flex: 1,
    },
    content: {
      flex: "1 0 auto",
      zIndex: 6,
    },
    main: {
      flex: 1,
      minH: "100%",
      "> :nth-child(1)": {
        paddingTop: "120px",
      },
    },
  },
});
