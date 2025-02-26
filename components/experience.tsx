"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiencesData, educationData, volunteerData } from "@/lib/data";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaBrain } from "react-icons/fa";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience");

  const getActiveData = () => {
    switch (activeTab) {
      case "experience":
        return experiencesData;
      case "education":
        return educationData;
      case "volunteer":
        return volunteerData;
      default:
        return experiencesData;
    }
  };

  // Function to get the appropriate icon for each item
  const getIcon = (type) => {
    switch (type) {
      case "education":
        return <LuGraduationCap className="text-white" size={24} />;
      case "volunteer":
        return <FaBrain className="text-white" size={24} />;
      case "experience":
      default:
        return <CgWorkAlt className="text-white" size={24} />;
    }
  };

  return (
    <section id="experience" className="scroll-mt-28 mb-28">
      <div className="max-w-[60rem] mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12">
          My Experience
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {["experience", "education", "volunteer"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Timeline - Desktop Version (hidden on mobile) */}
        <div className="relative hidden md:block">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {getActiveData().map((item, index) => {
                // Alternating sides for even/odd index
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className="mb-24 relative">
                    <div className="flex items-center">
                      {/* Left side (content for odd, date for even) */}
                      <div className="w-[45%] flex items-center">
                        {isEven ? (
                          <div className="ml-8 bg-white dark:bg-gray-800 p-6 px-6 py-3 rounded-full font-medium">
                            {item.date}
                          </div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="ml-auto mr-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
                          >
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-1">
                              {item.location}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </div>

                      {/* Center icon */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-blue-600 border-4 border-blue-400 flex items-center justify-center z-10">
                          {getIcon(item.type || activeTab)}
                        </div>
                      </div>

                      {/* Right side (date for odd, content for even) */}
                      <div className="w-[45%] flex items-center">
                        {isEven ? (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="ml-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
                          >
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-1">
                              {item.location}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                              {item.description}
                            </p>
                          </motion.div>
                        ) : (
                          <div className="ml-8 bg-white dark:bg-gray-800 p-6 rounded-full font-medium">
                            {item.date}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Version - Vertical Timeline (shown only on mobile) */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {getActiveData().map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-8 relative pl-10 border-l-2 border-gray-300 dark:border-gray-700"
                >
                  {/* Date badge */}
                  <div className="absolute -left-3 top-0">
                    <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-blue-400 flex items-center justify-center">
                      {getIcon(item.type || activeTab)}
                    </div>
                  </div>

                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-2">
                    {item.date}
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
