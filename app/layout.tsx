import { NavigationLink } from "../types/component-types";
import clsx from "clsx";
import Footer from "../src/components/layout/project-layout/Footer";
import Header from "../src/components/layout/project-layout/Header";
import logo from "@/public/images/logo.png";
import "@/src/styles/globals.css";


export default function ProjectLayout({ children }: { children: React.ReactNode }) {


  const navigationLinks: Array<NavigationLink> = [
    { name: "SERVICES", href: "/services"},
    { name: "ABOUT US", href: "/about-us" },
    { name: "INTAKE FORM", href: "/intake-form" },
  ];

  return (
    <html lang="en">
      <body>
       <Header 
         logo={logo}
         navigationLinks={navigationLinks}
         textClassName="group text-md transition-all duration-300 ease-in-out text-black font-light mx-8 text-zinc-600"
         linkClassName="flex bg-left-bottom lg:text-md"
         logoClassName="sm:w-3/5 sm:ml-8 md:w-3/4 h-auto ml-2 mt-2 mr-1"
         hoverClassName={clsx(
           "flex bg-left-bottom hover:text-brand-lightest bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
         )}
         activeLinkClassName="text-brand-lightest font-normal lg:text-lg font-light"
    />
        <main>{children}</main>
       {/* <Footer logo={logo.src} navigationLinks={navigationLinks} /> */}
    </body>
    </html>
  );
};