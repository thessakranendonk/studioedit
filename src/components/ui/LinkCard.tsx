import { LinkCardProps } from "@/types/component-types";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";

const LinkCard: React.FC<LinkCardProps> = ({
  href,
  image,
  name,
  information,
  icon,
  hoverIcon,
}) => {
  const [iconType, setIconType] = useState<string>();
  return (
    <Link
      href={href}
      className="flex flex-col h-full border-[#0b3330]/20 border-1 max-w-64 md:max-w-84 lg:max-w-94 lg:px-3 lg:px-8 pt-4 md:pt-5 rounded-lg justify-center lg:justify-start text-center mx-auto lg:gap-y-4  hover:opacity-70 hover:shadow-xl hover:shadow-[#0b3330] hover:scale-105 hover:transition hover:duration-300"
      onMouseEnter={() => setIconType("hoverIcon")}
      onMouseLeave={() => setIconType("icon")}
    >
      <div className="mx-auto pt-4">
        {iconType === "icon" ? icon : hoverIcon}
        {/* {image && <Image src={image} alt={name} className="w-18 h-48 md:h-18 rounded-full object-cover mb-4" />} */}
      </div>

      <h2 className="text-xl uppercase lg:text-2xl text-[#0b3330]/80 font-normal">{name}</h2>

      <p className="text-lg lg:text-xl mb-10 px-2 pt-2 text-zinc-500 font-extralight">
        {information}
      </p>
    </Link>
  );
};

export default LinkCard;