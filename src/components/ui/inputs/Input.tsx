import { errorClass, labelErrorClass } from "@/src/styles/constants";
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
  defaultValue,
  showError,
  onChange
}) => {
  const baseClass = "block w-full rounded-md border px-3.5 py-2 text-zinc-600 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500";

  
  return (
 <div>
    {label && <label htmlFor={id} className="block mb-1 text-zinc-600">{label}</label>}
      <input
      required={required}
      placeholder={placeholder}
      defaultValue={defaultValue}
      id={id}
      name={name}  
      type={type}
      onChange={onChange}
      className={clsx(showError ? errorClass : baseClass, extraClassName)}
      >
        {content}
      </input>
     
      {showError && <p className={labelErrorClass}>This field is required</p>}
</div>
  );
};

export default InputField;