import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { inputTheme } from "./input";

const variants = {
  outline: defineStyle(
    (props) => inputTheme?.variants?.outline(props)?.field ?? {}
  ),
};

export const textareaTheme = defineStyleConfig({
  variants,
});
