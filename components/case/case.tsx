import {
  Box,
  chakra,
  Container,
  createStylesContext,
  Flex,
  HTMLChakraProps,
  SimpleGrid,
  Stack,
  SystemStyleObject,
  useMultiStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React from "react";
import { fadeIn, staggerContainer } from "../../animations/variants";

const [StylesProvider, useStyles] = createStylesContext("CaseDetail");

interface SharedCaseProps {
  project: string;
  services: string[];
  client: string;
  sector: string;
}

export interface CaseDetailProps
  extends SharedCaseProps,
    HTMLChakraProps<"div"> {
  bgColor: string;
}

export const Case: React.FC<CaseDetailProps> = (props) => {
  const { project, services, client, sector, bgColor, ...restProps } = props;
  const styles = useMultiStyleConfig("CaseDetail");

  const commonProps = {
    project,
    services,
    client,
    sector,
  };

  const containerStyles: SystemStyleObject = {
    ...styles.container,
    bg: bgColor,
  };

  return (
    <StylesProvider value={styles}>
      <chakra.section __css={containerStyles} {...restProps}>
        <CaseHeader {...commonProps} />
      </chakra.section>
    </StylesProvider>
  );
};

interface InfoProps extends SharedCaseProps {}

const Info: React.FC<InfoProps> = (props) => {
  const { services, client, sector } = props;

  const styles = useStyles();

  return (
    <chakra.div
      as={motion.div}
      variants={fadeIn()}
      __css={styles.headerBlockBottom}
    >
      <SimpleGrid columns={[1, 1, 3]} gap="4">
        <Stack spacing="1" as={motion.div} variants={fadeIn()}>
          <chakra.div __css={styles.headerBlockBottomTitle}>
            Services
          </chakra.div>
          <chakra.div
            as={motion.div}
            variants={fadeIn()}
            __css={styles.headerBlockBottomDescription}
          >
            {services.join(", ")}
          </chakra.div>
        </Stack>
        <Stack spacing="1" as={motion.div} variants={fadeIn()}>
          <chakra.div __css={styles.headerBlockBottomTitle}>Client</chakra.div>
          <chakra.div __css={styles.headerBlockBottomDescription}>
            {client}
          </chakra.div>
        </Stack>
        <Stack spacing="1" as={motion.div} variants={fadeIn()}>
          <chakra.div __css={styles.headerBlockBottomTitle}>Sector</chakra.div>
          <chakra.div __css={styles.headerBlockBottomDescription}>
            {sector}
          </chakra.div>
        </Stack>
      </SimpleGrid>
    </chakra.div>
  );
};

interface CaseHeaderProps extends SharedCaseProps {}

const CaseHeader: React.FC<CaseHeaderProps> = (props) => {
  const { project } = props;
  const styles = useStyles();

  return (
    <Container
      as={motion.div}
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      flex="1"
      maxW="7xl"
      display="flex"
      flexDir="column"
      width="100%"
    >
      <chakra.div __css={styles.headerBlockMain}>
        <chakra.div __css={styles.headerBlockTop}>
          <chakra.div __css={styles.headerBlockSubtitleWrapper}>
            <chakra.div
              as={motion.div}
              variants={fadeIn()}
              __css={styles.headerBlockSubtitle}
            >
              Project
            </chakra.div>
          </chakra.div>
          <chakra.h1
            as={motion.h1}
            variants={fadeIn()}
            __css={styles.headerBlockTitle}
          >
            {project}
          </chakra.h1>
        </chakra.div>

        <Info {...props} />
      </chakra.div>
    </Container>
  );
};
