import {
  Box,
  BoxProps,
  Circle,
  createIcon,
  Icon,
  Stack,
  useId,
  useRadio,
  useRadioGroup,
  UseRadioProps,
  useStyleConfig,
  Text,
  Tooltip,
  SimpleGrid,
  SimpleGridProps,
  Flex,
} from "@chakra-ui/react";
import { RiQuestionLine } from "react-icons/ri";
import React from "react";

interface RadioCardGroupProps<T> extends Omit<SimpleGridProps, "onChange"> {
  name?: string;
  value?: T;
  defaultValue?: string;
  onChange?: (value: T) => void;
}

export const RadioCardGroup = <T extends string>(
  props: RadioCardGroupProps<T>
) => {
  const { children, name, defaultValue, value, onChange, ...rest } = props;
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
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
            radioProps: getRadioProps({
              value: card.props.value,
            }),
          });
        }),
    [children, getRadioProps]
  );

  return <SimpleGrid {...getRootProps(rest)}>{cards}</SimpleGrid>;
};

interface RadioCardProps extends BoxProps {
  value: string;
  label?: string;
  description?: string;
  price?: string;
  radioProps?: UseRadioProps;
  tooltip?: string;
}

export const RadioCard = (props: RadioCardProps) => {
  const { radioProps, children, label, tooltip, price, description, ...rest } =
    props;
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useRadio(radioProps);
  const id = useId(undefined, "radio-button");

  const styles = useStyleConfig("RadioCard", props);
  const inputProps = getInputProps();
  const checkboxProps = getCheckboxProps();
  const labelProps = getLabelProps();

  return (
    <Flex
      as="label"
      cursor="pointer"
      {...labelProps}
      sx={{
        ".focus-visible + [data-focus]": {
          boxShadow: "outline",
          zIndex: 1,
        },
      }}
    >
      <input {...inputProps} aria-labelledby={id} />
      <Box sx={styles} {...checkboxProps} {...rest}>
        <Stack direction="row">
          {state.isChecked ? (
            <Circle bg="accent" size="4">
              <Icon as={CheckIcon} boxSize="2.5" color="inverted" />
            </Circle>
          ) : (
            <Circle borderWidth="2px" size="4" />
          )}
          <Stack flex="1">
            <Text fontWeight="bold">{label || children}</Text>

            {description && <Text fontSize="sm">{description}</Text>}
            {price && <Text fontSize="sm">{price}</Text>}
          </Stack>
          {tooltip && (
            <Tooltip label={tooltip}>
              <Icon as={RiQuestionLine} />
            </Tooltip>
          )}
        </Stack>
      </Box>
    </Flex>
  );
};

export const CheckIcon = createIcon({
  displayName: "CheckIcon",
  viewBox: "0 0 12 10",
  path: (
    <polyline
      fill="none"
      strokeWidth="2px"
      stroke="currentColor"
      strokeDasharray="16px"
      points="1.5 6 4.5 9 10.5 1"
    />
  ),
});
