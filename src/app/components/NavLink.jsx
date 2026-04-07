import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={href}
        className="relative px-4 py-2.5 text-sm font-medium text-[#6e6e73] dark:text-slate-300 hover:text-[#1d1d1f] dark:hover:text-white rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 tracking-wide group"
      >
        <span className="relative z-10">{title}</span>
        {/* Apple-style hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/[0.03] to-black/[0.06] dark:from-white/5 dark:to-white/10 rounded-xl opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.2 }}
        />
      </Link>
    </motion.div>
  );
};

export default NavLink;
