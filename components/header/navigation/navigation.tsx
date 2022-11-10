import {
  chakra,
  createStylesContext,
  Grid,
  GridItem,
  Portal,
  SimpleGrid,
  Stack,
  SystemStyleObject,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import React, { memo } from "react";
import { AddressBlock } from "../../address-block/address-block";

const [StylesProvider, useStyles] = createStylesContext("Navigation");

export interface NavigationProps {
  isOpen: boolean;
  onCloseComplete: () => void;
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const { isOpen, onCloseComplete } = props;

  const styles = useMultiStyleConfig("Navigation");

  return (
    <StylesProvider value={styles}>
      <AnimatePresence onExitComplete={onCloseComplete}>
        <Portal>
          <chakra.div
            as={motion.div}
            initial={{
              opacity: 0,
              visibility: "hidden",
              pointerEvents: "none",
            }}
            animate={
              isOpen
                ? {
                    opacity: 1,
                    visibility: "visible",
                    pointerEvents: "all",
                  }
                : {
                    opacity: 0,
                    visibility: "hidden",
                    pointerEvents: "none",
                  }
            }
            __css={styles.container}
          >
            <NavigationBody isOpen={isOpen}>
              <NavigationOuter isOpen={isOpen}>
                <chakra.div __css={styles.inner}>
                  <Grid templateColumns="repeat(12, 1fr)" gap={4} width="100%">
                    <GridItem colSpan={[12, 8]}>
                      <Stack>
                        <Link href="/">Home</Link>
                        <Link href="/cases">Cases</Link>
                        <Link href="/hello">Say Hello</Link>
                      </Stack>
                    </GridItem>
                    <GridItem
                      colSpan={[0, 4]}
                      display={{
                        base: "none",
                        md: "block",
                      }}
                    >
                      <AddressBlock />
                    </GridItem>
                  </Grid>
                </chakra.div>
              </NavigationOuter>
              <NavigationRects count={4} isOpen={isOpen} />
            </NavigationBody>
          </chakra.div>
        </Portal>
      </AnimatePresence>
    </StylesProvider>
  );
};

interface NavigationBodyProps {
  children?: React.ReactNode;
  isOpen?: boolean;
}

const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      //delayChildren: 0.2,
      staggerChildren: 0.125,
      staggerDirection: -1,
    },
  },
};

const NavigationBody: React.FC<NavigationBodyProps> = (props) => {
  const { children, isOpen } = props;
  const styles = useStyles();

  return (
    <chakra.div
      as={motion.div}
      __css={styles.body}
      //   initial="hidden"
      //   animate={isOpen ? "animate" : "hidden"}
      //   variants={staggerContainer}
    >
      {children}
    </chakra.div>
  );
};

interface NavigationRectsProps {
  count: number;
  isOpen: boolean;
}

const NavigationRects: React.FC<NavigationRectsProps> = (props) => {
  const { count, isOpen } = props;
  const styles = useStyles();

  return (
    <chakra.div
      as={motion.div}
      initial="hidden"
      animate={isOpen ? "animate" : "hidden"}
      variants={staggerContainer}
      __css={styles.rects}
    >
      {Array.from({ length: count }).map((_, index) => (
        <NavigationRect key={index} />
      ))}
    </chakra.div>
  );
};

const rectVariant: Variants = {
  hidden: {
    transform: "scaleY(0)",
  },
  animate: {
    transform: "scaleY(1)",
    transition: {
      duration: 0.2,
    },
  },
};

const NavigationRect: React.FC = memo(() => {
  const styles = useStyles();

  const rectStyles: SystemStyleObject = {
    ...styles.rect,
  };

  return (
    <chakra.div as={motion.div} variants={rectVariant} __css={rectStyles} />
  );
});

NavigationRect.displayName = "NavigationRect";

interface NavigationOuterProps {
  children?: React.ReactNode;
  isOpen?: boolean;
}

const NavigationOuter: React.FC<NavigationOuterProps> = (props) => {
  const { children, isOpen } = props;

  const styles = useStyles();

  return (
    <chakra.div
      as={motion.div}
      animate={isOpen ? "animate" : "hidden"}
      variants={{
        hidden: {
          y: "-100%",
          transform: 'translateY("-101%")',
        },
        animate: {
          y: "0",
          transition: {
            delay: 0.3,
          },
        },
      }}
      __css={styles.outer}
    >
      {children}
    </chakra.div>
  );
};
