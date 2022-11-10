import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Input,
  ScaleFade,
  SimpleGrid,
  Stack,
  Textarea,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import React, { useRef } from "react";
import { CheckboxCard, CheckboxCardGroup } from "../form/checkbox-card";
import { RadioCard, RadioCardGroup } from "../atoms/radio-card/radio-card";
import { AddressBlock } from "../address-block/address-block";
import { useInView } from "react-intersection-observer";
import { FadeIn } from "../../animations/fade-in";

type Budget = {
  label: string;
  tooltip?: string;
  description?: string;
  price?: string;
};

type Assistant = {
  label: string;
  value: string;
};

const assistants: Assistant[] = [
  {
    label: "Everything",
    value: "everything",
  },
  {
    label: "Strategy",
    value: "strategy",
  },
  {
    label: "UX/UI Design",
    value: "ux-ui-design",
  },
  {
    label: "Animations",
    value: "animations",
  },
  {
    label: "Branding",
    value: "branding",
  },
  {
    label: "Graphic Design",
    value: "graphic-design",
  },
  {
    label: "Custom App Development",
    value: "custom-app-development",
  },
  {
    label: "Kubernetes",
    value: "kubernetes",
  },
  {
    label: "DevOps",
    value: "devops",
  },
  {
    label: "Cloud",
    value: "cloud",
  },
  {
    label: "Desktop App Development",
    value: "desktop-development",
  },
];

const budgets: Budget[] = [
  {
    label: "Ongoing",
    description: "Wenn du ein Long-Term Projekt mit uns Planst.",
  },
  {
    label: "Starter",
    description: "Wenn du einen Prototype oder MVP mit uns Planst.",
    price: "5000 - 40.000€",
  },
  {
    label: "Growth",
    description: "Ein Deep-Dive in dein Produkt.",
    price: "50.000 - 100.000€",
  },
  {
    label: "Scale",
    description:
      "Wenn du dein Produkt mit uns auf die nächste Stufe bringen willst.",
    price: "100.000€ aufwärts",
  },
];

export const Contact: React.FC = () => {
  const [containerRef, inView] = useInView({
    threshold: 0.1,
  });

  const styles = useMultiStyleConfig("Contact");
  return (
    <Stack
      spacing={4}
      as="section"
      ref={containerRef}
      py="60px"
      bg="secondary"
      color="white"
    >
      <Container maxW="7xl">
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <FadeIn>
            <Heading sx={styles.title} maxW="320px">
              Projekt im Sinn? Lass uns reden.
            </Heading>
          </FadeIn>
        </Flex>
      </Container>
      <FadeIn>
        <ParallaxText baseVelocity={-5}>
          Tell Us about your project
        </ParallaxText>
        <ParallaxText baseVelocity={5}>about your project</ParallaxText>
      </FadeIn>
      <Box py={12}>
        <Container maxW="7xl">
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            <GridItem colSpan={[12, 6]}>
              <FadeIn>
                <Stack spacing={6} mb={8}>
                  <Heading fontSize="3xl">
                    Hilf uns, dein Projekt zu verstehen
                  </Heading>

                  <SimpleGrid columns={2} spacing={6}>
                    <FormControl>
                      <Input placeholder="Vorname" />
                    </FormControl>
                    <FormControl>
                      <Input placeholder="Nachname" />
                    </FormControl>
                  </SimpleGrid>

                  <FormControl>
                    <Input placeholder="Email" type="email" />
                  </FormControl>
                  <FormControl>
                    <Input placeholder="Telefon" type="tel" />
                  </FormControl>
                </Stack>
              </FadeIn>
              <FadeIn>
                <Stack spacing={6}>
                  <Heading fontSize="2xl">Deine Nachricht</Heading>
                  <Textarea placeholder="Erzähl uns etwas über dein Projekt..." />
                </Stack>
              </FadeIn>
            </GridItem>
            <GridItem
              colStart={8}
              colSpan={4}
              display={{
                base: "none",
                md: "flex",
              }}
            >
              <FadeIn>
                <AddressBlock />
              </FadeIn>
            </GridItem>
            <GridItem colSpan={12}>
              <FadeIn>
                <Heading mb={4}>
                  Wie k&ouml;nnen wir dich Unterst&uuml;tzen?
                </Heading>
                <CheckboxCardGroup defaultValue={[]} spacing="3">
                  {assistants.map((assistant) => (
                    <CheckboxCard key={assistant.value} value={assistant.value}>
                      {assistant.label}
                    </CheckboxCard>
                  ))}
                </CheckboxCardGroup>
              </FadeIn>
            </GridItem>
            <GridItem colSpan={12}>
              <FadeIn>
                <Heading mb={4}>Budget Range</Heading>
                <RadioCardGroup columns={[1, 4]} spacing="3">
                  {budgets.map((budget) => (
                    <RadioCard
                      key={budget.label}
                      value={budget.label}
                      tooltip={budget.tooltip}
                      description={budget.description}
                      price={budget.price}
                    >
                      {budget.label}
                    </RadioCard>
                  ))}
                </RadioCardGroup>
              </FadeIn>
            </GridItem>
            <GridItem colSpan={12}>
              <FadeIn>
                <Button size="2xl" variant="primary">
                  Senden
                </Button>
              </FadeIn>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Stack>
  );
};

interface ParallaxTextProps {
  children?: React.ReactNode;
  baseVelocity: number;
}

const ParallaxText: React.FC<ParallaxTextProps> = (props) => {
  const { children, baseVelocity } = props;

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame(() => {
    let moveBy = (directionFactor.current * baseVelocity) / 1000;
    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <Box
      overflow="hidden"
      whiteSpace="nowrap"
      display="flex"
      flexWrap="nowrap"
      margin={0}
      color="primary"
      sx={{
        ".scroller": {
          fontWeight: 600,
          textTransform: "uppercase",
          fontSize: {
            base: "2xl",
            md: "6xl",
          },
          whiteSpace: "nowrap",
          display: "flex",
          flexWrap: "nowrap",
          gap: 4,
        },
      }}
    >
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </Box>
  );
};
