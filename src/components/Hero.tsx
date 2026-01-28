'use client';

import AnimateOnScroll from '@/src/components/AnimateOnScroll';
import { slowFadeIn } from '@/src/styles/animations';
import clsx from 'clsx';
import { title } from 'process';

export interface HeroProps {
  title?: string;
  subtitle?: string;
  extraClassName?: string;
  heightClassName?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, extraClassName, heightClassName }) => {
  return (
    <div className="relative">
      <img
        src="/images/hero9.png"
        className={clsx("w-full z-0 object-scale-down object-bottom md:object-cover md:object-top lg:object-center contrast-more", heightClassName)}
        alt="Syntax Studio Edit"
      />

      <div className="absolute inset-0 bg-brand-base/20 z-10 brightness-135" />

      {/* Animated overlay */}
      <AnimateOnScroll customVariants={slowFadeIn} extraClassName='absolute inset-0 z-10'>
        <div className="absolute inset-0 z-10">
          <div className="w-full absolute top-2/3 left-1/2 md:top-1/2 md:left-1/2 md:mt-10 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="flex flex-col items-center text-center">
              <h1 className={clsx("text-3xl uppercase md:text-6xl font-medium tracking-widest text-white py-4 md:mb-10 text-shadow-xl shadow-white", extraClassName)}>
                {title}
              </h1>

              <p className="text-sm md:text-2xl mb-6 text-white font-light pb-4 text-shadow-xl shadow-white">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Hero;
