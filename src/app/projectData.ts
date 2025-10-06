import { ProjectProps, SocialLinkProps, NavigationItemProps } from './types';


export const projects: ProjectProps[] = [
  {
    number: "01",
    title: "Front-End Development at Aganta.id ",
    description: "Developed and maintained responsive user interfaces for various web applications using modern tools like Next.js and Chakra UI. My focus was on optimizing web performance and working closely with backend teams to ensure a seamless and intuitive user experience.",
    linkText: "More shots from this project ↗",
    linkHref: "/",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/485de4f9acd5fa05bf5f8ea76f479b0ec2f8cc7731c2c0091bfb97ad6a16097d?apiKey=198cb895976944b4a234b85e05ffd29d&",
    imageAlt: "Front-End Development at Aganta.id"
  },
  {
    number: "02",
    title: " Web Design & UI/UX at Friendstech.id",
    description: "As a Web Designer, I crafted responsive and user-friendly website layouts from concept to launch. I applied key UI/UX principles to enhance website navigation and collaborated with the development team to align visual design with technical functionality.",
    linkHref: "/",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bff6ece8edaca9fd0d55706c10569ef087bd5e5579b2c6894e05ce27d4da5cc3?apiKey=198cb895976944b4a234b85e05ffd29d&",
    imageAlt: " Web Design & UI/UX at Friendstech.id"
  },
  {
    number: "03",
    title: "Tourism Hackathon Makassar",
    description: "Participated in a fast-paced hackathon to develop a conceptual application for the Makassar General Elections Commission (KPU). My role involved rapidly prototyping a user-friendly front-end designed to improve public access to electoral information.",
    linkHref: "#",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bb6eb28103ea52d99a741a757b943f73fc016a701a27f95e42b878f849ec9e8?apiKey=198cb895976944b4a234b85e05ffd29d&",
    imageAlt: "Tourism Hackathon Makassar"
  }
];

export const navigationItems: NavigationItemProps[] = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "School Project", href: "/" },
  { label: "Contact", href: "/contact" }
];

export const socialLinks: SocialLinkProps[] = [
  { name: "Github", url: "https://github.com/yassar021/" },
  { name: "Linkedin", url: "https://www.linkedin.com/in//" },
  // { name: "Instagram", url: "https://www.instagram.com/uswatunhr_/" }
];
