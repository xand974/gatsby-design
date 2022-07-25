import { Variants } from "framer-motion";

export const gridVariant: Variants = {
  initial: {
    scale: 1,
    backgroundColor: "white",
  },
  animate: {
    scale: 7,
    backgroundColor: ["hsl(0, 100%, 100%)", "hsl(0, 0, 0)"],
    transition: {
      ease: [0.36, 0.53, 0.56, 0.88],
      duration: 3,
      staggerChildren: 0.35,
    },
  },
  exit: {
    backgroundColor: ["hsl(0, 0, 0)", "hsl(0, 100%, 100%)"],
    transition: {
      ease: [0.36, 0.53, 0.56, 0.88],
      duration: 7,
    },
  },
};

export const screenGridVariant: Variants = {
  initial: {},
  animate: {
    transition: {
      ease: [0.36, 0.53, 0.56, 0.88],
      duration: 5,
    },
  },
  exit: {
    transition: {
      ease: [0.36, 0.53, 0.56, 0.88],
      duration: 7,
    },
  },
};

export const imageGridVariant: Variants = {
  initial: {
    scale: 0.9,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "circInOut",
    },
  },
};
