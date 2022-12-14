import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import { dataAttr } from "@chakra-ui/utils";
import React from "react";
import { motion } from "framer-motion";

export interface HamburgerProps {
  isOpen?: boolean;
  color?: string;
  onClick?: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = (props) => {
  const { isOpen = false, onClick } = props;
  const styles = useMultiStyleConfig("MenuButton");

  return (
    <Box
      __css={styles.container}
      as="button"
      role="group"
      data-active={dataAttr(isOpen)}
      onClick={() => {
        onClick?.();
      }}
    >
      <chakra.span __css={styles.description}>Menu</chakra.span>
      <HamburgerIcon isOpen={isOpen} />
    </Box>
  );
};

const variantsTop = {
  open: {
    d: [
      "M 36.512,64 C 36.512,64 31.574667,59.333333 29.156,57 26.737333,54.666667 22,50 22,50",
      "M 30.675309,61.997011 C 30.675309,61.997011 27.029542,56.299823 25.716,48.687 24.402458,41.074177 25.284612,33.754 25.284612,33.754",
      "M 23.468201,54.62812 C 23.468201,54.62812 23.937102,47.647804 29.011384,37.561483 34.085666,27.475162 38.953463,22.368743 38.953463,22.368743",
      "M 18.674,42.74729 C 18.674,42.74729 27.488374,33.670956 38.632031,27.274699 49.775688,20.878442 60.991989,17.62628 60.991989,17.62628",
      "M 22,34 C 22,34 40.666667,34.001 50,34.001 59.333333,34.001 78,34 78,34",
    ],
  },
  closed: {
    d: [
      "M 22,34 C 22,34 40.666667,34.001 50,34.001 59.333333,34.001 78,34 78,34",
      "M 18.674,42.74729 C 18.674,42.74729 27.488374,33.670956 38.632031,27.274699 49.775688,20.878442 60.991989,17.62628 60.991989,17.62628",
      "M 23.468201,54.62812 C 23.468201,54.62812 23.937102,47.647804 29.011384,37.561483 34.085666,27.475162 38.953463,22.368743 38.953463,22.368743",
      "M 30.675309,61.997011 C 30.675309,61.997011 27.029542,56.299823 25.716,48.687 24.402458,41.074177 25.284612,33.754 25.284612,33.754",
      "M 36.512,64 C 36.512,64 31.574667,59.333333 29.156,57 26.737333,54.666667 22,50 22,50",
    ],
  },
};

const variantsMiddle = {
  open: {
    d: [
      "M 78,50 22,50",
      "M 69.79899,69.79899 30.20101,30.20101",
      "M 50,78 50,22",
      "M 30.20101,69.79899 69.79899,30.20101",
      "M 22,50 78,50",
    ],
  },
  closed: {
    d: [
      "M 22,50 78,50",
      "M 30.20101,69.79899 69.79899,30.20101",
      "M 50,78 50,22",
      "M 69.79899,69.79899 30.20101,30.20101",
      "M 78,50 22,50",
    ],
  },
};

const variantsBottom = {
  open: {
    d: [
      "M 36.512,36 C 36.512,36 31.675667,40.666667 29.257,43 26.838333,45.333333 22,50 22,50",
      "M 64.177416,24.338446 C 64.177416,24.338446 56.983312,22.572393 49.317883,22.905 41.652454,23.237607 33.958392,25.503899 33.958392,25.503899",
      "M 74.594753,53.363542 C 74.594753,53.363542 73.317711,43.556093 70.530796,36.520591 67.743882,29.485088 60.599,22.000161 60.599,22.000161",
      "M 53.280235,81.285906 C 53.280235,81.285906 63.361556,72.520643 69.626995,64.540091 75.892434,56.55954 80.105915,44.169553 80.105915,44.169553",
      "M 22,66 C 22,66 40.666667,66.001 50,66.001 59.333333,66.001 78,66 78,66",
    ],
  },
  closed: {
    d: [
      "M 22,66 C 22,66 40.666667,66.001 50,66.001 59.333333,66.001 78,66 78,66",
      "M 53.280235,81.285906 C 53.280235,81.285906 63.361556,72.520643 69.626995,64.540091 75.892434,56.55954 80.105915,44.169553 80.105915,44.169553",
      "M 74.594753,53.363542 C 74.594753,53.363542 73.317711,43.556093 70.530796,36.520591 67.743882,29.485088 60.599,22.000161 60.599,22.000161",
      "M 64.177416,24.338446 C 64.177416,24.338446 56.983312,22.572393 49.317883,22.905 41.652454,23.237607 33.958392,25.503899 33.958392,25.503899",
      "M 36.512,36 C 36.512,36 31.675667,40.666667 29.257,43 26.838333,45.333333 22,50 22,50",
    ],
  },
};

interface HamburgerIconProps {
  isOpen: boolean;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = (props) => {
  const { isOpen } = props;

  return (
    <svg className="menu-button__icon" viewBox="0 0 100 100">
      <motion.path
        className="menu-button__line"
        d={variantsTop.closed.d[0]}
        animate={!isOpen ? "open" : "closed"}
        variants={variantsTop}
        transition={{
          ease: "linear",
          duration: "0.35",
        }}
      />
      <motion.path
        className="menu-button__line"
        d={variantsMiddle.closed.d[0]}
        animate={!isOpen ? "open" : "closed"}
        variants={variantsMiddle}
        transition={{
          ease: "linear",
          duration: "0.35",
        }}
      />
      <motion.path
        className="menu-button__line"
        d={variantsBottom.closed.d[0]}
        animate={!isOpen ? "open" : "closed"}
        variants={variantsBottom}
        transition={{
          ease: "linear",
          duration: "0.35",
        }}
      />
    </svg>
  );
};
