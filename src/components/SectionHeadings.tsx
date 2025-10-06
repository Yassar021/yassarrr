import * as React from "react";
import { SectionHeadingProps } from "../app/types";

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className = "" }) => (
  <h2 className={`text-lg font-medium tracking-tight leading-none underline decoration-auto decoration-solid text-neutral-900 underline-offset-auto ${className}`}>
    {children}
  </h2>
);