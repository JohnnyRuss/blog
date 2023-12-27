import { AnimationProps } from "framer-motion";

const animateRight = (args?: {
  duration?: number;
  inView?: boolean;
}): AnimationProps => {
  const config: AnimationProps = {
    initial: "offscreen",
    variants: {
      offscreen: {
        x: -35,
        opacity: 0,
      },
    },
  };

  if (args.inView)
    config.variants.onscreen = {
      x: 0,
      opacity: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: 0.3,
      },
    };
  else {
    config.animate = { x: 0, opacity: 1 };
    config.transition = { duration: args.duration || 0.5 };
  }

  return config;
};

const animateLeft = (args?: {
  duration?: number;
  inView?: boolean;
}): AnimationProps => {
  const config: AnimationProps = {
    initial: "offscreen",
    variants: {
      offscreen: {
        x: 35,
        opacity: 0,
      },
    },
  };

  if (args.inView)
    config.variants.onscreen = {
      x: 0,
      opacity: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: 0.3,
      },
    };
  else {
    config.animate = { x: 0, opacity: 1 };
    config.transition = { duration: args.duration || 0.5 };
  }

  return config;
};

const animateBottom = (args?: {
  duration?: number;
  inView?: boolean;
}): AnimationProps => {
  const config: AnimationProps = {
    initial: "offscreen",
    variants: {
      offscreen: {
        y: -35,
        opacity: 0,
      },
    },
  };

  if (args.inView)
    config.variants.onscreen = {
      y: 0,
      opacity: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: 0.3,
      },
    };
  else {
    config.animate = { y: 0, opacity: 1 };
    config.transition = { duration: args.duration || 0.5 };
  }

  return config;
};

const animateTop = (args?: {
  duration?: number;
  inView?: boolean;
}): AnimationProps => {
  const config: AnimationProps = {
    initial: "offscreen",
    variants: {
      offscreen: {
        y: 35,
        opacity: 0,
      },
    },
  };

  if (args.inView)
    config.variants.onscreen = {
      y: 0,
      opacity: 1,
      transition: {
        duration: args.duration || 0.5,
        delay: 0.3,
      },
    };
  else {
    config.animate = { y: 0, opacity: 1 };
    config.transition = { duration: args.duration || 0.5 };
  }

  return config;
};

export { animateRight, animateBottom, animateLeft, animateTop };
