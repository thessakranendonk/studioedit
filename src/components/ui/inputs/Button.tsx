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
        className={clsx("font-medium", extraClassName)}
      >
        {content}
      </button>

  );
};

export default Button;