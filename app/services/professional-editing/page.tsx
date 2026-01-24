'use client';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceBlock from "@/src/components/ServiceBlock";
import SyntaxLink from "@/src/components/ui/inputs/SyntaxLink";
import { SERVICES } from "@/src/data/data";
import { useEffect, useState } from "react";


export const slideInUpSoft = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.8,
      delay: 2,
      // ease: [0.16, 1, 0.3, 1], // easeOut curve
    },
  },
};


const slideInUp = {
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
      // ease: [0.16, 1, 0.3, 1],
    },
  },
};


const ProfessionalEditingService: React.FC = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView();
  const [isInView, setIsInView] = useState(false);
  const [isInViewLink, setIsInViewLink] = useState(false);

  useEffect(() => {
    if (inView && isInView) {
      controls.start("visible");
    }
    if (inView && isInViewLink) {
      controls2.start("visible");
    }
      }, [controls, inView]);

  

  return (
    <div className="container flex flex-col mx-auto items-center my-30 px-4 "> 
    <div className="w-full text-center text-white bg-linear-to-r from-brand-lighter to-brand-base bg-cover bg-center bg-no-repeat p-10 mb-0 rounded-lg">
    <h1 className="text-6xl my-10 font-semibold tracking-wider">Professional Editing</h1>
    <p className="text-lg pb-8">{SERVICES.professional_editing.slogan}</p></div>

    <motion.div
        ref={ref}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
        animate={isInView && controls}
        initial="hidden"
        variants={slideInUpSoft}
       className="grid grid-cols-2 lg:max-w-7xl mx-auto gap-8 mt-0 mb-10">


      <ServiceBlock 
      title={SERVICES.professional_editing.presentations_speeches.title}
      subtext={SERVICES.professional_editing.presentations_speeches.subtext}
      items={SERVICES.professional_editing.presentations_speeches.items}
      starting_rate={SERVICES.professional_editing.presentations_speeches.starting_rate}
      final_rate={SERVICES.professional_editing.presentations_speeches.final_rate} />

      <ServiceBlock 
      title={SERVICES.professional_editing.grant_writing.title}
      subtext={SERVICES.professional_editing.grant_writing.subtext}
      items={SERVICES.professional_editing.grant_writing.items}
      starting_rate={SERVICES.professional_editing.grant_writing.starting_rate}
      final_rate={SERVICES.professional_editing.grant_writing.final_rate} />
    </motion.div>
<motion.div
        ref={ref}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInViewLink(true)}
        animate={isInViewLink && controls}
        initial="hidden"
        variants={slideInUp}>
    <SyntaxLink content="REQUEST QUOTE" href="/request-quote" extraClassName="py-4 px-6">Request Quote</SyntaxLink></motion.div>
    </div>
  );
}
export default ProfessionalEditingService;