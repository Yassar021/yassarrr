import * as React from "react";
import { ProjectProps } from "../app/types";

export const Project: React.FC<ProjectProps> = ({
  number,
  title,
  description,
  linkText,
  linkHref
}) => {
  return (
    <div className="mt-28 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-lg font-medium tracking-tight leading-none text-neutral-900 max-md:mt-10">
            <div className="max-md:mr-2.5">
              {number} / {title}
            </div>
            <div className="mt-7 leading-6">{description}</div>
            {/* {additionalText && (
              <div className="mt-10 text-sm tracking-tight leading-4 text-zinc-600 max-md:mr-2.5">
                {additionalText}
              </div>
            )} */}
            <a
              href={linkHref}
              className="self-start mt-44 underline decoration-auto decoration-solid underline-offset-auto max-md:mt-10"
            >
              {linkText}
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <div className="flex shrink-0 mx-auto max-w-full bg-zinc-600 h-[365px] w-[640px] max-md:mt-10" />
        </div>
      </div>
    </div>
  );
};