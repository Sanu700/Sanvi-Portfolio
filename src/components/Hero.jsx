import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import avatar from "/avatar.jpg";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-20
        bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100
        dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background accent circles */}
      <div className="absolute w-64 h-64 bg-pink-300/30 dark:bg-pink-500/10 rounded-full blur-3xl top-10 left-[-100px]" />
      <div className="absolute w-72 h-72 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      {/* Left side - Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 text-center lg:text-left space-y-6 relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Hi, I'm{" "}
          <span
            className="font-pacifico text-transparent bg-clip-text
              bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400
              dark:from-purple-400 dark:via-pink-400 dark:to-blue-400
              animate-gradient"
          >
            Sanvi Udhan
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium">
          Full Stack Web Developer • Canva Designer • Python Developer • Memer 🚀
        </p>

        <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
          I build powerful websites that blend creativity, performance, and scalability — 
          bringing ideas to life through clean design and strong logic.
        </p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
          <a href="#projects" className="inline-flex">
            <Button className="flex items-center text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 shadow-md hover:shadow-lg transition-all">
              View Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#contact" className="inline-flex">
            <Button
              variant="outline"
              className="flex items-center border-2 border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </a>
        </div>
      </motion.div>

      {/* Right side - Avatar Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative"
        >
          {/* Gradient ring around avatar */}
          <div className="absolute inset-0 rounded-xl p-[3px] bg-gradient-to-r from-pink-400 to-purple-500 dark:from-purple-500 dark:to-pink-500 blur-sm" />
          <img
            src={avatar}
            alt="Sanvi Udhan Avatar"
            className="relative rounded-xl border-4 border-white dark:border-gray-700 shadow-2xl max-w-md w-full object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
