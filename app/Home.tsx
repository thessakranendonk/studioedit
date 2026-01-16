'use client';
// import PatientTestimonials from "@/components/PatientTestimonials";
import LinkCard from "@/src/components/ui/LinkCard";
import { RiDoubleQuotesL, RiServiceFill, RiServiceLine } from "react-icons/ri";
// import { HiOfficeBuilding, HiOutlineOfficeBuilding } from "react-icons/hi";
// import { MdCamera, MdOutlineCamera } from "react-icons/md";
// import DentalOffer from "@/components/DentalOffer";
import Hero from "@/src/components/Hero";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import image1 from '@/public/images/typewriter.jpg';
import image2 from '@/public/images/closeup.jpg';
import image3 from '@/public/images/computer.jpg'

const iconClassName = "w-24 h-24 text-brand-base";

const HomePageLinks = [
  {
    href: "/academic-editing",
    name: "Academic Editing",
    information:
      "Clearer structure, stronger arguments,and polished scholarly writing fordissertations, manuscripts, and articles",
    image: image1
  },
  {
    href: "/professional-editing",
    name: "Professional Editing",
    information:
      "Effective messaging and precise communication for speeches, presentations, and grant proposals",
    image: image2,
  },
  {
    href: "/creative-editing",
    name: "Creative Editing",
    information:
      "Refined narrative, vibrant characters, and immersive storytelling for fiction, nonfiction, and screenplays",
    image: image3,
  },
];

export const fadeIn = {
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1.25 },
    filter: "blur(0)",
  },
  hidden: {
    opacity: 0,
    filter: "blur(40px)",
  },
};

const Home: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div>
      <Hero />
      <ul className="flex flex-col md:flex-row md:justify-evenly lg:justify-center md:mt-12 lg:mt-24 md:mb-10">
        {HomePageLinks.map((link) => (
          <div
            key={link.href}
            className="nd:h-[26rem] lg:border-b-[1px] hover:border-none border-zinc-300 last:border-none md:border-none mx-10 pt-4"
          >
            <LinkCard
              href={link.href}
              name={link.name}
              image={link.image}
              // hoverIcon={link.hoverIcon}
              information={link.information}
            />
          </div>
        ))}
      </ul>
      <motion.div
        ref={ref}
        viewport={{ once: true }}
        animate={controls}
        initial="hidden"
        variants={fadeIn}
      >
        {/* <DentalOffer /> */}
      </motion.div>
      <p className="text-center font-extrabold text-brand-base mt-32">
        ________________
      </p>
      <h1 className="text-center uppercase font-medium text-3xl xl:text-4xl mt-14 md:mt-24 tracking-widest text-zinc-700">
        Client Testimonials
      </h1>
      <div className="bg-zinc-200 relative mx-auto mt-24">
        <div className="relative max-w-md flex justify-center mx-auto">
          <div className="absolute max-w-md mx-auto text-[4rem] z-20 pt-4">
            <motion.div
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
              animate={
                isInView && {
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }
              }
              transition={{
                duration: 2,
                delay: 1,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: 0,
                repeatDelay: 1,
              }}
            >
              <RiDoubleQuotesL className="text-brand-lightest border-[1px] border-brand-lighter rounded-full bg-white" />
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl transform skew-y-[12deg] lg:rounded-xl mx-auto bg-brand-lighter/20 bg-clip-content bg-gradient-to-tr from-brand-lighter via-brand-base to-brand-lighter">
          <div className="transform -skew-y-[12deg] mb-24">
            {/* <PatientTestimonials /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;