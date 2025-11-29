import React from "react";
import { RadioButtonProps } from "../../../../types/component-types";
import clsx from "clsx";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { labelErrorClass } from "@/src/styles/constants";

const RadioButton: React.FC<React.PropsWithChildren<RadioButtonProps>> = ({
  extraClassName,
  content,
  options,
  showError
}) => {

  // const [selectedOption, setSelectedOption] = React.useState<string>([...options][0].id);
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  return (
    <div className="col-span-2">
    <RadioGroup value={selectedOption}  onChange={setSelectedOption} className={clsx(extraClassName, "mt-4 gap-x-6 col-span-2")}>
              <legend>{content}</legend>
               {options.map((option, index) => (
                <Field key={index} className="flex items-center gap-x-3">
                  <Radio
                    id={option.id}
                    value={option.id}
                    className="relative size-4 appearance-none rounded-full border border-zinc-400 bg-zinc-100 data-checked:bg-indigo-400/80 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
                  >            
                  <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
                  </Radio>
                  <Label htmlFor={option.id} className="block font-medium">{option.label}</Label>
                  
                </Field>
              ))}            
          </RadioGroup>
                    {showError && <p className={clsx(labelErrorClass, "block")}>This field is required</p>}

    </div>
  );
};

export default RadioButton;