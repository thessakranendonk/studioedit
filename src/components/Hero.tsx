// import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/images/hero9.png"
        className="w-full xl:h-[38rem] z-0 object-cover contrast-more"
        alt="Syntax Studio Edit"
      />
      <div className="absolute inset-0 bg-brand-base/70 z-10 brightness-125"></div>

      <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-fadeIn transition duration-100">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl uppercase md:text-6xl font-medium tracking-widest text-white py-4 text-shadow-lg shadow-zinc-500">
            Syntax Studio
          </h1>
          <p className="text-sm md:text-2xl mb-6 text-white font-light pb-4 text-shadow-lg shadow-zinc-500">
            Human Editing for Work That Matters.
          </p>
          <p className="w-128 text-sm md:text-md font-extralight text-zinc-200 text-shadow-lg shadow-zinc-500">
            
I offer academic, professional, and creative editing services designed to help you produce compelling, submission-ready work. My approach is grounded in thoughtful, one-on-one collaboration that respects your voice, supports your goals, and strengthens your writing with clarity and precision.


          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;