import { SyntaxLinkProps } from "../../../../types/component-types";
import clsx from "clsx";
import Link from "next/link";

const SyntaxLink: React.FC<React.PropsWithChildren<SyntaxLinkProps>> = ({
  id,
  extraClassName,
  content,
  href,
}) => {
  return (
 
      <Link
        id={id}
        href={href}
        className={clsx("font-medium", "bg-brand-base px-20text-sm text-white hover:text-brand-base hover:shadow-[inset_15rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow] rounded-lg border-2 border-brand-base tracking-wider", extraClassName)}
      >
        {content}
      </Link>

  );
};

export default SyntaxLink;