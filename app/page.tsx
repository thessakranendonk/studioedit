import { ProjectLayout } from "@/src/components/layout/ProjectLayout";
import "@/src/styles/globals.css";
// import "@/styles/NewPatientIntake.module.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Studio Edit",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <ProjectLayout>
        {children}
        <ToastContainer />
      </ProjectLayout> 
  );
}