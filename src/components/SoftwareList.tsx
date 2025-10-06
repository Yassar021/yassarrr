import * as React from "react";
import { SoftwareItemProps } from "../app/types";

const SoftwareItem: React.FC<SoftwareItemProps> = ({ name }) => (
  <div className="mt-0">{name}</div>
);

export const SoftwareList: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="flex flex-col grow shrink-0 items-start gap-2 basis-0 w-fit">
    {items.map((item) => (
      <SoftwareItem key={item} name={item} />
    ))}
  </div>
);