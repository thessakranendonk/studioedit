import { motion } from "framer-motion";
import { bounceRightOnHover, slideInLeftSlow } from "@/src/styles/animations";
import AnimateOnScroll from "../AnimateOnScroll";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";

export interface ServiceHeadingProps {
  title: string;
  slogan?: string;
  pageAnchorLinks?: { href: string; title: string }[];
}

const ServiceHeading: React.FC<ServiceHeadingProps> = ({ title, slogan, pageAnchorLinks }) => {
  return (
    <AnimateOnScroll customVariants={slideInLeftSlow}>
        <h1 className="text-6xl text-brand-lighter tracking-wider text-shadow-lg font-[Bungee] pl-25 pt-20 mt-25">
          {title}
        </h1>

        <p className="pl-25 pt-6 text-xl italic text-shadow-sm mb-10">
          {slogan}
        </p>

        <div className="flex flex-col">
          {pageAnchorLinks?.map((link) => (
            <motion.div
              key={link.href}
              {...bounceRightOnHover}
              className="inline-flex items-center gap-2 cursor-pointer mb-4"
            >
              <Link
                href={link.href}
                className="flex ml-25 text-md font-lighter text-brand-darkest/50 hover:text-brand-darkest"
              >
                {link.title}
                <MdOutlineArrowRightAlt className="mt-2 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimateOnScroll>
  );
}   

export default ServiceHeading;