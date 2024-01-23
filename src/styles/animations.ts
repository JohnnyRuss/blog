import { MotionProps } from "framer-motion";
import { css } from "styled-components";

type AnimateMotionT = {
  once: boolean;
  duration?: number;
  inView?: boolean;
  delay?: number;
};

const animateRight = (args?: AnimateMotionT): MotionProps => {
  const config: MotionProps = {
    initial: "offscreen",
    variants: {
      offscreen: {
        x: -35,
        opacity: 0,
      },
    },
    viewport: { once: args.once },
  };

  if (args.inView) {
    config.whileInView = "onscreen";
    config.variants.onscreen = {
      x: 0,
      opacity: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: args.delay || 0,
      },
    };
  } else {
    config.animate = { x: 0, opacity: 1 };
    config.transition = { duration: args.duration || 0.5 };
  }

  return config;
};

const animateLeft = (args?: AnimateMotionT): MotionProps => {
  const config: MotionProps = {
    initial: "offscreen",
    variants: {
      offscreen: {
        x: 35,
        opacity: 0,
      },
    },
    viewport: { once: args.once },
  };

  if (args.inView) {
    config.whileInView = "onscreen";
    config.variants.onscreen = {
      x: 0,
      opacity: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: args.delay || 0,
      },
    };
  } else {
    config.animate = { x: 0, opacity: 1 };
    config.transition = { duration: args.duration || 0.5 };
  }

  return config;
};

const animateBottom = (args?: AnimateMotionT): MotionProps => {
  const config: MotionProps = {
    initial: "offscreen",
    variants: {
      offscreen: {
        y: -35,
        opacity: 0,
      },
    },
    viewport: { once: args.once },
  };

  if (args.inView) {
    config.whileInView = "onscreen";
    config.variants.onscreen = {
      y: 0,
      opacity: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: args.delay || 0,
      },
    };
  } else {
    config.animate = { y: 0, opacity: 1 };
    config.transition = { duration: args.duration || 0.5 };
  }

  return config;
};

const animateTop = (args?: AnimateMotionT): MotionProps => {
  const config: MotionProps = {
    initial: "offscreen",
    variants: {
      offscreen: {
        y: 35,
        opacity: 0,
      },
    },
    viewport: { once: args.once },
  };

  if (args.inView) {
    config.whileInView = "onscreen";
    config.variants.onscreen = {
      y: 0,
      opacity: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: args.delay || 0,
      },
    };
  } else {
    config.animate = { y: 0, opacity: 1 };
    config.transition = { duration: args.duration || 0.5 };
  }

  return config;
};

const animateFadeIn = (args?: AnimateMotionT): MotionProps => {
  const config: MotionProps = {
    initial: "offscreen",
    variants: { offscreen: { opacity: 0, scale: 0.9 } },
    viewport: { once: args.once, margin: "0px 0px -150px 0px" },
  };

  if (args.inView) {
    config.whileInView = "onscreen";
    config.variants.onscreen = {
      opacity: 1,
      scale: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: args.delay || 0,
      },
    };
  } else {
    config.animate = { opacity: 1 };
    config.transition = { duration: args.duration || 0.5 };
  }

  return config;
};

const animateTopStagger = () => {
  const container: MotionProps = {
    initial: "hidden",
    animate: "show",
    variants: {
      show: {
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.3,
        },
      },
    },
  };

  const child: MotionProps = {
    variants: {
      hidden: {
        opacity: 0,
        y: 25,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", damping: 24, stiffness: 300 },
      },
    },
  };

  return { container, child };
};

const animateLogo: MotionProps = {
  initial: { rotate: -135, y: -20 },
  animate: { rotate: 0, y: 0 },
  transition: { duration: 1, delay: 0.5 },
  style: { transformOrigin: "0% 0%" },
};

const animateY_k = (args?: { initialY?: number; duration?: number }) => css`
  @keyframes animateY {
    0% {
      transform: translateY(${args.initialY ? `${args.initialY}rem` : "5rem"});
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: animateY ${args.duration ? `${args.duration}s` : "0.3s"} ease
    forwards;
`;

export {
  animateRight,
  animateBottom,
  animateLeft,
  animateTop,
  animateTopStagger,
  animateLogo,
  animateFadeIn,
  animateY_k,
};
