import { Box, chakra, Flex, useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  const styles = useMultiStyleConfig("Layout");

  return (
    <chakra.div __css={styles.wrapper}>
      <chakra.div __css={styles.content}>
        <Header />
        <chakra.main __css={styles.main} role="main">
          {children}
        </chakra.main>
      </chakra.div>
      <Footer />
    </chakra.div>
  );
};
