import { Easing, MotionProps, Variants } from 'framer-motion';

{/* SLIDE IN UP ANIMATIONS */}
export const slideInUpSoft = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.98,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: 'easeOut' as Easing,
    },
  },
};

export const slideInUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: {
      duration: 0.75,
      delay: 1,
      ease: [0.16, 1, 0.3, 1] as Easing
    },
  },
};

{/* SLIDE IN SIDE WAYS ANIMATIONS */}

export const slideInLeftQuick = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as Easing,
    },
  },
};

export const slideInRightQuick = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as Easing,
    },
  },
};

export const slideInLeftSlow = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: 'easeOut' as Easing,
    },
  },
};

export const slideInRightSlow = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeOut' as Easing,
    },
  },
};



{/* FADE IN ANIMATIONS */}

export const fadeIn = {
  visible: {
    opacity: 1,
    transition: { duration: 0.75, delay: 1 },
    filter: "blur(0)",
  },
  hidden: {
    opacity: 0,
    filter: "blur(40px)",
  },
};

export const slowFadeIn = {
  visible: {
    opacity: 1,
    transition: { duration: 1.5, delay: 1  },
    scale: 1,
    filter: "blur(0)",
  },
  hidden: {
    opacity: 0,
    scale: 0.25,
    filter: "blur(40px)",
  },
};

{/* ROTATE AND SCALE IN ANIMATION */}
export const rotateScaleIn = {
  hidden: {
    scale: 1,
    rotate: 0,
    borderRadius: '0%',
  },
  visible: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ['0%', '0%', '50%', '50%', '0%'],
    transition: {
      duration: 2,
      delay: 1,
    //   ease: 'easeInOut',
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
};


{/* HOVER ANIMATIONS */}
export const bounceRightOnHover: MotionProps = {
  whileHover: {
     x: [0, 6, 3, 6, 0],
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as Easing,
    },
  },
} as const;


export const showOnHover: Variants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as Easing,
    },
  },
} as const;
