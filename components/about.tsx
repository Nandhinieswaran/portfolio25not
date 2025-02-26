"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[65rem] text-center leading-9 sm:mb-40 scroll-mt-28 px-8 sm:px-16"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Know Me</SectionHeading>

      <p className="mb-7">
        Solving equations led me to the world of Data Science & AI. With a{" "}
        <span className="font-bold">postgraduate degree in Mathematics</span>, I
        developed a deep appreciation for structured problem-solving, logical
        reasoning, and abstract thinking. My journey into AI started with the
        sheer curiosity of how mathematical theories power
        <span className="font-bold"> machine learning models</span> and
        real-world applications.
      </p>

      <p className="mb-7">
        Today, I work in the fast-evolving domain of{" "}
        <span className="font-bold">AI & Data Science</span>, where I immerse
        myself in{" "}
        <span className="font-bold">
          experimenting with machine learning models, fine-tuning AI algorithms,
          analyzing complex data patterns, and reading the latest research
          papers to stay ahead.
        </span>
        Every day, I push myself to explore new techniques—whether it's
        optimizing deep learning architectures, implementing transformer models,
        or integrating AI solutions with real-world systems.
      </p>

      <p className="mb-7">
        What excites me most is the balance between mathematics, creativity, and
        technology. I love diving into the intricate world of{" "}
        <span className="font-bold">AI model fine-tuning</span>, testing and
        refining models to maximize accuracy and efficiency. My ability to blend
        mathematical theory with AI-driven applications allows me to develop
        structured, scalable, and impactful solutions.
      </p>

      <p className="mb-7">
        Outside of AI, I have a deep passion for learning and exploring new
        ideas. Recently, I started learning{" "}
        <span className="font-bold">Japanese</span>—not just for fun, but as a
        way to expand my perspective and connect with a diverse culture. This
        curiosity extends to my work, where I continuously seek innovative
        approaches to AI challenges.
      </p>

      <p className="mb-8">
        When I’m not immersed in AI, I enjoy{" "}
        <span className="font-bold">
          sketching, listening to music, and doing stretching exercises
        </span>
        to keep my creativity flowing. Every challenge I take on is an
        opportunity to grow, and I thrive in dynamic environments where learning
        never stops. The intersection of AI, mathematics, and problem-solving is
        where I feel at home, and I’m always looking forward to the next
        breakthrough.
      </p>
    </motion.section>
  );
}
