import React, { ReactNode, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define the animation variants
const animationVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

interface AnimateOnScrollProps {
  children: ReactNode;
  customVariants?: Variants;
  extraClassName?: string;
  extraVariants?: Variants;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  customVariants,
  extraClassName,
  extraVariants
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when it enters the view
    threshold: 0.2, // Triggers when 20% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    // Optional repeat animation:
    // else {
    //   controls.start('hidden');
    // }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className={extraClassName}
      variants={customVariants || animationVariants || extraVariants}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
