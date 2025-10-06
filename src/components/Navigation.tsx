import * as React from "react";
import { NavigationItemProps } from "../app/types";

interface NavigationProps {
  items: NavigationItemProps[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative" role="navigation">
      <button
        onClick={toggleMenu}
        className="items-center hidden p-2 rounded-lg max-md:flex hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Open navigation menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div
        className={`
          flex gap-8 items-start
          max-md:absolute max-md:right-0 max-md:top-full max-md:mt-2
          max-md:flex-col max-md:bg-white max-md:p-4 max-md:rounded-lg
          max-md:shadow-lg max-md:w-48
          ${isOpen ? 'max-md:flex' : 'max-md:hidden'}
        `}
        id="mobile-menu"
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-2 py-1 text-xl font-medium leading-tight tracking-tighter rounded-lg whitespace-nowrap text-neutral-900 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};