import React from "react";
import {
  chakra,
  SystemStyleObject,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

export interface LogoProps {
  isDark?: boolean;
}

const animation: Variants = {
  animate: {
    strokeWidth: [1, 1, 0],
    strokeDashoffset: [1200, 1200, 0],
    fillOpacity: [0, 0, 1],
  },
};

export const Logo: React.FC<LogoProps> = (props) => {
  const { isDark } = props;
  const styles = useMultiStyleConfig("Logo");

  const logoStyles: SystemStyleObject = {
    ...(isDark
      ? {
          color: "black",
        }
      : {
          color: "white",
        }),
    ...styles.root,
  };

  return (
    <chakra.div __css={logoStyles}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 100"
        xmlSpace="preserve"
        enableBackground="new 0 0 500 100"
        {...props}
      >
        <path
          id="teamspiel"
          strokeDasharray="1200"
          d="M44.42 27.31v52.58H34.19V27.31H15.95v-8.24h47.16l-1.06 8.24H44.42Zm41.65-.48v18.29h22.04v7.76H86.07v19.26h26.84v7.76H75.84V19.07h36.58l-1.15 7.76H86.06Zm69.82 38.43h-21.73l-4.23 14.63h-10.4l19.35-60.82h12.69l19.39 60.82h-10.84l-4.23-14.63Zm-19.61-7.89h17.45L145.05 27l-8.77 30.37Zm82.59-38.3 3.44 60.82h-9.34c-.6-14.09-2.32-38.09-1.5-51.83l-8.95 41.12h-8.9l-9.61-41.12c1.06 13.66-.43 37.84-.93 51.83h-9.17l3.44-60.82h12.25l8.68 40.77 8.29-40.77h12.3Zm54.04 43.64c-.3 22.12-33.37 22.81-45.57 10.23l5.6-6.26c7.92 9.49 34.86 9.17 28.25-8.02-6.66-8.01-23.15-6.77-28.76-16.29-11.94-23.89 25.65-31.63 39.03-17.21l-5.38 6.08c-6.67-7.93-30.73-7.85-24.09 6.48 9.56 8.37 32.11 6.84 30.92 24.99Zm54.29-24.55c.91 17.66-16.99 21.24-31.12 20.05V79.9h-10.23V19.07c15.63-.04 41.9-2.88 41.34 19.08Zm-10.75.09c.76-11.78-11.75-11.99-20.36-11.5v23.67c8.98.61 21.3.04 20.36-12.16Zm58.62-19.18v7.8h-13.13v45.18h13.13v7.85h-36.58v-7.85h13.13V26.87h-13.13v-7.8h36.58Zm28.34 7.76v18.29h22.04v7.76h-22.04v19.26h26.84v7.76h-37.07V19.07h36.58l-1.15 7.76H403.4Zm43.23 53.06V19.07h10.23v52.27h27.24l-1.1 8.55h-36.36ZM0 0v100h500V0H0Zm490 90H10V10h480v80Z"
        />
      </svg>
    </chakra.div>
  );
};
