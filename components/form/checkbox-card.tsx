import {
  Box,
  BoxProps,
  Checkbox,
  Flex,
  HStack,
  Stack,
  StackProps,
  SystemStyleObject,
  useCheckbox,
  useCheckboxGroup,
  UseCheckboxGroupProps,
  UseCheckboxProps,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { useId } from "react";

type CheckboxCardGroupProps = StackProps & UseCheckboxGroupProps;

export const CheckboxCardGroup: React.FC<CheckboxCardGroupProps> = (props) => {
  const { children, defaultValue, value, onChange, ...rest } = props;
  const { getCheckboxProps } = useCheckboxGroup({
    defaultValue,
    value,
    onChange,
  });

  const cards = React.useMemo(
    () =>
      React.Children.toArray(children)
        .filter<React.ReactElement<RadioCardProps>>(React.isValidElement)
        .map((card) => {
          return React.cloneElement(card, {
            checkboxProps: getCheckboxProps({
              value: card.props.value,
            }),
          });
        }),
    [children, getCheckboxProps]
  );

  return (
    <Flex flexWrap="wrap" {...rest}>
      {cards}
    </Flex>
  );
};

interface RadioCardProps extends BoxProps {
  value: string;
  checkboxProps?: UseCheckboxProps;
}

export const CheckboxCard = (props: RadioCardProps) => {
  const { checkboxProps, children, ...rest } = props;
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useCheckbox(checkboxProps);
  const id = useId();
  const styles = useStyleConfig("RadioCard", props);

  const cardStyles: SystemStyleObject = {
    ...styles,
    padding: "20px 30px",
    border: "1px solid",
    borderColor: "white",
    transition:
      "background-color .4s ease-in-out, color .4s ease-in-out, opacity .4s ease-in-out, border .4s ease-in-out",
    color: "white",
    cursor: "pointer",
    display: "inline-block",
    marginRight: 4,
    marginBottom: 4,
    borderRadius: 0,
    _hover: {
      backgroundColor: "black",
      borderColor: "black",
    },
    _checked: {
      backgroundColor: "primary",
      borderColor: "primary",
      color: "white",
      _hover: {
        opacity: 0.8,
      },
    },
  };

  return (
    <Box
      as="label"
      cursor="pointer"
      {...getLabelProps()}
      sx={{
        ".focus-visible + [data-focus]": {
          boxShadow: "outline",
          zIndex: 1,
        },
      }}
    >
      <input {...getInputProps()} aria-labelledby={id} />
      <Box sx={cardStyles} {...getCheckboxProps()} {...rest}>
        <Stack direction="row">
          <Box flex="1">{children}</Box>
        </Stack>
      </Box>
    </Box>
  );
};
