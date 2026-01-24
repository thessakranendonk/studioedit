'use client';
import { useAnimation , motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { slideInUpSoft } from "../professional-editing/page";
import { SERVICES } from "@/src/data/data";
import Link from "next/link";
import SyntaxLink from "@/src/components/ui/inputs/SyntaxLink";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const AcademicEditing: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isInView, setIsInView] = useState(false);      

    useEffect(() => {  
    if (inView && isInView) {
      controls.start("visible");
    }       
        }, [controls, inView]);
    return (    
    <motion.div
        ref={ref}
        viewport={{ once: true }}       
        onViewportEnter={() => setIsInView(true)}
        animate={isInView && controls}
        initial="hidden"
        variants={slideInUpSoft}>
            <h1 className="text-6xl text-brand-base tracking-wider text-shadow-sm pl-25 pt-20 mt-25">Academic Editing</h1>
            <p className="pl-25 pt-6 text-xl italic text-shadow-sm mb-10">{SERVICES.academic_editing.slogan}</p>
            <Link href="#copywriting-proofreading" className="flex ml-25 text-md font-lighter text-brand-darkest/50 mb-2 block hover:text-brand-darkest">{SERVICES.academic_editing.copyediting_proofreading.title}<MdOutlineArrowRightAlt className="mt-2 ml-1"/></Link>
            <Link href="#structural-developmental-editing" className="flex ml-25 text-md font-lighter text-brand-darkest/50 mb-20 block hover:text-brand-darkest">{SERVICES.academic_editing.structural_developmental.title}<MdOutlineArrowRightAlt className="mt-2 ml-1"/></Link>

            <div className="grid md:grid-cols-2 lg:w-screen mx-auto mt-10 text-brand-base mb-10">
                <div>
                    <img src="/images/computer.jpg" alt="Academic Editing - Syntax Studio" className="w-80 md:w-full h-170 mx-auto" />
                </div>
                
                <div className="md:col-span-1 pl-10 bg-zinc-200/40">
                    <h2 id="copywriting-proofreading" className="text-4xl text-center font-semibold tracking-wider text-brand-darkest text-shadow-sm pt-15">{SERVICES.academic_editing.copyediting_proofreading.title}</h2>
                    <p className="md:max-w-xl mx-auto text-brand-base pt-5 text-center">{SERVICES.academic_editing.copyediting_proofreading.subtext}</p>
                    <div>
                {Object.entries(SERVICES.academic_editing.copyediting_proofreading.items).map(([section, points]) => (
                    <div key={section} className="mt-5 pl-30">
                    <h3 className="text-lg font-semibold text-brand-darkest mb-3">{section}</h3>    
                    <ul>
                        {points.map((point, index) => (
                        <li key={index} className="list-disc list-outside ml-6 text-brand-base">{point}</li>    
                        ))}
                    </ul>
                    </div>    
                ))}
                </div>
                    </div>
                
            </div>


        
        
        <div id="structural-developmental-editing" className="grid md:grid-cols-2 lg:w-screen mx-auto mt-10 text-brand-base mb-10 bg-zinc-200/40">
            <div className="md:cols-span-1">
            <h2 className="text-4xl text-center font-semibold tracking-wider text-brand-darkest text-shadow-sm pt-20">{SERVICES.academic_editing.structural_developmental.title}</h2>
            <p className="md:max-w-xl mx-auto text-brand-base pt-5 text-center">{SERVICES.academic_editing.structural_developmental.subtext}</p>
            
            
          {Object.entries(SERVICES.academic_editing.structural_developmental.items).map(([section, points]) => (
            <div key={section} className="mt-5 pl-30">
              <h3 className="text-lg font-semibold text-brand-darkest mb-3">{section}</h3>    
              <ul>
                {points.map((point, index) => (
                  <li key={index} className="list-disc list-outside ml-6 text-brand-base">{point}</li>    
                ))}
              </ul>
            </div>    
          ))}
          </div>
          <div className="md:col-span-1 pl-10">
          <img src="/images/computer.jpg" alt="Academic Editing - Syntax Studio" className="w-80 md:w-full h-200 mx-auto" />
            </div>
        </div>
        <div className="flex justify-center my-20">
        <SyntaxLink content="REQUEST QUOTE" href="/request-quote" extraClassName="py-4 px-6">Request Quote</SyntaxLink>
</div>
        </motion.div>
    );
};

    export default AcademicEditing;