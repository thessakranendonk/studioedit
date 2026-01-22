'use client'
import { NavigationLink } from "../types/component-types";
import clsx from "clsx";
import Footer from "../src/components/layout/project-layout/Footer";
import Header from "../src/components/layout/project-layout/Header";
import "./globals.css";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'


export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  const location = useRouter();
  const pathname = usePathname();

  const navigationLinks: Array<NavigationLink> = [
    { name: "TEST", href: "/test", dropdown: [
      { name: "Academic Editing", href: "/services#academic-editing" },
      { name: "Professional Editing", href: "/services#professional-editing" },
      {name: "Creative Editing", href: "/services#creative-editing" },] },
    { name: "MY PHILOSOPHY", href: "/my-philosophy" },
    { name: "REQUEST QUOTE", href: "/request-quote" },
    { name: "SERVICES", href: "/services" },
  ];

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
       <Header 
         navigationLinks={navigationLinks}
         currentActiveLocation={pathname}
         textClassName="group text-md transition-all duration-300 ease-in-out text-black font-light mx-8 text-zinc-600"
         linkClassName="flex bg-left-bottom lg:text-md"
        //  logoClassName="sm:w-3/5 sm:ml-8 md:w-3/4 h-auto ml-2 mt-2 mr-1"
        logoClassName="w-100% h-auto ml-2 mt-2 mr-1"
         hoverClassName={clsx(
           "flex hover:font-semibold bg-left-bottom hover:text-brand-lightest hover:bg-gradient-to-r hover:from-brand-lightest/40 hover:to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
         )}
         activeLinkClassName="text-indigo-800 font-normal lg:text-md font-light underline underline-offset-8 decoration-1 decoration-[#c58210]"
    />
        <main className="flex-1">{children}</main>
       <Footer navigationLinks={navigationLinks} />
    </body>
    </html>
  );
};