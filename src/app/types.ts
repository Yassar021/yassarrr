export interface ProjectProps {
  number?: string;
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface ProjectCardProps {
  number?: any;
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  imageSrc?: string;
  index?: number;
  imageAlt?: any;
}
export interface Project extends ProjectCardProps {}

export interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  id : string;
}

export interface SocialLinkProps {
  name: string;
  url: string;
}

export interface NavigationItemProps {
  label: string;
  href: string;
}

export interface NavItemProps {
  label: string;
}

export interface SoftwareItemProps {
  name: string;
}

export interface SkillItemProps {
  skill: string;
}


