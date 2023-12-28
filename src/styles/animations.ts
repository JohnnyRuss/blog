import { MotionProps } from "framer-motion";

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

  if (args.inView)
    config.variants.onscreen = {
      x: 0,
      opacity: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: args.delay || 0,
      },
    };
  else {
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

  if (args.inView)
    config.variants.onscreen = {
      x: 0,
      opacity: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: args.delay || 0,
      },
    };
  else {
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

  if (args.inView)
    config.variants.onscreen = {
      y: 0,
      opacity: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: args.delay || 0,
      },
    };
  else {
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

  if (args.inView)
    config.variants.onscreen = {
      y: 0,
      opacity: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: args.delay || 0,
      },
    };
  else {
    config.animate = { y: 0, opacity: 1 };
    config.transition = { duration: args.duration || 0.5 };
  }

  return config;
};

const animateLogo: MotionProps = {
  initial: { rotate: -135, y: -20 },
  animate: { rotate: 0, y: 0 },
  transition: { duration: 1, delay: 0.5 },
  style: { transformOrigin: "0% 0%" },
};

export { animateRight, animateBottom, animateLeft, animateTop, animateLogo };
