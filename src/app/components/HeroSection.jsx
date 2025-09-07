"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Apple-style centered layout */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.8
          }}
        >
          {/* Apple-style hero typography */}
          <div className="mb-8">
            <motion.p 
              className="text-slate-400 text-lg md:text-xl font-light tracking-wide mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I&apos;m
            </motion.p>
            
            <h1 className="text-white mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-none tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-300 mb-2">
                Misbah
              </span>
              
              {/* Apple-style animated role */}
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <TypeAnimation
                  sequence={[
                    "Mechanical Engineer",
                    2500,
                    "Product Engineer", 
                    2500,
                    "Design Engineer",
                    2500,
                    "Mechatronics Engineer",
                    2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500"
                />
              </motion.div>
            </h1>
          </div>

          {/* Apple-style subtitle */}
          <motion.p 
            className="text-slate-300 text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Engineering sustainable solutions with precision and purpose.
            <br />
            <span className="text-slate-400 text-base md:text-lg">Crafting the future, one innovation at a time.</span>
          </motion.p>

          {/* Apple-style CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-4 text-base font-medium rounded-full bg-primary-500/80 backdrop-blur-md border border-white/20 hover:bg-primary-500 hover:border-white/30 text-white transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group tracking-wide"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-secondary-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Let&apos;s Connect</span>
                <svg className="relative z-10 ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
