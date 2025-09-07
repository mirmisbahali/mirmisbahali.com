"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  // Magnetic hover effect
  const handleMouseMove = (e) => {
    if (!isHovering) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15; // Reduce movement intensity
    const deltaY = (e.clientY - centerY) * 0.15;
    setMousePosition({ x: deltaX, y: deltaY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/myzgjvjb", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        console.log("Message sent.");
        setIsSubmitting(false);
        setEmailSubmitted(true);
        setShowParticles(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setEmailSubmitted(false);
          setShowParticles(false);
          e.target.reset();
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative">
      {/* Apple-style subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 rounded-3xl" />
      
      <div className="relative z-10 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-2">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Ready to collaborate on your next project? I&apos;d love to hear from you.
            <br />
            <span className="text-slate-400">Drop me a message and let&apos;s create something amazing together.</span>
          </p>
        </motion.div>
      </div>

      {/* Apple-style social links */}
      <motion.div 
        className="flex justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Link href="https://github.com/mirmisbahali">
          <motion.div 
            className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={GithubIcon} alt="Github" className="w-6 h-6" />
          </motion.div>
        </Link>
        <Link href="https://www.linkedin.com/in/mirmisbahali/">
          <motion.div 
            className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Apple-style form container */}
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Apple-style form fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2 tracking-wide"
                >
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-4 bg-white/5 backdrop-blur-md border border-white/10 focus:border-white/20 rounded-2xl text-white placeholder-slate-400 text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-300 mb-2 tracking-wide"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-4 bg-white/5 backdrop-blur-md border border-white/10 focus:border-white/20 rounded-2xl text-white placeholder-slate-400 text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="Project collaboration"
                />
              </div>
            </div>
            
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-2 tracking-wide"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                className="w-full px-4 py-4 bg-white/5 backdrop-blur-md border border-white/10 focus:border-white/20 rounded-2xl text-white placeholder-slate-400 text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-none"
                placeholder="Tell me about your project ideas, challenges, or just say hello..."
              />
            </div>

            {/* Apple-style submit button with enhanced micro interactions */}
            <motion.div
              className="relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.8
              }}
            >
              {/* Enhanced pulsing glow effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500 rounded-2xl blur opacity-30"
                animate={{
                  opacity: isHovering ? [0.3, 0.6, 0.3] : 0.2,
                  scale: isHovering ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: isHovering ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />
              
              <button
                type="submit"
                disabled={emailSubmitted || isSubmitting}
                className={`w-full py-4 px-8 text-base font-medium rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden group ${
                  emailSubmitted
                    ? 'bg-green-500/80 border-green-400/30 cursor-not-allowed'
                    : isSubmitting
                    ? 'bg-primary-400/70 border-white/15 cursor-not-allowed'
                    : 'bg-primary-500/80 hover:bg-primary-500 border-white/20 hover:border-white/30'
                } backdrop-blur-md border text-white tracking-wide`}
              >
                {/* Dynamic gradient overlay */}
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-primary-400/30 via-secondary-500/40 to-primary-400/30"
                  animate={{
                    opacity: isHovering ? [0, 1, 0] : 0,
                    x: isHovering ? [-100, 100] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isHovering ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                />
                
                <span className="relative z-10 flex items-center justify-center">
                  {emailSubmitted ? (
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        duration: 0.6
                      }}
                      className="flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent Successfully
                    </motion.div>
                  ) : isSubmitting ? (
                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </motion.svg>
                      Sending...
                    </motion.div>
                  ) : (
                    <motion.div
                      className="flex items-center"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      <span className="mr-2">Send Message</span>
                      <motion.div
                        animate={{
                          x: isHovering ? [0, 4, 0] : 0,
                          rotateY: isHovering ? [0, 180, 0] : 0,
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: isHovering ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: isHovering ? 1 : 0.7 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  )}
                </span>

                {/* Particle celebration effect */}
                {showParticles && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary-400 rounded-full"
                        initial={{
                          x: "50%",
                          y: "50%",
                          scale: 0,
                          opacity: 1,
                        }}
                        animate={{
                          x: `${50 + (Math.random() - 0.5) * 200}%`,
                          y: `${50 + (Math.random() - 0.5) * 200}%`,
                          scale: [0, 1, 0],
                          opacity: [1, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                )}
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
