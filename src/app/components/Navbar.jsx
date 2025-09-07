"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-2 md:py-3'
          : 'py-4 md:py-6'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Apple's floating nav container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className={`relative rounded-2xl transition-all duration-500 ${isScrolled
            ? 'bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl'
            : 'bg-black/40 backdrop-blur-md border border-white/5 shadow-lg'
          }`}>
          <div className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5">
            {/* Logo with Apple typography */}
            <Link
              href={"/"}
              className="text-xl md:text-2xl lg:text-3xl text-white font-semibold tracking-tight hover:text-white/90 transition-colors duration-200"
            >
              MISBAH
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <ul className="flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Apple-style Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {!navbarOpen ? (
                    <motion.div
                      key="hamburger"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Bars3Icon className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {navbarOpen && <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
