import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "HTML",
  "CSS",
  "Javascript",
  "Python",
  "C++"
];

export default function Skills() {
  return (
    <div className="px-8 py-20 bg-white dark:bg-black">
      {/* Heading visible in both modes */}
      <h2 className="text-4xl font-bold text-black dark:text-white">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {skills.map((s, index) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.08 }}

            /* Both modes usable */
            className="
              border 
              p-4 
              rounded-xl 
              text-center 
              bg-gray-100 dark:bg-gray-900 
              text-black dark:text-white
              cursor-pointer 
              shadow-md
            "
          >
            {s}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
