'use client';

import React from 'react';
import ServiceBlock from '@/src/components/ServiceBlock';
import SyntaxLink from '@/src/components/ui/inputs/SyntaxLink';
import AnimateOnScroll from '@/src/components/AnimateOnScroll';
import { SERVICES } from '@/src/data/data';
import { slideInUp, slideInUpSoft } from '@/src/styles/animations';


const ProfessionalEditingService: React.FC = () => {
  return (
    <div className="container flex flex-col mx-auto items-center my-30 px-4">
      {/* HEADING */}
      <div className="w-full text-center text-white bg-linear-to-r from-brand-lighter to-brand-base bg-cover bg-center bg-no-repeat p-10 mb-0 rounded-lg">
        <h1 className="text-6xl my-10 font-semibold tracking-wider">
          Professional Editing
        </h1>
        <p className="text-lg pb-8">
          {SERVICES.professional_editing.slogan}
        </p>
      </div>

      {/* SERVICES GRID */}
      <AnimateOnScroll customVariants={slideInUpSoft}>
        <div className="grid grid-cols-2 lg:max-w-7xl mx-auto gap-8 mt-0 mb-10">
          <ServiceBlock
            title={SERVICES.professional_editing.presentations_speeches.title}
            subtext={SERVICES.professional_editing.presentations_speeches.subtext}
            items={SERVICES.professional_editing.presentations_speeches.items}
            starting_rate={SERVICES.professional_editing.presentations_speeches.starting_rate}
            final_rate={SERVICES.professional_editing.presentations_speeches.final_rate}
          />

          <ServiceBlock
            title={SERVICES.professional_editing.grant_writing.title}
            subtext={SERVICES.professional_editing.grant_writing.subtext}
            items={SERVICES.professional_editing.grant_writing.items}
            starting_rate={SERVICES.professional_editing.grant_writing.starting_rate}
            final_rate={SERVICES.professional_editing.grant_writing.final_rate}
          />
        </div>
      </AnimateOnScroll>

      {/* REQUEST QUOTE BUTTON */}
      <AnimateOnScroll customVariants={slideInUp}>
        <SyntaxLink
          content="REQUEST QUOTE"
          href="/request-quote"
          extraClassName="py-4 px-6"
        >
          Request Quote
        </SyntaxLink>
      </AnimateOnScroll>
    </div>
  );
};

export default ProfessionalEditingService;
