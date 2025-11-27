import { JSX } from "react";
import { StaticImageData } from 'next/image';


export interface NavigationLink {
  name: string;
  href: string;
  dropdown?: DropdownLink[];
}

export interface DropdownLink {
  name: string;
  href: string;
}

export interface HeaderProps {
  navigationLinks: NavigationLink[];
  linkClassName: string;
  hoverClassName: string;
  activeLinkClassName: string;
  currentActiveLocation?: string;
  dropdownBgColor?: string;
  arrowColor?: string;
  dropdownBorderColor?: string;
  textClassName?: string;
  companyName?: string;
  companyNameClassName?: string;
  logo?: any | undefined;
  logoClassName?: string;
  alt?: string;
  onLinkClick?: () => void;
}

export type FooterProps = Pick<HeaderProps, "navigationLinks" | "logo">;

export interface ButtonProps {
  id?: string;
  type: "button" | "submit";
  extraClassName?: string;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
  content: string;
  href: string;
}

export interface LinkCardProps {
  href: string;
  image: string | StaticImageData;
  name: string;
  information: string;
}

export interface DropdownProps {
  label: string;
  id: string;
  name: string;
  options: Array<string>;
}