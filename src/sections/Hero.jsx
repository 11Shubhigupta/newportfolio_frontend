import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">

      {/* NAME */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold 
                    text-gray-700 dark:text-black-300"
      >
        Hi, I’m Shubhi
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xl 
                   text-gray-700 dark:text-black-300"
      >
        Full-Stack Developer • UI/UX Enthusiast
      </motion.p>

      {/* BUTTON */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg 
                   text-white shadow-lg"
      >
        See My Work
      </motion.a>
    </section>
  );
}
