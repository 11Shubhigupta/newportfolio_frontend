import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    axios
      .get("https://newportfolio-backend.vercel.app/api/certifications")
      .then((res) => setCerts(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div id="certifications" className="px-8 py-20">
      <h2 className="text-4xl font-bold">Certifications</h2>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {certs.map((c, index) => (
          <motion.div
            key={c.id}
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
            <h3 className="text-xl font-semibold">{c.name}</h3>

            <p className="mt-2 text-gray-300 dark:text-gray-400">
              {c.issuer}
            </p>

            <p className="mt-2 text-sm text-blue-400 dark:text-blue-300">
              {c.year}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
