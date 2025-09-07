"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
          <span className="text-slate-300 font-medium tracking-wide">SolidWorks</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
          <span className="text-slate-300 font-medium tracking-wide">Fusion 360</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
          <span className="text-slate-300 font-medium tracking-wide">Siemens NX</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
          <span className="text-slate-300 font-medium tracking-wide">Abaqus CAE</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
          <span className="text-slate-300 font-medium tracking-wide">Embedded C</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
          <span className="text-slate-300 font-medium tracking-wide">C/C++</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
          <span className="text-slate-300 font-medium tracking-wide">Python</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
          <span className="text-slate-300 font-medium tracking-wide">Javascript</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
          <span className="text-slate-300 font-medium tracking-wide">Arduino Microcontrollers</span>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h3 className="text-xl font-semibold text-white tracking-tight">Master of Engineering (Professional)</h3>
            <span className="text-primary-400 font-medium text-sm tracking-wide">(2023-2025)</span>
          </div>
          <p className="text-slate-400 font-medium">Deakin University, Australia</p>
          <div className="space-y-2">
            <p className="text-slate-300 font-medium text-sm tracking-wide">Specializations:</p>
            <div className="pl-4 space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300 tracking-wide">Mechanical Engineering Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300 tracking-wide">Mechatronics and Control Engineering</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h3 className="text-xl font-semibold text-white tracking-tight">Bachelor of Engineering</h3>
            <span className="text-primary-400 font-medium text-sm tracking-wide">(2018-2022)</span>
          </div>
          <p className="text-slate-400 font-medium">Osmania University, India</p>
          <div className="space-y-2">
            <p className="text-slate-300 font-medium text-sm tracking-wide">Specializations:</p>
            <div className="pl-4 space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300 tracking-wide">Mechanical Engineering</span>
              </div>
            </div>
          </div>
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
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} />
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight leading-tight">About Me</h2>
          <p className="text-lg lg:text-xl text-slate-300 leading-relaxed tracking-normal mb-2">
            I am a Mechanical Engineer with a passion for engineering and sustainability. My expertise spans CAD, CAM, and CAE, and I am a Certified SolidWorks Professional (CSWP) in Mechanical Design.
          </p>
          <p className="text-lg lg:text-xl text-slate-300 leading-relaxed tracking-normal">
            I have a strong foundation in mechanical engineering principles and am always eager to learn new tools and technologies. My focus is on creating innovative, efficient, and sustainable engineering solutions. I thrive in collaborative environments and am excited to work with others to drive impactful projects forward.
          </p>
          <div className="flex flex-row justify-start mt-12 gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
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
          </div>
          <div className="mt-12 min-h-[300px] lg:min-h-[350px] transition-all duration-300">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
