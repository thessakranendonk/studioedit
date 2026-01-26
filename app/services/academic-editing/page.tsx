'use client';

import React from 'react';
import Link from 'next/link';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { motion } from 'framer-motion';

import AnimateOnScroll from '@/src/components/AnimateOnScroll';
import SyntaxLink from '@/src/components/ui/inputs/SyntaxLink';
import { SERVICES } from '@/src/data/data';
import { bounceRightOnHover, slideInLeftSlow, slideInRightSlow, slideInUpSoft } from '@/src/styles/animations';
import ServiceSection from '@/src/components/ui/ServiceSection';
import ServiceHeading from '@/src/components/ui/ServiceHeading';

const AcademicEditing: React.FC = () => {
  const copyediting = SERVICES.academic_editing.copyediting_proofreading;
  const structural = SERVICES.academic_editing.structural_developmental;

  const pageAnchors= [
            { href: '#copywriting-proofreading', title: copyediting.title },
            { href: '#structural-developmental-editing', title: structural.title },
          ]

  return (
    <div>
      {/* HEADING */}
      <ServiceHeading title="Academic Editing" slogan={SERVICES.academic_editing.slogan} pageAnchorLinks={pageAnchors}/>

      {/* COPYEDITING / PROOFREADING */}
      <ServiceSection
        title={copyediting.title}
        subtext={copyediting.subtext}
        items={copyediting.items}
        animation={slideInRightSlow}
        id="copywriting-proofreading"
        imageUrl="bg-[url('/images/computer.jpg')]"
        imgLocation="left"
        imageHeight="h-170"
      />

      {/* STRUCTURAL / DEVELOPMENTAL */}
      <ServiceSection
        title={structural.title}
        subtext={structural.subtext}
        items={structural.items}
        animation={slideInLeftSlow}
        id="structural-developmental-editing"
        imageUrl="bg-[url('/images/computer.jpg')]"
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

export default AcademicEditing;
