"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

export default function ProjectPageContent({ projectData }) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#121212] dark:to-[#1a1a1a] relative overflow-x-hidden">
      {/* Navbar with theme toggle */}
      <Navbar />

      {/* Apple-style main container */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-20">

        {/* Back button — inline, aligned with content */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 rounded-2xl px-5 py-2.5 text-[#6e6e73] dark:text-slate-300 hover:text-[#1d1d1f] dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="text-sm font-medium tracking-wide">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Apple-style project header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
        >
          {/* Apple-style massive title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-none mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d1d1f] via-[#3d3d3d] to-[#6e6e73] dark:from-white dark:via-slate-100 dark:to-slate-300">
              {projectData.title}
            </span>
          </h1>

          {/* Apple-style refined description */}
          <motion.p
            className="text-xl md:text-2xl text-[#6e6e73] dark:text-slate-300 font-light leading-relaxed max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.3 }}
          >
            {projectData.description}
          </motion.p>

          {/* Apple-style project tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.4 }}
          >
            {projectData.tag.filter(tag => tag !== 'All').map((tag, index) => (
              <motion.span
                key={tag}
                className="px-6 py-3 bg-black/[0.05] dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-[#1d1d1f] dark:text-white text-sm font-medium rounded-full hover:bg-black/[0.08] dark:hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Apple-style project image showcase */}
          {projectData.image && (
            <motion.div
              className="relative mb-20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
            >
              <div className="relative group">
                <div className="bg-white/60 dark:bg-black/20 backdrop-blur-xl border border-black/8 dark:border-white/10 rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-3xl transition-all duration-500 hover:border-black/12 dark:hover:border-white/15">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative h-64 md:h-96 lg:h-[32rem] rounded-2xl overflow-hidden bg-black/[0.04] dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50">
                    <Image
                      src={projectData.image}
                      alt={projectData.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Apple-style action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.6 }}
          >
            {projectData.previewUrl && projectData.previewUrl !== '/' && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={projectData.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center bg-primary-500/80 backdrop-blur-xl border border-white/20 hover:border-white/30 text-white font-medium py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-primary-500 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-400/30 to-secondary-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 mr-2">View Live Project</span>
                  <svg className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </motion.div>
            )}
            {projectData.gitUrl && projectData.gitUrl !== '/' && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={projectData.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center bg-black/[0.05] dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-[#6e6e73] dark:text-slate-300 hover:text-[#1d1d1f] dark:hover:text-white font-medium py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-black/[0.08] dark:hover:bg-white/10"
                >
                  <span className="mr-2">View Code</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Apple-style content section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.7 }}
        >
          <div className="bg-white/60 dark:bg-black/20 backdrop-blur-xl border border-black/8 dark:border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-3xl transition-all duration-500 hover:border-black/12 dark:hover:border-white/15 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="relative z-10 prose dark:prose-invert prose-lg max-w-none">
              <div
                className="leading-relaxed
                  [&>h1]:text-4xl [&>h1]:md:text-5xl [&>h1]:font-light [&>h1]:text-[#1d1d1f] dark:[&>h1]:text-white [&>h1]:tracking-tight [&>h1]:mb-8
                  [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-light [&>h2]:text-[#1d1d1f] dark:[&>h2]:text-white [&>h2]:tracking-tight [&>h2]:mb-6
                  [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-medium [&>h3]:text-[#3d3d3d] dark:[&>h3]:text-slate-100 [&>h3]:mb-4
                  [&>p]:text-lg [&>p]:md:text-xl [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-[#6e6e73] dark:[&>p]:text-slate-200
                  [&>ul]:space-y-3 [&>li]:text-lg [&>li]:md:text-xl [&>li]:text-[#6e6e73] dark:[&>li]:text-slate-200
                  [&>blockquote]:border-l-4 [&>blockquote]:border-primary-500/50 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-[#6e6e73] dark:[&>blockquote]:text-slate-300
                  [&>code]:bg-black/[0.06] dark:[&>code]:bg-white/10 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-primary-600 dark:[&>code]:text-primary-300
                  [&>pre]:bg-black/[0.06] dark:[&>pre]:bg-black/40 [&>pre]:border [&>pre]:border-black/10 dark:[&>pre]:border-white/10 [&>pre]:rounded-2xl [&>pre]:p-6 [&>pre]:overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
