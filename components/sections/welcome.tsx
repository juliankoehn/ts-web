import {
  chakra,
  Container,
  Heading,
  HTMLChakraProps,
  SimpleGrid,
  useMultiStyleConfig,
  Text,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { fadeIn, staggerContainer } from "../../animations/variants";

export interface WelcomeProps extends HTMLChakraProps<"div"> {}

export const Welcome: React.FC<WelcomeProps> = (props) => {
  const { ...restProps } = props;

  const styles = useMultiStyleConfig("Welcome");

  return (
    <chakra.section
      __css={styles.container}
      as={motion.div}
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <Container maxW="7xl">
        <SimpleGrid columns={[1, 1, 2]} gap={4} {...restProps}>
          <chakra.div as={motion.div} variants={fadeIn()}>
            <chakra.div __css={styles.maintext}>Moin</chakra.div>
          </chakra.div>
          <Stack spacing={4}>
            <Heading as={motion.h3} variants={fadeIn()}>
              Wir bauen digitale Produkte, die Menschen glücklich machen.
            </Heading>
            <Text fontSize="lg" as={motion.p} variants={fadeIn()}>
              Mit uns kannst du deine Idee in die Welt bringen. Wir sind ein
              Team aus kreativen Köpfen, die sich auf die Entwicklung von
              digitalen Produkten spezialisiert haben.
            </Text>
            <Text fontSize="lg">Deine Lösung, von uns maßgeschneidert.</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </chakra.section>
  );
};
