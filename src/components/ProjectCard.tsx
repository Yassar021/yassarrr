import * as React from "react";
import { ProjectCardProps } from "../app/types";
import { motion } from 'framer-motion';

import { fadeIn } from "@/utils/motion";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  title,
  description,
  linkText,
  linkHref,
  imageSrc,
  imageAlt,
  index,
}) => {
  return (
    <article className="mt-28 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
       <motion.div variants={fadeIn({ direction: 'up', type: 'tween', delay: 0.2, duration: 1 })} className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-lg font-medium leading-none tracking-tight grow text-neutral-900 max-md:mt-10">
              <h2 className="max-md:mr-2.5">
                {number} / {title}
              </h2>
              <p className="leading-6 mt-7">
                {description}
              </p>
              <a 
                href={linkHref}
                className="self-start underline transition-colors mt-44 decoration-auto decoration-solid underline-offset-auto max-md:mt-10 focus:ring-2 focus:ring-blue-500 hover:text-blue-600"
                aria-label={`View more details about ${title}`}
              >
                {linkText}
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt={imageAlt}
              className="object-contain grow w-full aspect-[1.75] max-md:mt-10 max-md:max-w-full"
            />
          </div>
       </motion.div>
    </article>
  );
};