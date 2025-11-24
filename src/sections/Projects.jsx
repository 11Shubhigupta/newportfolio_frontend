import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://newportfolio-backend.vercel.app/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div id="projects" className="px-8 py-20">
      <h2 className="text-4xl font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {projects.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.35)",
            }}
            className="border p-6 bg-gray-900 dark:bg-black rounded-xl transition-all"
          >
            <h3 className="text-2xl font-semibold">{p.title}</h3>

            <p className="mt-2 text-gray-300 dark:text-gray-400">
              {p.description}
            </p>

            <div className="mt-3 text-sm text-blue-400 dark:text-blue-300">
              {p.tech.join(" • ")}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
