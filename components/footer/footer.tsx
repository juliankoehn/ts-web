import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React from "react";

export const Footer: React.FC = () => {
  const styles = useMultiStyleConfig("Footer");

  return (
    <chakra.footer __css={styles.container} role="contentinfo">
      <Container maxW="7xl">
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing="10"
        >
          <Text as="span" color="gray.800" textTransform="uppercase">
            &copy; <Text as="strong">teamspiel</Text> {new Date().getFullYear()}
          </Text>
          <Link>Impressum</Link>
        </Stack>
      </Container>
    </chakra.footer>
  );
};
