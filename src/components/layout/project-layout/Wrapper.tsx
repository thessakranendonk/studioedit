import { PropsWithChildren } from "react";
import { Montserrat } from 'next/font/google';

/**
 * Wrapper component for children of ProjectLayout that resets z-index and defines the base flex column layout.
 */
export const Wrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
<div className={`min-h-screen overflow-hidden overflow-x-hidden`}>
      {children}
    </div>
  );
};