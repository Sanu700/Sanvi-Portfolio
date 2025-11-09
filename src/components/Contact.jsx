import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_7zy7vii",    // Your service ID
        "template_fihf859",   // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "iRUf9_JR9gGKxk7Jd"   // Your public key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("❌ Failed to send message. Please try again.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-24 px-6
        bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        transition-colors duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl w-full bg-white/90 dark:bg-gray-800/80 rounded-3xl shadow-2xl p-10 text-center backdrop-blur-sm">
        <h2 className="text-4xl font-extrabold text-black dark:text-white mb-6">
          Contact Me
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-12">
          I'd love to hear from you! Whether it's a project idea, collaboration,
          or just a friendly chat — drop a message below. 💬
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
          <div className="text-left">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="mt-2 w-full p-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
          </div>

          <div className="text-left">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="mt-2 w-full p-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
          </div>

          <div className="text-left">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here"
              rows="5"
              className="mt-2 w-full p-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-14 flex justify-center items-center space-x-10">
          <a
            href="https://github.com/sanu700"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            💻 <span className="font-semibold">GitHub</span>
          </a>

          <a
            href="mailto:sanviudhan@gmail.com"
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            📧 <span className="font-semibold">Email</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
