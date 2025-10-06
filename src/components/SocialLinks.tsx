import * as React from "react";
import { SocialLinkProps } from "../app/types";

interface SocialLinksProps {
  links: SocialLinkProps[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex gap-10 items-start mt-0 whitespace-nowrap text-neutral-900">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className="leading-tight"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};