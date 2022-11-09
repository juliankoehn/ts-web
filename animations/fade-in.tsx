import { chakra, SystemStyleObject } from "@chakra-ui/react";
import { HTMLMotionProps, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export interface FadeInProps {
  children: React.ReactNode;
}

const variants: Variants = {
  exit: {
    opacity: 0,
    transform: "translateY(20vh)",
    visibility: "hidden",
  },
  enter: {
    opacity: 1,
    transform: "none",
    visibility: "visible",
  },
};

const baseStyle: SystemStyleObject = {
  willChange: "opacity, visibility, transform",
};

export const FadeIn: React.FC<FadeInProps> = (props) => {
  const { children } = props;
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <chakra.div
      __css={baseStyle}
      as={motion.div}
      ref={ref}
      initial="exit"
      animate={inView ? "enter" : "exit"}
      exit="exit"
      variants={variants}
      // @ts-ignore
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </chakra.div>
  );
};
