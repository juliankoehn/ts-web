import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

import { PartsStyleFunction } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const outline = definePartsStyle((props) => {
  return {
    field: {
      fontSize: "sm",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "brightness(1.5)",
      borderColor: "transparent",
      borderRadius: 0,
      _focusVisible: {
        borderColor: "primary",
      },
      _placeholder: {
        color: "rgba(255, 255, 255, 0.4)",
        fontSize: "sm",
      },
    },
  };
});

export const inputTheme = defineMultiStyleConfig({
  variants: {
    outline,
  },
});
