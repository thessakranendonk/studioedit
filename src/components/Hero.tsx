// import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect, useState } from "react";
// import { slowFadeIn } from "@/app/Home";

// const Hero: React.FC = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView();
//   const [isInView, setIsInView] = useState(false);
//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);
//   return (
//     <div className="relative">

//       <img
//         src="/images/hero9.png"
//         className="w-full h-[22rem] md:h-[36rem] lg:h-[40rem] z-0 object-scale-down object-bottom md:object-cover md:object-top lg:object-center contrast-more"
//         alt="Syntax Studio Edit"
//       />
//        <div className="absolute inset-0 bg-brand-base/20 z-10 brightness-135"></div>
// <motion.div
//         ref={ref}
//         className="absolute inset-0 z-10"
//         viewport={{ once: true }}
//         animate={controls}
//         initial="hidden"
//         variants={slowFadeIn}
//       >
             

//       <div className="w-full absolute top-2/3 left-1/2 md:top-1/2 md:left-1/2 md:mt-10 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-fadeIn transition duration-100">
//         <div className="flex flex-col items-center text-center">
//           <h1 className="text-2xl uppercase md:text-6xl font-medium tracking-widest text-white py-4 md:mb-10 text-shadow-lg shadow-zinc-500">
//             Syntax Studio
//           </h1>
//           <p className="text-sm md:text-2xl mb-6 text-white font-light pb-4 text-shadow-lg shadow-zinc-500">
//             Human Editing for Work That Matters.
//           </p>
          
//         </div>
//       </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;
'use client';

import AnimateOnScroll from '@/src/components/AnimateOnScroll';
import { slowFadeIn } from '@/src/styles/animations';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/images/hero9.png"
        className="w-full h-[22rem] md:h-[36rem] lg:h-[40rem] z-0 object-scale-down object-bottom md:object-cover md:object-top lg:object-center contrast-more"
        alt="Syntax Studio Edit"
      />

      <div className="absolute inset-0 bg-brand-base/20 z-10 brightness-135" />

      {/* Animated overlay */}
      <AnimateOnScroll customVariants={slowFadeIn} extraClassName='absolute inset-0 z-10'>
        <div className="absolute inset-0 z-10">
          <div className="w-full absolute top-2/3 left-1/2 md:top-1/2 md:left-1/2 md:mt-10 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl uppercase md:text-6xl font-medium tracking-widest text-white py-4 md:mb-10 text-shadow-xl shadow-white">
                Syntax Studio
              </h1>

              <p className="text-sm md:text-2xl mb-6 text-white font-light pb-4 text-shadow-xl shadow-white">
                Human Editing for Work That Matters.
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Hero;
