"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-8">
        {/* Strategic Advantage Header */}
        <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl border border-primary-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">Dual Specialization Advantage</h3>
          <p className="text-slate-300 text-sm">The rare combination that bridges traditional engineering with intelligent systems</p>
        </div>

        {/* Master's Degree */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-1">Master of Engineering (Professional)</h3>
              <p className="text-slate-400 font-medium">Deakin University, Australia</p>
            </div>
            <span className="text-primary-400 font-medium text-sm tracking-wide bg-primary-500/20 px-3 py-1 rounded-full">2023-2025</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mechanical Design Track */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <h4 className="text-base font-semibold text-white">Mechanical Engineering Design</h4>
              </div>
              <div className="pl-6 space-y-2">
                <p className="text-sm text-slate-300">• Advanced CAD/CAE methodologies</p>
                <p className="text-sm text-slate-300">• Product development lifecycle</p>
                <p className="text-sm text-slate-300">• Design optimization & validation</p>
              </div>
            </div>

            {/* Mechatronics Track */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                <h4 className="text-base font-semibold text-white">Mechatronics & Control Engineering</h4>
              </div>
              <div className="pl-6 space-y-2">
                <p className="text-sm text-slate-300">• Intelligent systems integration</p>
                <p className="text-sm text-slate-300">• Advanced control theory</p>
                <p className="text-sm text-slate-300">• Embedded systems design</p>
              </div>
            </div>
          </div>

          {/* Unique Value */}
          <div className="mt-6 p-4 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-xl border border-primary-500/10">
            <p className="text-sm text-slate-300 italic">
              <strong className="text-white">Strategic Advantage:</strong> This dual specialization creates a unique skill set—
              the ability to design mechanical systems while simultaneously engineering the intelligence that controls them.
            </p>
          </div>
        </div>

        {/* Bachelor's Degree */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-1">Bachelor of Engineering</h3>
              <p className="text-slate-400 font-medium">Osmania University, India</p>
            </div>
            <span className="text-primary-400 font-medium text-sm tracking-wide bg-primary-500/20 px-3 py-1 rounded-full">2018-2022</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h4 className="text-base font-semibold text-white">Mechanical Engineering</h4>
            </div>
            <div className="pl-6 space-y-2">
              <p className="text-sm text-slate-300">• Strong foundation in engineering fundamentals</p>
              <p className="text-sm text-slate-300">• Manufacturing processes & materials science</p>
              <p className="text-sm text-slate-300">• Thermodynamics, fluid mechanics, & mechanics</p>
              <p className="text-sm text-slate-300">• Early exposure to programming & automation</p>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="text-center">
          <p className="text-slate-300 text-sm max-w-3xl mx-auto">
            This educational journey represents a deliberate progression from <strong className="text-white">traditional mechanical engineering</strong> to <strong className="text-primary-400">intelligent systems integration</strong>, positioning me uniquely to tackle
            challenges that require both <strong className="text-secondary-400">hardware expertise</strong> and
            <strong className="text-white"> software intelligence</strong>.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
          <span className="text-white font-medium tracking-wide">Certified SolidWorks Professional (CSWP)</span>
          <a
            href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-6CA572W9HP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 font-mono text-sm tracking-wider underline underline-offset-4 decoration-primary-400/30 hover:decoration-primary-300/60 transition-all duration-200"
          >
            C-6CA572W9HP
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
          <span className="text-white font-medium tracking-wide">CSWPA Advanced Sheet Metal (CSWPA-SM)</span>
          <a
            href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-5DF7S3VQTJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 font-mono text-sm tracking-wider underline underline-offset-4 decoration-primary-400/30 hover:decoration-primary-300/60 transition-all duration-200"
          >
            C-5DF7S3VQTJ
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
          <span className="text-white font-medium tracking-wide">CSWP Advanced Weldments (CSWPA-WD)</span>
          <a
            href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-ZMERB2FJUX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 font-mono text-sm tracking-wider underline underline-offset-4 decoration-primary-400/30 hover:decoration-primary-300/60 transition-all duration-200"
          >
            C-ZMERB2FJUX
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
          <span className="text-white font-medium tracking-wide">CSWP Advanced Drawing Tools (CSWPA-DT)</span>
          <a
            href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-VBDYGQKHU6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 font-mono text-sm tracking-wider underline underline-offset-4 decoration-primary-400/30 hover:decoration-primary-300/60 transition-all duration-200"
          >
            C-VBDYGQKHU6
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
          <span className="text-white font-medium tracking-wide">Certified SolidWorks Associate (CSWA)</span>
          <a
            href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-H7WVD3Z82P"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 font-mono text-sm tracking-wider underline underline-offset-4 decoration-primary-400/30 hover:decoration-primary-300/60 transition-all duration-200"
          >
            C-H7WVD3Z82P
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-8">
        {/* Design & Analysis */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
            <h4 className="text-lg font-semibold text-white tracking-wide">Design & Analysis</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {["SolidWorks", "Fusion 360", "Siemens NX", "Abaqus CAE", "ANSYS", "AutoCAD"].map((skill) => (
              <div key={skill} className="flex items-center space-x-2 bg-white/5 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors duration-200">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300 text-sm font-medium tracking-wide">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Programming & AI */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
            <h4 className="text-lg font-semibold text-white tracking-wide">Programming & AI</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {["Python", "C/C++", "JavaScript", "MATLAB", "TensorFlow", "PyTorch", "OpenCV"].map((skill) => (
              <div key={skill} className="flex items-center space-x-2 bg-white/5 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors duration-200">
                <div className="w-1.5 h-1.5 bg-secondary-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300 text-sm font-medium tracking-wide">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded & Control Systems */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h4 className="text-lg font-semibold text-white tracking-wide">Embedded & Control Systems</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {["Arduino", "Raspberry Pi", "ESP32", "STM32", "Simulink", "ROS"].map((skill) => (
              <div key={skill} className="flex items-center space-x-2 bg-white/5 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors duration-200">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300 text-sm font-medium tracking-wide">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation & Collaboration */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <h4 className="text-lg font-semibold text-white tracking-wide">Innovation & Collaboration</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {["Product Development", "Systems Integration", "Project Management", "Technical Writing", "3D Printing", "Prototyping", "Git", "Agile"].map((skill) => (
              <div key={skill} className="flex items-center space-x-2 bg-white/5 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors duration-200">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300 text-sm font-medium tracking-wide">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white relative" id="about">
      {/* Apple-style full-width content layout */}
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Content Section - Apple's content hierarchy */}
        <div className="space-y-8">
          {/* Apple-style section heading */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4">About</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                  Where Hardware
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500 text-3xl md:text-4xl lg:text-5xl font-extralight">
                  Meets Intelligence
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Apple-style content blocks */}
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed tracking-wide font-light max-w-4xl mx-auto">
              I bridge the gap between <strong className="text-white font-medium">traditional engineering</strong> and
              <strong className="text-primary-400 font-medium"> cutting-edge technology</strong>. With dual specialization in
              <strong className="text-white font-medium"> Mechanical Engineering Design</strong> and
              <strong className="text-secondary-400 font-medium"> Mechatronics & Control Engineering</strong>,
              I bring a unique perspective to every project.
            </p>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed tracking-wide font-light max-w-3xl mx-auto">
              From <strong className="text-primary-400 font-medium">CAD to Code</strong>,
              <strong className="text-secondary-400 font-medium"> Robotics to AI</strong>,
              <strong className="text-white font-medium"> Embedded Systems to Control Theory</strong> —
              I create intelligent solutions that transform ideas into reality. Whether you need someone to
              design mechanical systems, develop embedded software, implement AI algorithms, or orchestrate
              complete product ecosystems, I deliver innovation at every level.
            </p>

            {/* Key Value Proposition */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design & Analysis</h3>
                <p className="text-sm text-slate-300">From concept to CAE validation</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Smart Systems</h3>
                <p className="text-sm text-slate-300">AI, robotics & control integration</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Full-Stack Innovation</h3>
                <p className="text-sm text-slate-300">Hardware + Software + Intelligence</p>
              </div>
            </motion.div>
          </motion.div>
          {/* Apple-style tab system */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Apple's segmented control style */}
            <div className="flex flex-wrap gap-2 mb-8">
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
            </div>

            {/* Apple-style content container */}
            <motion.div
              key={tab}
              className="min-h-[300px] lg:min-h-[350px] p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
