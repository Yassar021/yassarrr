"use client"

import * as React from "react";
import { Navigation } from "../components/Navigation";
import { ProjectCard } from "../components/ProjectCard";
import { SocialLinks } from "../components/SocialLinks";
import { projects, navigationItems, socialLinks } from "./projectData";
import { motion } from 'framer-motion';
import { footerVariants, staggerContainer, navVariants, fadeIn } from "@/utils/motion";

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center px-20 overflow-hidden pt-28 pb-11 bg-zinc-100 max-md:px-5 max-md:pt-24">
      <div className="flex flex-col w-full max-w-[1123px] max-md:max-w-full">
        <motion.header variants={navVariants} initial="hidden" whileInView="show" className="flex flex-wrap items-start justify-between w-full gap-5 text-xl font-medium leading-tight tracking-tighter whitespace-nowrap text-neutral-900 max-md:mr-1 max-md:max-w-full">  
          <div className="text-2xl font-bold text-indigo-800"><a href="/">Yassarrr.</a></div>
          <Navigation items={navigationItems} />
        </motion.header>

        <section className="mt-64 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          <motion.div variants={staggerContainer({ staggerChildren: 0.1 })} initial="hidden" whileInView="show">
            <motion.div variants={fadeIn({ direction: 'up', type: 'tween', delay: 0.2, duration: 1 })}>
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                  <h1 className="self-stretch my-auto text-6xl font-medium tracking-tighter leading-[58px] text-neutral-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    Hello, I'm <br />
                    Ahmad Muyassar Yani.
                  </h1>
                </div>
                <div className="flex flex-col w-3/5 ml-5 max-md:ml-0 max-md:w-full">
                  <p className="text-3xl leading-9 tracking-tighter text-zinc-600 max-md:mt-10 max-md:max-w-full">
                    A passionate Front-End Developer specializing in building beautiful, functional, and user-centered web applications. I enjoy the process of turning complex problems into elegant, interactive digital experiences that are both responsive and accessible to everyone.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f363bc05db69966cf085455038dd70924561d0667e44f7437da650a98dca85c4?placeholderIfAbsent=true&apiKey=198cb895976944b4a234b85e05ffd29d"
          className="object-contain mt-16 aspect-[0.89] fill-neutral-900 w-[34px] max-md:mt-10"
          alt="Decorative element"
        />

        <section aria-label="Projects showcase">
          <motion.div variants={staggerContainer({ staggerChildren: 1 })} initial="hidden" whileInView="show">
            {projects.map((project, index) => (
              <React.Fragment key={project.number}>
                <ProjectCard {...project} />
                {index < projects.length - 1 && (
                  <div className="w-full h-px border-2 border-solid shrink-0 mt-28 border-neutral-900 max-md:mt-10" role="separator" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </section>
          
        <motion.footer variants={footerVariants} initial="hidden" whileInView="show" id="contact" className="flex flex-wrap items-start justify-between w-full gap-5 px-px py-1 mt-48 text-xl font-medium leading-6 tracking-tighter max-md:mt-10 max-md:max-w-full">
          <div className="text-indigo-800">
            © 2025 Ahmad Muyassar Yani
          </div>
          <SocialLinks links={socialLinks} />

        </motion.footer>
      </div>
    </main>
  );
};