"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "50",
  },
  {
    metric: "Certifications",
    value: "5",
  },
  {
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <div className="relative">
      {/* Apple-style refined glassmorphism container */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/15 transition-all duration-500 rounded-3xl py-12 px-8 md:px-16 lg:px-20 shadow-2xl hover:shadow-3xl relative overflow-hidden group">
        {/* Apple's signature subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content grid with Apple spacing */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center group/item relative"
            >
              {/* Apple-style number display */}
              <div className="relative mb-4">
                {/* Prefix positioned elegantly */}
                {achievement.prefix && (
                  <span className="absolute -left-4 md:-left-6 top-0 text-xl md:text-2xl font-light text-primary-400/70">
                    {achievement.prefix}
                  </span>
                )}
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white font-light"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                </h3>

                {/* Postfix positioned elegantly */}
                {achievement.postfix && (
                  <span className="absolute -right-4 md:-right-6 top-0 text-xl md:text-2xl font-light text-primary-400/70">
                    {achievement.postfix}
                  </span>
                )}
              </div>
              
              {/* Apple-style metric label */}
              <p className="text-sm md:text-base font-medium text-slate-300 group-hover/item:text-slate-200 transition-colors duration-300 tracking-wide">
                {achievement.metric}
              </p>
              
              {/* Apple's refined underline indicator */}
              <div className="mt-3 w-8 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent opacity-40 group-hover/item:opacity-80 group-hover/item:w-12 transition-all duration-300" />
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
