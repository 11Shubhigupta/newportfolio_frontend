import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import HireMe from "./sections/HireMe";
import ChatBot from "./chatbot/ChatBot";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

export default function App() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* GLOBAL THEME TOGGLE BUTTON */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-6 right-6 z-50 px-4 py-2 rounded-lg shadow-lg
                   bg-gray-800 dark:bg-gray-200
                   text-white dark:text-black"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </motion.button>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <HireMe />
      <ChatBot />
    </div>
  );
}
