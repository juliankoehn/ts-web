import { Box, chakra, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { FadeIn } from "../../animations/fade-in";

export type WhyPoint = {
  benefit: string;
  number: string;
  description: string;
};

export const Why: React.FC = () => {
  return (
    <chakra.section bg="#ADFC92" py={32}>
      <Container maxW="5xl">
        <FadeIn>
          <Heading as="h2" fontSize="5xl" textAlign="center">
            Why do teams choose us?
          </Heading>
          <SimpleGrid columns={3}>
            <Box bg="tomato" height="80px">
              <Heading as="h3">Speed</Heading>
            </Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
          </SimpleGrid>
        </FadeIn>
      </Container>
    </chakra.section>
  );
};
