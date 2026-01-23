import { JSX } from "react";
import { StaticImageData } from 'next/image';
import { Url } from "next/dist/shared/lib/router/router";


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

export interface LinkCardProps {
  href: string;
  image: string | StaticImageData;
  name: string;
  information: string;
  icon?: JSX.Element;
  hoverIcon?: JSX.Element;
}

export type FooterProps = Pick<HeaderProps, "navigationLinks" | "logo">;


export interface ButtonProps {
  id?: string;
  type: "button" | "submit";
  extraClassName?: string;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
  content: string;
}

export interface SyntaxLinkProps {
  id?: string;
  extraClassName?: string;
  content: string;
  href?: any
}


export interface BasicInputProps {
  id?: string;
  type?: string;  
  name?: string;     
  content?: JSX.Element | string;
  description?: string;
  label?: string;
  showError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  extraClassName?: string;
}

export interface RadioButtonProps extends BasicInputProps{
  extraClassName?: string;
  content: string;
  options: Array<{label: string; id: string}>;
}

export interface DropdownProps extends BasicInputProps {
  options: Array<string>;
}

export interface InputProps extends BasicInputProps {
  extraClassName?: string;
  placeholder?: string;
  required?: boolean | undefined;
  defaultValue?: string;
}