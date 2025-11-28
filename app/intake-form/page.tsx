'use client';
import React, { Fragment } from "react";
import PageHeading from "@/src/components/ui/PageHeading";
import { PhotoIcon } from '@heroicons/react/24/solid'
import clsx from "clsx";
import { ChevronDownIcon } from "flowbite-react";
import Dropdown from "@/src/components/ui/inputs/Dropdown";
import Button from "@/src/components/ui/inputs/Button";
import InputField from "@/src/components/ui/inputs/Input";
import DocUpload from "@/src/components/ui/inputs/DocUpload";
import RadioButton from "@/src/components/ui/inputs/RadioButton";
import PhoneInput from "@/src/components/ui/inputs/PhoneInput";

const IntakeForm: React.FC = () => {
  return (
    <form className="pt-32 w-screen h-screen"
    onSubmit={async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/send-email", {
      method: "POST",
      body: formData,
    });

    if (response.ok) alert("Email sent!");
  }}>
    <PageHeading heading="Intake Form" />
    <h2 className="max-w-lg mx-auto mt-10 font-semibold text-sm/6 text-indigo-700">Contact Details</h2>
    <div className="grid grid-cols-2 gap-2 space-y-4 p-8 mx-auto max-w-xl text-sm/6 font-semibold text-zinc-600">
    <InputField id={"firstname"} label={"First Name"} name={"firstname"} type={"text"} required={true}  />
    <InputField id={"lastname"} label={"Last Name"} name={"lastname"} type={"text"} required={true}  />
    <PhoneInput/>
    <InputField id={"email"} label={"Email"} name={"email"} type={"email"} required={true}  />
    <RadioButton content={"How would you like to be contacted?"} extraClassName="flex" options={[{"label":"Email", "id":"contact-method-email"}, {"label":"Phone", "id":"contact-method-phone"}]} />
 
        <h2 className="col-span-2 max-w-lg text-sm/6 mt-10 font-semibold text-indigo-700">Project Details</h2>
    <Dropdown id={"style"} label={"What style guide should I use?"} name={"style"} options={["APA", "MLA", "Chicago", "Harvard", "IEEE", "Journal-specific guidelines", "Other, please describe below"]} />
    <Dropdown id={"deliverable"} label={"What is the expected deliverable?"} name={"deliverable"} options={["Proofread copy", "Structural edit", "Polished final version", "Tracked-changes file", "Annotated comments", "Other, please describe below"]} />
        <div className="col-span-2">
            <label htmlFor="work-description" className="block">
              Please describe your work
            </label>
            <div className="mt-2.5">
              <textarea
                id="work-description"
                name="work-description"
                rows={4}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-zinc-600 outline-1 -outline-offset-1 outline-zinc-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                defaultValue={''}
              />
            </div>
          </div>
          <DocUpload id={"file-upload"} type={"file"} content={"Upload a file"} label={"Please upload any relevant files"} description={"Doc, Docx, or Txt up to 10MB"} />
          <Button id="submit-button" type="submit" href="#" content="Submit" extraClassName={clsx("col-span-1 mt-8 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")} />
    </div>
    </form>
  );
};

export default IntakeForm;