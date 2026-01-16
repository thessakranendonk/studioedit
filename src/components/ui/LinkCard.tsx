import { LinkCardProps } from "@/types/component-types";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";

const LinkCard: React.FC<LinkCardProps> = ({
  href,
  image,
  name,
  information,
}) => {
  // const [iconType, setIconType] = useState<string>();
  return (
    <Link
      href={href}
      className="flex flex-col h-full max-w-48 md:max-w-72 lg:max-w-94 md:px-3 lg:px-8 pt-4 md:pt-0 rounded-lg justify-center lg:justify-start text-center mx-auto md:gap-y-4  hover:opacity-70 hover:shadow-xl hover:scale-105 hover:transition hover:duration-300"
      // onMouseEnter={() => setIconType("hoverIcon")}
      // onMouseLeave={() => setIconType("icon")}
    >
      <div className="mx-auto pt-4">
        {/* {iconType === "icon" ? icon : hoverIcon} */}
        {image && <Image src={image} alt={name} className="w-18 h-48 md:h-18 rounded-full object-cover mb-4" />}
      </div>

      <h2 className="text-xl uppercase lg:text-2xl text-zinc-600 font-light">{name}</h2>

      <p className="text-lg lg:text-xl text-zinc-500 font-extralight">
        {information}
      </p>
    </Link>
  );
};

export default LinkCard;