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
import { NAVIGATION_HEIGHT } from "./const";
import { useLockBodyScroll } from "react-use";
import { Hamburger } from "./hamburger";
import { Navigation } from "./navigation/navigation";
import Link from "next/link";
import Headroom from "react-headroom";

export const Header: React.FC = (props) => {
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

  const containerStyles: SystemStyleObject = {
    ...styles.container,
  };

  return (
    <Box __css={styles.outer}>
      <Headroom disableInlineStyles>
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
      </Headroom>
      <Navigation isOpen={isOpen} />
    </Box>
  );
};
