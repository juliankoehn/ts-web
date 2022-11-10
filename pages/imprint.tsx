import {
  chakra,
  Container,
  Divider,
  Heading,
  Link,
  SlideFade,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "../animations/fade-in";

const ImprintPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef);
  return (
    <>
      <chakra.section
        bg="black"
        color="white"
        minH="600px"
        height="100vh"
        width="100%"
        display="flex"
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <FadeIn>
          <Heading fontSize="9xl" textTransform="uppercase">
            Impressum
          </Heading>
        </FadeIn>
      </chakra.section>
      <chakra.section className="prose" pt="120px" ref={containerRef}>
        <Container maxW="4xl">
          <Stack>
            <SlideFade in={inView}>
              <Stack spacing={4}>
                <Text>teamspiel GmbH</Text>
                <Text>
                  Unterjörn 19a
                  <br />
                  24536 Neumünster <br />
                  Germany
                </Text>
                <Divider />
                <Text as="strong">Management Board</Text>
                <Text>Julian Köhn, CEO </Text>
                <Text>
                  Registered at Amtsgericht Kiel, HRB 158855 B<br />
                  Value Added Tax-ID: DE 354852154 <br />
                  Tax Number: 20/298/56313
                </Text>
                <Text as="strong">Legal Note</Text>
                <Text>
                  <Link
                    href="http://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link to the platform of the European Commission
                  </Link>{" "}
                  according to Regulation on consumer ODR. We are neither
                  obligated nor willing to participate in a dispute settlement
                  procedure at a consumer arbitration board.
                </Text>
              </Stack>
            </SlideFade>
          </Stack>
        </Container>
      </chakra.section>
    </>
  );
};

export default ImprintPage;
