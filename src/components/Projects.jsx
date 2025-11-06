import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Slash Experiences",
      description:
        "A full-stack platform for event bookings, payments, and collaboration. Built for fast performance and seamless user experience.",
      image: "/slash.jpg",
      detailedDescription: `🏗️ Overview:
Slash Experiences is a full-stack event platform enabling real-time booking, payment integration, and smooth team coordination.

✨ Key Features:
✅ Razorpay integration for secure payments
✅ User authentication & session management
✅ Responsive React interface with modern UI
✅ PostgreSQL + Supabase backend for scalability
✅ Admin dashboards & booking analytics

🛠 Tech Stack:
React, Supabase, PostgreSQL, Node.js, Razorpay API, CSS3

🚀 Future Scope:
Add recommendation system & AI-driven event analytics.`,
    },
    {
      title: "Zerocostwater Automation Platform",
      description:
        "Workflow automation system integrating APIs, n8n, and Zapier for optimized process management.",
      image: "/zerocost.png",
      detailedDescription: `🔧 Key Features:
✅ Automated data pipelines with n8n
✅ Real-time process tracking dashboard
✅ REST API integration with Node.js
✅ Modular backend workflows

🧰 Tech Stack:
React, Node.js, PostgreSQL, n8n, Zapier

🚀 Planned Upgrades:
IoT integration & predictive maintenance analytics.`,
    },
    {
      title: "Jarvis 2.0 – AI Voice Assistant",
      description:
        "An advanced voice assistant integrating Gemini AI, automating PC controls, and managing tasks.",
      image: "/JARVIS.jpg",
      detailedDescription: `🧠 Smart AI:
✅ Gemini AI for intelligent responses
✅ Conversational memory & context handling

💻 System Control:
✅ Open websites, apps, and manage PC volume
✅ Weather, news, to-do management

🎵 Media:
✅ Play music via Spotify & YouTube

🛠 Tech:
Python, Gemini API, SpeechRecognition, SQLite

🚀 Future Upgrades:
Wake-word detection, PDF summarizer, mini-games.`,
    },
    {
      title: "Cinepedia",
      description:
        "A full-stack movie blogging and review platform with Google OAuth and interactive user engagement.",
      image: "/Movie.png",
      detailedDescription: `🎬 Features:
✅ Google OAuth login
✅ Movie rating & reviews
✅ Responsive design across devices
✅ Dynamic content rendering

🛠 Stack:
React, Node.js, PostgreSQL, Google OAuth

📈 Future Plans:
User profiles, comment threads, and personalized recommendations.`,
    },
    {
      title: "Task Dashboard",
      description:
        "A productivity web app designed with gamification elements to enhance user focus and efficiency.",
      image: "/task.webp",
      detailedDescription: `📋 Key Features:
✅ Custom task boards with progress tracking
✅ Gamified streak system
✅ Timers & reminders for better productivity

🧰 Tech:
React, JavaScript, CSS3

🚀 Future:
Sync with Google Calendar & mobile app.`,
    },
    {
      title: "Shree Surgical Hospital Website",
      description:
        "Responsive website designed to improve hospital accessibility and appointment booking convenience.",
      image: "/logo.jpg",
      detailedDescription: `🏥 Highlights:
✅ Google Maps integration
✅ One-click call functionality
✅ Appointment booking (in-progress)
✅ Responsive design with Bootstrap

🛠 Stack:
HTML, CSS, JavaScript, Bootstrap, Node.js

🚀 Future:
Admin dashboard & patient portal.`,
    },
    {
      title: "EVM Web Simulator",
      description:
        "Interactive web-based simulation of an electronic voting machine (EVM) using Web3 concepts.",
      image: "/evm.jpg",
      detailedDescription: `⚡ Features:
✅ Simulated vote casting interface
✅ Real-time result display
✅ Blockchain-inspired design concept

🧰 Stack:
HTML, CSS, JavaScript, Web3 basics

🚀 Future:
Smart contract-based validation.`,
    },
    {
      title: "Android Apps Analysis",
      description:
        "A data analytics project exploring insights from Play Store app data using Python libraries.",
      image: "/data.png",
      detailedDescription: `📊 Key Features:
✅ Data cleaning, visualization & regression
✅ Insights into category-wise ratings & installs
✅ Matplotlib & Seaborn for visual analysis

🧠 Stack:
Python, Pandas, Seaborn, Scikit-learn

🚀 Future:
Dashboard-based visualization with Streamlit.`,
    },
    {
      title: "Simon Game & Drumkit",
      description:
        "Mini JS-based rhythm and memory games demonstrating event handling and sound APIs.",
      image: "/simon.png",
      detailedDescription: `🎮 Features:
✅ Simon Game – color pattern memory challenge
✅ Drumkit – playable music kit via keyboard
✅ Interactive sounds & animations

🧰 Stack:
JavaScript, HTML, CSS`,
    },
    {
      title: "Data Analytics Series",
      description:
        "A set of analytical notebooks exploring LEGO, Nobel Prize, and Google Trends datasets.",
      image: "/analytics.jpg",
      detailedDescription: `📈 Includes:
✅ LEGO dataset analysis – popularity vs price
✅ Nobel Prize data visualization
✅ Google Trends & language usage analytics

🧠 Stack:
Python, Pandas, Seaborn, Matplotlib

🚀 Future:
Convert notebooks to interactive dashboards.`,
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <motion.section
      id="projects"
      className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">My Projects</h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          A collection of my favorite projects — from AI and automation to data analytics and design.
        </p>
      </div>

      {/* Project Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center p-6 transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
              {project.title}
            </h3>
            <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
              {project.description}
            </p>

            <button
              onClick={() => openModal(project)}
              className="mt-6 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="modal fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-lg w-full relative overflow-y-auto max-h-[80vh]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              <X size={24} />
            </button>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
              {selectedProject.title}
            </h3>
            <p className="mt-4 whitespace-pre-line text-lg text-gray-700 dark:text-gray-300">
              {selectedProject.detailedDescription}
            </p>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
