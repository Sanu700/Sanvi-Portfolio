import { motion } from "framer-motion";
import { Button } from "./ui/buttons";
import { ArrowRight, Mail } from "lucide-react";
import avatar from "../assets/avatar.jpg";

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen
        bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100
        dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left side - Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 text-center lg:text-left space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Hi, I'm{" "}
          <span
            className="
              font-pacifico text-transparent bg-clip-text
              bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400
              dark:from-purple-400 dark:via-pink-400 dark:to-blue-400
              animate-gradient
            "
          >
            Sanvi Udhan
          </span>
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          Full Stack Web Developer • Canva-Designer • Python Developer • Memer 🚀
        </p>

        <p className="text-md text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
          I build powerful websites with creativity, clean design, and scalable code.
        </p>

        <div className="flex gap-4 justify-center lg:justify-start">
          <a href="#projects">
            <Button className="text-white bg-blue-600 hover:bg-blue-700">
              View Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              className="text-gray-700 dark:text-gray-300 border-gray-400 dark:border-gray-600"
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
        className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center"
      >
        <motion.img
          src={avatar}
          alt="Sanvi Udhan Avatar"
          className="rounded-xl border-4 border-gray-300 dark:border-gray-600 shadow-lg max-w-md w-full object-cover"
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>
    </motion.section>
  );
}
