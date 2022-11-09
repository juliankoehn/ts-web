import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { Welcome } from "../components/sections/welcome";

export default function Home() {
  return (
    <>
      <Welcome pt="80px" />
      <div>
        <Container maxW="7xl">
          <Box py="3.5rem">
            <Box as="h1">
              <span>Plan.</span>
              <span>Code.</span>
              <span>Ship.</span>
            </Box>
            <Box as="h2">
              teamspiel is a digital product studio that helps companies build
              products that people love.
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}
