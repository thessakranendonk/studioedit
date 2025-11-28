import { InputProps } from "@/types/component-types";
import { Input } from '@headlessui/react'
import clsx from "clsx";

const InputField: React.FC<React.PropsWithChildren<InputProps>> = ({
  id,
  extraClassName,
  type,
  name,
  content,
  label,
  placeholder,
  required,
  defaultValue
}) => {
  return (
 <div>
    {label && <label htmlFor={id} className="block mb-1 text-zinc-600">{label}</label>}
      <Input
      required={required}
      placeholder={placeholder}
      defaultValue={defaultValue}
      id={id}
      name={name}  
      type={type}
      className={clsx("block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-zinc-600 outline-1 -outline-offset-1 outline-zinc-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 data-hover:shadow", extraClassName)}
      >
        {content}
      </Input>
</div>
  );
};

export default InputField;