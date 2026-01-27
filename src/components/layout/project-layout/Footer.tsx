'use client'
import Button from "@/src/components/ui/inputs/Button";
import { FooterProps } from "../../../../types/component-types";
import clsx from "clsx";
import Link from "next/link";
import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlinePhone,
} from "react-icons/ai";
import LogoAnimation from "@/src/components/LogoAnimation";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineContactPhone } from "react-icons/md";
import { CONTACT_DETAILS } from "@/src/data/data";
import logo from "../../../../public/images/STGreen.png";
import AnimateOnScroll from "../../AnimateOnScroll";
import { slideInUpSoft } from "@/src/styles/animations";
import SyntaxLink from "../../ui/inputs/SyntaxLink";


const iconClassName = "mt-1 mr-2 w-4 h-4 text-white";
const divClassName = " flex flex-row justify-center mt-5 mb-1";
const hoursClassName = "flex flex-row justify-between";
const dayClassName = "flex justify-center text-left text-sm text-white pb-1";

const LogoFooter = () => {
  return (
    <div className="bg-brand-base flex justify-center w-full h-48">
      <div className="my-auto">
        <LogoAnimation width={150} height={125} logo={logo.src} extraClassName=""/>
      </div>
    </div>
  );
};

const FooterHeading: React.FC<{ title: string; icon: any }> = ({
  title,
  icon,
}) => {
  return (
    <div className="flex justify-center bg-white/20 w-full h-10">
      <div className="flex relative my-auto">
        <div>{icon}</div>
        <h2 className=" tracking-widest text-md text-white">
          <strong>{title}</strong>
        </h2>
      </div>
    </div>
  );
};

const FooterMenu: React.FC<Pick<FooterProps, "navigationLinks">> = ({
  navigationLinks,
}) => {
  return (
    <div className="flex flex-col justify-between w-full pb-5 bg-brand-base">
      <div className="relative text-center">
        <FooterHeading
          title="MENU"
          icon={<AiOutlineMenu className="mt-1 mr-2 w-4 h-4 text-white" />}
        />

        <ul className="flex flex-col mx-auto text-md gap-y-6 font-light text-white mt-4">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              {link.name !== "FORMS" ? (
                <div className="hover:font-medium">
                  <Link href={link.href}>
                    {link.name}
                  </Link>
                </div>
              ) : (
                <ul className="flex flex-col text-md gap-y-2">
                  {link.dropdown?.map((drop) => (
                    <li key={drop.name} className="hover:font-medium">
                      <Link href={drop.href}>
                        {drop.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ClinicContact = () => {
  return (
    <div className="flex flex-col justify-between border-t-8 md:border-none border-brand-lightest bg-brand-base">
      <FooterHeading
        title="CONTACT"
        icon={<MdOutlineContactPhone className={iconClassName} />}
      />
      <div className="pb-8 pt-4 md:pt-0">
        {/* <div className={divClassName}>
          <AiOutlinePhone className={iconClassName} />
          <a
            className="hover:underline text-sm text-white"
            href={`tel:${CONTACT_DETAILS.phone}`}
          >
            {CONTACT_DETAILS.phone}
          </a>
        </div> */}

        <div className={divClassName}>
          <AiOutlineMail className={iconClassName} />
          <a
            className="hover:underline text-sm text-white"
            href={`mailto:${CONTACT_DETAILS.email}`}
          >
            {CONTACT_DETAILS.email}
          </a>
        </div>

        <div className={divClassName}>
          <CiLocationOn className={iconClassName} />
          <a
            className="hover:underline text-sm text-white"
            href="https://www.google.com/maps/place/Hamilton,+ON/@43.2606916,-80.0982971,11z/data=!3m1!4b1!4m6!3m5!1s0x882c986c27de778f:0x2b6aee56d8df0e21!8m2!3d43.2557206!4d-79.8711024!16zL20vMDNwemY?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACT_DETAILS.address}
          </a>
        </div>
        <AnimateOnScroll customVariants={slideInUpSoft}>
        <div className="flex justify-center mt-3">
          <SyntaxLink content="REQUEST QUOTE" href="/request-quote" extraClassName="bg-brand-darkest px-8 mt-3 py-2 text-sm text-white hover:text-brand-base hover:shadow-[inset_15rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow] rounded-lg border-2 border-brand-darkest md:border-brand-lightest">
            Request Quote
          </SyntaxLink>
        </div>
      </AnimateOnScroll>
      </div>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ navigationLinks }) => {
  return (
    <div className="grid md:grid-cols-3 bg-brand-base">
      <div className="hidden md:inline-block">
        <LogoFooter />
      </div>
      <div className="hidden md:inline-block">
        <FooterMenu navigationLinks={navigationLinks} />
      </div>
      <div>
        <ClinicContact />
      </div>
    </div>
  );
};

export default Footer;