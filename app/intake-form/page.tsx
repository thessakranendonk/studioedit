'use client';
import React, { useRef, useState } from "react";
import PageHeading from "@/src/components/ui/PageHeading";
import clsx from "clsx";

import Dropdown from "@/src/components/ui/inputs/Dropdown";
import Button from "@/src/components/ui/inputs/Button";
import InputField from "@/src/components/ui/inputs/Input";
import DocUpload from "@/src/components/ui/inputs/DocUpload";
import RadioButton from "@/src/components/ui/inputs/RadioButton";
import PhoneInput from "@/src/components/ui/inputs/PhoneInput";
import { errorClass, labelErrorClass } from "@/src/styles/constants";

const IntakeForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [validated, setValidated] = useState(false);
const [values, setValues] = useState<Record<string, string>>({});


  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidated(true);

    if (!formRef.current?.checkValidity()) return;

    const formData = new FormData(formRef.current!);
    const response = await fetch("/api/send-email", { method: "POST", body: formData });
    if (response.ok) alert("Email sent!");
  };

  const handleFieldChange = (name: string, value: string) => {
  setValues(prev => ({ ...prev, [name]: value }));
};

    const isInvalid = (name: string) => validated && !values[name]?.trim();

  return (
    <form 
    ref={formRef}
    className={clsx("pt-32 w-screen h-screen", validated && "validated")}
    noValidate
    onSubmit={handleSubmit}>
      
 
    <PageHeading heading="Intake Form" />
    <h2 className="max-w-lg mx-auto mt-10 font-semibold text-sm/6 text-indigo-700">Contact Details</h2>
    <div className="grid grid-cols-2 gap-2 space-y-4 p-8 mx-auto max-w-xl text-sm/6 font-semibold text-zinc-600">
    <InputField id={"firstname"} label={"First Name*"} name={"firstname"} type={"text"} required={true} showError={isInvalid("firstname")} onChange={(e) => handleFieldChange("firstname", e.target.value)} />
    <InputField id={"lastname"} label={"Last Name*"} name={"lastname"} type={"text"} required={true} showError={isInvalid("lastname")} onChange={(e) => handleFieldChange("lastname", e.target.value)} />
    <PhoneInput showError={isInvalid("phone")} onChange={(e) => handleFieldChange("phone", e.target.value)}/>
    <InputField id={"email"} label={"Email*"} name={"email"} type={"email"} required={true} showError={isInvalid("email")} onChange={(e) => handleFieldChange("email", e.target.value)} />
    <RadioButton content={"How would you like to be contacted?"} extraClassName="flex" options={[{"label":"Email", "id":"contact-method-email"}, {"label":"Phone", "id":"contact-method-phone"}]} name="contactmethod" showError={isInvalid("contactmethod")} onChange={(e) => handleFieldChange("contactmethod", e.target.value)} />
 
        <h2 className="col-span-2 max-w-lg text-sm/6 mt-10 font-semibold text-indigo-700">Project Details</h2>
    <Dropdown id={"style"} label={"What style guide should I use?*"} name={"style"} options={["APA", "MLA", "Chicago", "Harvard", "IEEE", "Journal-specific guidelines", "Not sure", "Other, please describe below"]} showError={isInvalid("style")} onChange={(e) => handleFieldChange("style", e.target.value)} />
    <Dropdown id={"deliverable"} label={"What is the expected deliverable?*"} name={"deliverable"} options={["Proofread copy", "Structural edit", "Polished final version", "Tracked-changes file", "Annotated comments", "Not sure", "Other, please describe below"]} showError={isInvalid("deliverable")} onChange={(e) => handleFieldChange("deliverable", e.target.value)}/>
        <div className="col-span-2">
            <label htmlFor="work-description" className="block">
              Please describe your work*
            </label>
            <div className="mt-2.5">
              <textarea
                id="work-description"
                name="work-description"
                rows={4}
                className={clsx(isInvalid("work-description") ? errorClass : "block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-zinc-600 outline-1 -outline-offset-1 outline-zinc-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500")}
                onChange={(e) => handleFieldChange("work-description", e.target.value)}
                defaultValue={''}
              />
            </div>
            {isInvalid("work-description") && <p className={labelErrorClass}>This field is required</p>}
          </div>
          <DocUpload id={"file-upload"} type={"file"} content={"Upload a file"} label={"Please upload any relevant files"} description={"Doc, Docx, or Txt up to 10MB"} />
          <Button id="submit-button" type="submit" href="#" content="Submit" extraClassName={clsx("col-span-1 mt-8 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")} />
    </div>
    </form>
  );
};

export default IntakeForm;