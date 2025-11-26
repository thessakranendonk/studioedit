import "@/src/styles/globals.css";
import { NavigationLink } from "@/types/component-types";

import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";

export const metadata = {
  title: "Studio Edit",
}


export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <Home />  );
}