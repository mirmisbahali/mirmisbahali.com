"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full bg-black/[0.06] dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 flex items-center justify-center text-[#1d1d1f] dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <MoonIcon className="w-4 h-4" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -30, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <SunIcon className="w-4 h-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
