import { Heading, Stack, Text, Link } from "@chakra-ui/react";
import React from "react";
import { Email } from "react-obfuscate-email";

export const AddressBlock = () => {
  return (
    <Stack spacing={4}>
      <Heading fontSize="2xl">teamspiel HQ</Heading>

      <Stack spacing="1">
        <Text>
          Unterj&ouml;rn 19a
          <br />
          24536 Neumuenster
        </Text>
      </Stack>
      <Text>
        <Link as={Email} email="hello@teamspiel.io" />
      </Text>
    </Stack>
  );
};
