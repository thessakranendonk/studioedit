'use client';

import React from 'react';
import ServiceBlock from '@/src/components/ServiceBlock';
import SyntaxLink from '@/src/components/ui/inputs/SyntaxLink';
import AnimateOnScroll from '@/src/components/AnimateOnScroll';
import { SERVICES } from '@/src/data/data';
import { slideInLeftSlow, slideInRightSlow, slideInUp, slideInUpSoft } from '@/src/styles/animations';
import ServiceSection from '@/src/components/ui/ServiceSection';
import ServiceHeading from '@/src/components/ui/ServiceHeading';


const ProfessionalEditingService: React.FC = () => {
   const presentations_speeches = SERVICES.professional_editing.presentations_speeches;
    const grant_writing = SERVICES.professional_editing.grant_writing;

    const pageAnchors= [
            { href: '#presentations-speeches', title: presentations_speeches.title },
            { href: '#grant-writing', title: grant_writing.title },
          ]

  return (
    <div>
    {/* <div className="container flex flex-col mx-auto items-center my-30 px-4"> */}
      {/* HEADING */}
      {/* <div className="w-full text-center text-white bg-linear-to-r from-brand-lighter to-brand-base bg-cover bg-center bg-no-repeat p-10 mb-0 rounded-lg">
        <h1 className="text-6xl my-10 font-semibold tracking-wider">
          Professional Editing
        </h1>
        <p className="text-lg pb-8">
          {SERVICES.professional_editing.slogan}
        </p>
      </div> */}

      {/* SERVICES GRID */}
      {/* <AnimateOnScroll customVariants={slideInUpSoft}>
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
      </AnimateOnScroll> */}


      <ServiceHeading title="Professional Editing" slogan={SERVICES.professional_editing.slogan} pageAnchorLinks={pageAnchors}/>

       {/* PRESENTATIONS & SPEECHES */}
      <ServiceSection
        title={presentations_speeches.title}
        subtext={presentations_speeches.subtext}
        items={presentations_speeches.items}
        animation={slideInRightSlow}
        id="presentations-speeches"
        imageUrl="bg-[url('/images/presentation2.jpg')] bg-bottom brightness-90"
        imgLocation="left"
        imageHeight="h-170"
      />

      {/* GRANT WRITING */}
      <ServiceSection
        title={grant_writing.title}
        subtext={grant_writing.subtext}
        items={grant_writing.items}
        animation={slideInLeftSlow}
        id="grant-writing"
        imageUrl="bg-[url('/images/grant-writing4.jpg')] bg-contain bg-top"
        imgLocation="right"
        imageHeight="h-200"
      />


      {/* REQUEST QUOTE BUTTON */}
     <AnimateOnScroll customVariants={slideInUpSoft}>
        <div className="flex justify-center my-20">
          <SyntaxLink content="REQUEST QUOTE" href="/request-quote" extraClassName="py-4 px-6">
            Request Quote
          </SyntaxLink>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default ProfessionalEditingService;
