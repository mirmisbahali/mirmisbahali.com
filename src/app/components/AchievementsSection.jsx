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
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between shadow-2xl hover:shadow-primary-500/10">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 group relative"
            >
              {/* Prefix positioned outside */}
              {achievement.prefix && (
                <span className="absolute -left-6 top-2 text-2xl lg:text-3xl font-light text-primary-400/70">
                  {achievement.prefix}
                </span>
              )}
              
              {/* Main number container */}
              <div className="flex flex-col items-center">
                <h2 className="text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight text-center">
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
                </h2>
                
                <p className="text-base font-medium text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide mb-4 text-center">
                  {achievement.metric}
                </p>
              </div>

              {/* Postfix positioned outside */}
              {achievement.postfix && (
                <span className="absolute -right-6 top-2 text-2xl lg:text-3xl font-light text-primary-400/70">
                  {achievement.postfix}
                </span>
              )}
              
              {/* Glowing underline */}
              <div className="mx-auto w-12 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
