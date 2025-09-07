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
        className="relative px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-200 tracking-wide group"
      >
        <span className="relative z-10">{title}</span>
        {/* Apple-style hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.2 }}
        />
      </Link>
    </motion.div>
  );
};

export default NavLink;
