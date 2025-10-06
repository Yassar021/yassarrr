"use client";

import * as React from "react";
import { Navigation } from "../../components/Navigation";
import { SocialLinks } from "../../components/SocialLinks";
import { navigationItems, socialLinks } from "../projectData";
import { motion } from "framer-motion";
import {
  footerVariants,
  staggerContainer,
  navVariants,
  fadeIn,
} from "@/utils/motion";

export default function About() {
  return (
    <main className="flex flex-col items-center px-20 overflow-hidden pt-28 pb-7 bg-zinc-100 max-md:px-5 max-md:pt-24">
      <div className="flex flex-col items-start ml-5 w-full max-w-[1161px] max-md:max-w-full">
        <motion.header
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap items-start justify-between w-full gap-5 text-xl font-medium leading-tight tracking-tighter whitespace-nowrap text-neutral-900 max-md:mr-1 max-md:max-w-full"
        >
          <div className="text-2xl font-bold text-indigo-800">
            <a href="/">Yassarrr.</a>
          </div>
          <Navigation items={navigationItems} />
        </motion.header>

        <motion.section
          variants={footerVariants}
          initial="hidden"
          whileInView="show"
          className="mt-56 w-full max-w-[1120px] max-md:mt-10 max-md:max-w-full"
        >
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <h1 className="text-6xl font-medium tracking-tighter leading-[58px] text-neutral-900 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Got a Project in Mind? Let's Build Together.
                </h1>
                <div className="text-3xl leading-9 tracking-tighter mt-14 text-zinc-600 max-md:mt-10 max-md:max-w-full">
                  Whether it's about a web development project, a UI/UX challenge, or you just want to talk about technology, my inbox is always open. Your ideas are valuable—let's create something amazing together.
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <hr className="flex shrink-0 mt-20 max-w-full h-0.5 bg-neutral-900 w-[1120px] max-md:mt-10" />

        <motion.section
          variants={footerVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap self-stretch justify-between gap-5 mt-16 text-3xl tracking-tighter text-neutral-900 max-md:mt-10 max-md:max-w-full"
        >
          <h2 className="leading-9">
            Let's bring your next digital experience to life.
          </h2>
          <a
            href="mailto:ahmad.muyassar@yps.sch.id"
            className="self-start leading-none max-md:max-w-full"
          >
            ahmad.muyassar@yps.sch.id
          </a>
        </motion.section>

        <motion.footer variants={footerVariants} initial="hidden" whileInView="show" id="contact" className="flex flex-wrap items-start justify-between w-full gap-5 px-px py-1 my-8 text-xl font-medium leading-6 tracking-tighter max-md:mt-10 max-md:max-w-full">
          <div className="text-indigo-800">
            © 2025 Ahmad Muyassar Yani
          </div>
          <SocialLinks links={socialLinks} />
        </motion.footer>
      </div>
    </main>
  );
}
