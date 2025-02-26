"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { MdEmail } from "react-icons/md";
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 w-full px-4">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24">
          {/* Left Column - Profile Image and Details */}
          <motion.div
            className="flex flex-col items-center lg:items-start lg:ml-16 lg:w-1/3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.5,
            }}
          >
            <div className="mb-8">
              <Image
                src="/profiles.png"
                alt="Profile"
                width={300}
                height={300}
                quality={95}
                priority={true}
                className="rounded-full object-cover shadow-lg"
              />
            </div>

            <motion.h2
              className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              NANDHINI ESWARAN
            </motion.h2>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="#contact"
                className="group bg-zinc-900 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-zinc-800 transition"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me here <BsArrowRight />
              </Link>

              <a
                className="bg-white/10 text-zinc-900 dark:text-zinc-100 p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                href="https://www.linkedin.com/in/nandhini25/"
                target="_blank"
              >
                <BsLinkedin className="text-xl" />
              </a>

              <a
                className="bg-white/10 text-zinc-900 dark:text-zinc-100 p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                href="https://github.com/NandhiniE-Tech"
                target="_blank"
              >
                <FaGithubSquare className="text-xl" />
              </a>
              <a
                className="bg-white/10 text-zinc-900 dark:text-zinc-100 p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                href="mailto:nandhinie102@gmail.com"
              >
                <MdEmail className="text-xl" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="flex-1 text-left lg:mr-16 lg:w-2/3"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 text-center lg:text-left">
              Hi, Welcome to my website!
            </h1>
            <p className="text-lg text-zinc-800 dark:text-zinc-200 leading-relaxed text-center lg:text-left">
              I'm a data professional with a Master's in Math specializing in AI
              product development, ML, AI Agents, prompt engineering, and model
              fine-tuning. A creative thinker driven by innovation, with a
              passion for analytics, research, and solving real-world problems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
