import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(["title"]);

export const Contact = helpers.defineMultiStyleConfig({
  baseStyle: {
    title: {
      flex: "1 1 auto",
      color: "white",
      "> strong": {
        color: "primary",
      },
    },
  },
});
