import { DocUploadProps } from "@/types/component-types";
import { PhotoIcon } from '@heroicons/react/24/solid'
import clsx from "clsx";

const DocUpload: React.FC<React.PropsWithChildren<DocUploadProps>> = ({
  id,
  extraClassName,
  type,
  content,
  label,
  description
}) => {
  return (
<div className="col-span-2">
          <label htmlFor={id} className="block mb-2 text-sm/6 font-medium text-zinc-600">
              {label}
            </label>
          <div className="col-span-2 flex justify-center rounded-lg border border-dashed border-zinc/25 px-6 py-8">
                
                <div className="text-center">
                  <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-600" />
                  <div className="mt-2 flex text-sm/6 text-gray-400">
                    <label
                      htmlFor={id}
                      className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                    >
                      <span>{content}</span>
                      <input id={id} name={id} type={type} className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-400">{description}</p>
                </div>
          </div>
</div>
  );
};

export default DocUpload;