import React, { Fragment } from "react";
import PageHeading from "@/src/components/ui/PageHeading";
import { Input } from '@headlessui/react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import clsx from "clsx";
import { ChevronDownIcon } from "flowbite-react";
import Dropdown from "@/src/components/ui/inputs/Dropdown";
import Button from "@/src/components/ui/inputs/Button";

const IntakeForm: React.FC = () => {
  return (
    <div className="pt-32 w-screen h-screen">
    <PageHeading heading="Intake Form" />
    <h2 className="max-w-lg mx-auto mt-10 font-semibold text-sm/6 text-indigo-700">Contact Details</h2>
    <div className="grid grid-cols-2 gap-2 space-y-4 p-8 mx-auto max-w-xl text-sm/6 font-semibold text-zinc-600">
    <div><label htmlFor="first_name" className="block mb-1 text-zinc-600">First Name</label>
      <Input
        required
        id="first_name"
        name="first_name"
        type="text"
        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-zinc-600 outline-1 -outline-offset-1 outline-zinc-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 data-hover:shadow"
      />
      </div>
         <div><label htmlFor="last_name" className="block mb-1 text-zinc-600">Last Name</label>
      <Input
        required
        id="last_name"
        name="last_name"
        type="text"
        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-zinc-600 outline-1 -outline-offset-1 outline-zinc-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 data-hover:shadow"
      /></div>
        <div className="">
            <label htmlFor="phone" className="block mb-1 text-zinc-600">Phone</label>
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
                  id="phone-number"
                  name="phone-number"
                  placeholder="123-456-7890"
                  type="text"
                  className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base focus:outline-none"
                />
              </div>
              </div>
      <div><label htmlFor="email" className="block mb-1 text-zinc-600">Email</label>
      <Input
        required
        id="email"
        name="email"
        type="email"
        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-zinc-600 outline-1 -outline-offset-1 outline-zinc-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 data-hover:shadow"
      /></div>

      <fieldset className="col-span-2">
              <legend>How would you like to be contacted?</legend>
              <div className="flex mt-4 gap-x-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="contact-email"
                    name="contact-method"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-zinc-400 bg-zinc-100 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="contact-email" className="block font-medium">
                    Email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="contact-phone"
                    name="contact-method"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-zinc-400 bg-zinc-100 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="contact-phone" className="block font-medium">
                    Phone
                  </label>
                </div>
              </div>
          </fieldset>
        <h2 className="col-span-2 max-w-lg text-sm/6 mt-10 font-semibold text-indigo-700">Project Details</h2>
  
        <div className="col-span-2">
            <label htmlFor="message" className="block">
              Please describe your work
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-zinc-600 outline-1 -outline-offset-1 outline-zinc-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                defaultValue={''}
              />
            </div>
          </div>
          <label htmlFor="file-upload" className="block mb-2 col-span-2 text-sm/6 font-medium text-zinc-600">
              Please upload any relevant files
            </label>
          <div className="col-span-2 flex justify-center rounded-lg border border-dashed border-zinc/25 px-6 py-8">
                
                <div className="text-center">
                  <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-600" />
                  <div className="mt-2 flex text-sm/6 text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </div>
          </div>
            <Dropdown id={"style"} label={"What style guide should I use?"} name={"style"} options={["APA", "MLA", "Chicago", "Harvard", "IEEE", "Journal-specific guidelines", "Other, please describe below"]} />
            <Dropdown id={"deliverable"} label={"What is the expected deliverable?"} name={"deliverable"} options={["Proofread copy", "Structural edit", "Polished final version", "Tracked-changes file", "Annotated comments", "Other, please describe below"]} />
            <Button id="submit-button" type="submit" href="#" content="Submit" extraClassName={clsx("col-span-1 mt-8 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")} />
    </div>
    </div>
  );
};

export default IntakeForm;