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
    <div className="px-8 py-20 bg-gray-900 dark:bg-black">
      <h2 className="text-4xl font-bold">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {skills.map((s, index) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.08 }}
            className="border p-4 rounded-xl text-center bg-gray-800 dark:bg-gray-900 cursor-pointer shadow-md"
          >
            {s}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
