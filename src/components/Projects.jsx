import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

// Import your images relative to this file's location
import JARVISImage from '/JARVIS.jpg';
import HospitalLogo from '/logo.jpg';
import MovieImage from '/Movie.png';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI-Based Voice Assistant",
      description: "JARVIS 1.0 is a smart, interactive personal assistant built to simplify your life. From answering your questions and managing tasks to playing music and controlling your PC, JARVIS is your go-to tech companion.",
      image: JARVISImage,
      detailedDescription: `🧠 Smart AI Features
✅ Google Search with Gemini AI – AI-generated answers
✅ Auto-Summarization – Short summaries under 50 words
✅ Conversational Memory – Remembers last 5 interactions

💬 Conversational Abilities
✅ Personalized Greetings & Friendly Goodbyes
✅ Fun Casual Talks, Jokes & Follow-up Q&A

🎵 Entertainment
✅ Play songs on YouTube & Spotify
✅ Control Spotify with voice

🌤️ Info Retrieval
✅ Weather, News, Wikipedia, Time/Date

💻 System Control
✅ Open websites, shutdown, restart, control volume

📋 Personal Assistant
✅ Manage To-Do Lists

🛠 Future Upgrades: Wake Word, PDF Summary, Mini-Games, Multi-Language Support!`,
    },
    {
      title: "Multispeciality Hospital Website",
      description: "A modern, responsive website for Shree Surgical Hospital that integrates essential features like Google Maps, one-click phone dialing, and an appointment booking system (in progress). Aiming to improve patient convenience and hospital accessibility.",
      image: HospitalLogo,
      detailedDescription: `🏥 Key Features:
✅ 📍 Google Maps integration – Find the hospital’s exact location with a click!
✅ 📞 Direct Phone Link – One tap to call and get assistance instantly.
✅ 📅 Appointment Booking – Conveniently book your next appointment (still in progress)!
✅ 📱 Mobile-Friendly – Fully responsive design that works perfectly on all devices.
✅ 🖥️ Clean and Professional UI – Built using HTML, CSS, JavaScript, Bootstrap, and Node.js.

🛠️ Technologies Used:
- Frontend: HTML, CSS, JavaScript, Bootstrap
- Backend: Node.js

📈 Planned Future Additions:
- 🔒 Complete Appointment Booking System
- 👩‍⚕️ Patient Login & Signup Portal
- 🏥 Admin Dashboard for Hospital Staff to manage patient appointments`,
    },
    {
      title: "CINEPEDIA: A Movie Blogging Website",
      description: "A dynamic movie blogging platform where users can log in via Google OAuth, rate movies, share reviews, and interact with fellow movie lovers. It provides an interactive and engaging space for all movie enthusiasts.",
      image: MovieImage,
      detailedDescription: `🎬 Key Features:
✅ 🏷️ Google OAuth Integration – Easy login with Google to access all features.
✅ ⭐️ Movie Rating – Users can rate movies on a scale and share their thoughts.
✅ 💬 Reviews – Write and read movie reviews shared by others.
✅ 🎥 Movie Search – Explore the latest movies and their details.
✅ 📱 Mobile-Friendly – A responsive design ensuring a seamless experience across devices.

🛠️ Technologies Used:
- Frontend: HTML, CSS, JavaScript, React
- Backend: Node.js
- Authentication: Google OAuth
- Database: PostgreSQL

📈 Planned Future Additions:
- 🔒 User Profile Customization
- 📝 Comment and Reply System for Reviews
- 🎥 Movie Watchlists & Personalized Recommendations`,
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
          Here are some of the projects I have worked on. Click to explore more!
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center p-6 transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            {/* Circular Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">{project.title}</h3>
            <p className="mt-4 text-center text-gray-700 dark:text-gray-300">{project.description}</p>

            {/* Learn More */}
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
            {/* Cross Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
              aria-label="Close Modal"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">{selectedProject.title}</h3>
            <p className="mt-4 whitespace-pre-line text-lg text-gray-700 dark:text-gray-300">{selectedProject.detailedDescription}</p>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
