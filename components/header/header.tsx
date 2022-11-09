import {
  Box,
  Container,
  Flex,
  SystemStyleObject,
  useDisclosure,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Logo } from "../logo/logo";
import { useLockBodyScroll } from "react-use";
import { Hamburger } from "./hamburger";
import { Navigation } from "./navigation/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header: React.FC = (props) => {
  const router = useRouter();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = React.useState(false);

  const styles = useMultiStyleConfig("Header", {
    variant: isOpen ? "scrolled" : isScrolled ? "scrolled" : "default",
  });

  useLockBodyScroll(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    router.events.on("routeChangeStart", onClose);

    return () => router.events.off("routeChangeStart", onClose);
  }, [onClose, router.events]);

  const containerStyles: SystemStyleObject = {
    ...styles.container,
    zIndex: 100,
  };

  return (
    <Box position="static">
      <Box role="banner" __css={containerStyles}>
        <Box __css={styles.wrapper}>
          <Container
            maxW="7xl"
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            <Link href="/">
              <Logo isDark={isOpen} />
            </Link>
            <Flex alignItems="center">
              <Hamburger isOpen={isOpen} onClick={onToggle} />
            </Flex>
          </Container>
        </Box>
      </Box>
      <Navigation isOpen={isOpen} />
    </Box>
  );
};
