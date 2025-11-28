import { ChevronDownIcon } from "flowbite-react";

const PhoneInput: React.FC<React.PropsWithChildren> = ({
}) => {
  return (
    <div className="">
            <label htmlFor="country" className="block mb-1 text-zinc-600">Phone</label>
              <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-zinc-400 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  >
                    <option>CA</option>
                    <option>US</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                  />
                </div>
                <input
                  required
                  id="phone"
                  name="phone"
                  placeholder="123-456-7890"
                  type="phone"
                  className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base focus:outline-none"
                />
              </div>
              </div>

  );
};

export default PhoneInput;