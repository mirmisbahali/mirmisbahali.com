"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li>SolidWorks</li>
        <li>Fusion 360</li>
        <li>Siemens NX</li>
        <li>Abaqus CAE</li>
        <li>Embedded C</li>
        <li>C/C++</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>Arduino Microcontrollers</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="pb-2">
          <div className="flex">
            Master of Engineering (Professional), Deakin University, Australia
            <span className="text-right ml-auto">(2023-2025)</span>
          </div>
          <div className="pl-3">
            Specializations:
            <ul className="pl-2">
              <li>Mechanical Engineering Design</li>
              <li>Mechatronics and Control Engineering</li>
            </ul>
          </div>
        </li>
        <li className="">
          <div className="flex">
            Bachelor of Engineering, Osmania University, India
            <span className="text-right ml-auto">(2018-2022)</span>
          </div>
          <div className="pl-3">
            Specializations:
            <ul className="pl-2">
              <li>Mechanical Engineering</li>
            </ul>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li className="flex justify-between">
          <span>Certified SoliWorks Professional (CSWP)</span>
          <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-6CA572W9HP" target="_blank" className="text-primary-500">C-6CA572W9HP</a>
        </li>
        <li className="flex justify-between">
          <span>CSWPA Advanced Sheet Metal (CSWPA-SM)</span>
          <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-5DF7S3VQTJ" target="_blank" className="text-primary-500">C-5DF7S3VQTJ</a>
        </li>
        <li className="flex justify-between">
          <span>CSWP Advanced Weldments (CSWPA-WD)</span>
          <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-ZMERB2FJUX" target="_blank" className="text-primary-500">C-ZMERB2FJUX</a>
        </li>
        <li className="flex justify-between">
          <span>CSWP Advanced Drawing Tools (CSWPA-DT)</span>
          <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-VBDYGQKHU6" target="_blank" className="text-primary-500">C-VBDYGQKHU6</a>
        </li>
        <li className="flex justify-between">
          <span>Certified SoliWorks Associate (CSWA)</span>
          <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-H7WVD3Z82P" target="_blank" className="text-primary-500">C-H7WVD3Z82P</a>
        </li>
      </ul>

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
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Mechanical Engineer with a passion for engineering and sustainability. My expertise spans CAD, CAM, and CAE, and I am a Certified SolidWorks Professional (CSWP) in Mechanical Design. I have a strong foundation in mechanical engineering principles and am always eager to learn new tools and technologies. My focus is on creating innovative, efficient, and sustainable engineering solutions. I thrive in collaborative environments and am excited to work with others to drive impactful projects forward.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 lg:h-[200px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
