import { DropdownProps } from "@/types/component-types";
import { ChevronDownIcon } from "flowbite-react"



const Dropdown: React.FC<React.PropsWithChildren<DropdownProps>> = ({
  id,
  label,
  name,
  options
}) => {
    return (
         
                     <div>
                      <label htmlFor="deliverable" className="block text-sm/6 font-medium text-zinc-600">
                        {label}
                      </label>
                      <div className="mt-2 grid grid-cols-1">
                        <select
                          required
                          id={id}
                          name={name}
                          autoComplete={name}
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-zinc-500 outline-1 -outline-offset-1 outline-zinc-400 *:bg-white/5 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        >
                            <option defaultValue="" value="" hidden>
            Please select
          </option>
                            {options.map((option, index) => (
                                
                                <option key={index}>{option}</option>
                                
                            ))}
                        </select>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-zinc-400 sm:size-4"
                        />
                      </div>
                    </div>)}

export default Dropdown;