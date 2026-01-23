import { ButtonProps } from "../../../../types/component-types";
import clsx from "clsx";

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  id,
  extraClassName,
  type,
  content,
}) => {
  return (
 
      <button
        type={type}
        id={id}
        className={clsx("font-medium", "bg-brand-base px-8 text-sm h-10 mt-1 text-white hover:text-brand-base hover:shadow-[inset_15rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow] rounded-lg border-2 border-brand-base tracking-wider", extraClassName)}
      >
        {content}
      </button>

  );
};

export default Button;