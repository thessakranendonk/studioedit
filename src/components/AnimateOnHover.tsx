

// import React, { ReactNode, useEffect } from 'react';
// import { motion, useAnimation, Variants } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// // Define the animation variants
// const animationVariants: Variants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: 'easeOut' },
//   },
// };

// interface AnimateOnScrollProps {
//   children: ReactNode;
//   customVariants?: Variants;
//   extraClassName?: string;
//   extraVariants?: Variants;
// }

// const AnimateOnHover: React.FC<AnimateOnHoverProps> = ({
//   children,
//   customVariants,
//   extraClassName,
//   extraVariants
// }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Animation triggers only once when it enters the view
//     threshold: 0.2, // Triggers when 20% of the element is visible
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//     // Optional repeat animation:
//     // else {
//     //   controls.start('hidden');
//     // }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       whileHover: {
//      x: [0, 6, 3, 6, 0],
//     transition: {
//       duration: 0.5,
//       ease: [0.25, 0.1, 0.25, 1] as Easing,
//     },
//   }>
//       {children}
//     </motion.div>
//   );
// };

// export default AnimateOnScroll;

import React, { ReactNode } from 'react';
import { Easing, motion, Variants } from 'framer-motion';

// Default hover animation
export const hoverVariants: Variants = {
  initial: {opacity: 1},
  hover: {
      x: [0, 6, 3, 6, 0],
     transition: {
       duration: 0.5,
       ease: [0.25, 0.1, 0.25, 1] as Easing,
     }}
};

interface WhileHoverProps {
  children: ReactNode;
  customVariants?: Variants;
  extraClassName?: string;
}

const AnimateOnHover: React.FC<WhileHoverProps> = ({
  children,
  customVariants,
  extraClassName,
}) => {
  return (
    <motion.div
      className={extraClassName}
      variants={customVariants || hoverVariants}
      initial="initial"
      whileHover="hover"
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnHover;
