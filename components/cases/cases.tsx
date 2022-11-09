import {
  chakra,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  HTMLChakraProps,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useId } from "react";

export interface CasesProps extends HTMLChakraProps<"div"> {}

type Case = {
  title: string;
  type: string;
  slug: string;
  customer: string;
};

const exampleCases: Case[] = [
  {
    title: "OPADE",
    type: "Online Platform",
    customer: "K.I.T. Group",
    slug: "opade",
  },
  {
    title: "Digital Signage",
    type: "Hardware",
    slug: "messe-kiosk",
    customer: "Mode Centrum Hamburg",
  },
  {
    title: "Audi Q3",
    type: "Jobsite",
    slug: "audi-q3",
    customer: "Audi",
  },
];

export const Cases: React.FC<CasesProps> = (props) => {
  const id = useId();
  const styles = useMultiStyleConfig("Cases");

  return (
    <chakra.section {...props} __css={styles.container}>
      <chakra.div __css={styles.list}>
        <Container maxW="7xl">
          {exampleCases.map((exampleCase, index) => (
            <Link
              key={`${id}-${index}`}
              passHref
              href={`/cases/${exampleCase.slug}`}
              legacyBehavior
            >
              <chakra.a __css={styles.item} role="group">
                <Grid
                  templateColumns="repeat(12, 1fr)"
                  columnGap={4}
                  rowGap={{
                    base: 1,
                    md: 56,
                  }}
                >
                  <GridItem
                    colSpan={{
                      base: 12,
                      md: 2,
                    }}
                    display="flex"
                    justifyContent={{
                      base: "flex-start",
                      md: "flex-end",
                    }}
                    alignItems="center"
                  >
                    <chakra.span __css={styles.itemType}>
                      {exampleCase.type}
                    </chakra.span>
                  </GridItem>
                  <GridItem
                    colSpan={{
                      base: 12,
                      md: 10,
                    }}
                    colStart={{
                      md: 4,
                    }}
                    colEnd={12}
                  >
                    <Heading
                      fontSize={{
                        base: "4xl",
                        md: "5xl",
                      }}
                      data-letter={exampleCase.title[0]}
                      sx={styles.itemTitle}
                    >
                      {exampleCase.title}
                    </Heading>
                    <Text
                      fontSize="sm"
                      transform="uppercase"
                      sx={styles.itemSubtitle}
                    >
                      {exampleCase.customer}
                    </Text>
                  </GridItem>
                </Grid>
              </chakra.a>
            </Link>
          ))}
        </Container>
      </chakra.div>
    </chakra.section>
  );
};
