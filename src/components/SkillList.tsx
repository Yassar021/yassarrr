import * as React from "react";
import { SkillItemProps } from "../app/types";

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => (
  <div className="mt-2">{skill}</div>
);

export const SkillList: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="flex flex-col grow items-start text-lg tracking-tight leading-none text-neutral-900 max-md:mt-10 max-md:max-w-full">
    {items.map((item) => (
      <SkillItem key={item} skill={item} />
    ))}
  </div>
);