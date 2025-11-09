import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Slash Experiences",
      description: `A <b>full-stack platform</b> for event bookings, payments, and collaboration. Built for <b>fast performance</b> and seamless user experience.`,
      image: "/slash.jpg",
      detailedDescription: `🏗️ <b>Overview:</b><br />
Slash Experiences is a <b>full-stack event platform</b> enabling real-time booking, payment integration, and smooth team coordination.
<br /><br />

✨ <b>Key Features:</b><br />
<ul style="list-style:none;padding:0;margin:10px 0 25px 0;text-align:left;display:inline-block;">
  <li style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
    ✅ <span><b>Razorpay integration</b> for secure payments</span>
  </li>
  <li style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
    ✅ <span><b>User authentication & session management</b></span>
  </li>
  <li style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
    ✅ <span><b>Responsive React interface</b> with modern UI</span>
  </li>
  <li style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
    ✅ <span><b>PostgreSQL + Supabase backend</b> for scalability</span>
  </li>
  <li style="display:flex;align-items:center;gap:8px;">
    ✅ <span><b>Admin dashboards & booking analytics</b></span>
  </li>
</ul>

<br />

🧰 <b>Tech Stack:</b><br />
React, Supabase, PostgreSQL, Node.js, Razorpay API, CSS3

<br /><br />

🚀 <b>Future Scope:</b><br />
Add recommendation system & AI-driven event analytics.
`,
      liveLink: "https://slashexperiences.in/",
      githubLink: "https://github.com/Sanu700/Slash",
    },
    {
      title: "Zerocostwater",
      description: `Workflow <b>automation system</b> integrating APIs, <b>n8n</b>, and Zapier for optimized process management.`,
      image: "/zerocost.png",
      detailedDescription: `🔧 <b>Key Features:</b><br/>
✅ Automated data pipelines with <b>n8n</b><br/>
✅ Real-time process tracking dashboard<br/>
✅ REST API integration with <b>Node.js</b><br/>
✅ Modular backend workflows<br/><br/>

🧰 <b>Tech Stack:</b> React, Node.js, PostgreSQL, n8n, Zapier<br/><br/>

🚀 <b>Planned Upgrades:</b> IoT integration & predictive maintenance analytics.`,
      liveLink: "https://zerocost-water.lovable.app/",
    },
    {
      title: "Jarvis 1.0 – AI Voice Assistant",
      description: `An advanced <b>AI voice assistant</b> integrating <b>Gemini AI</b>, automating PC controls, and managing tasks.`,
      image: "/JARVIS.jpg",
      detailedDescription: `🧠 <b>Smart AI:</b><br/>
✅ <b>Gemini AI</b> for intelligent responses<br/>
✅ Conversational memory & context handling<br/><br/>

💻 <b>System Control:</b><br/>
✅ Open websites, apps, and manage PC volume<br/>
✅ Weather, news, to-do management<br/><br/>

🎵 <b>Media:</b><br/>
✅ Play music via <b>Spotify & YouTube</b><br/><br/>

🛠 <b>Tech:</b> Python, Gemini API, SpeechRecognition, SQLite<br/><br/>

🚀 <b>Future Upgrades:</b> Wake-word detection, PDF summarizer, mini-games.`,
      githubLink: "https://github.com/Sanu700/JARVIS-1.0",
    },
    {
      title: "Cinepedia",
      description: `A <b>movie blogging</b> and review platform with <b>Google OAuth</b> and interactive user engagement.`,
      image: "/Movie.png",
      detailedDescription: `🎬 <b>Features:</b><br/>
✅ <b>Google OAuth</b> login<br/>
✅ Movie rating & reviews<br/>
✅ Responsive design across devices<br/>
✅ Dynamic content rendering<br/><br/>

🛠 <b>Stack:</b> React, Node.js, PostgreSQL, Google OAuth<br/><br/>

📈 <b>Future Plans:</b> User profiles, comment threads, and personalized recommendations.`,
      liveLink: "https://movie-reviews-blogging-website.vercel.app/",
      githubLink: "https://github.com/Sanu700/Movie-Reviews-Blogging-Website",
    },
    {
      title: "Task Dashboard",
      description: `A <b>productivity web app</b> with <b>gamification elements</b> to enhance user focus and efficiency.`,
      image: "/task.webp",
      detailedDescription: `📋 <b>Key Features:</b><br/>
✅ Custom task boards with progress tracking<br/>
✅ Gamified streak system<br/>
✅ Timers & reminders for better productivity<br/><br/>

🧰 <b>Tech:</b> React, JavaScript, CSS3<br/><br/>

🚀 <b>Future:</b> Sync with Google Calendar & mobile app.`,
      liveLink: "https://task-dash.netlify.app/",
      githubLink: "https://github.com/Sanu700/task-dashboard",
    },
    {
      title: "Shree Surgical Hospital Website",
      description: `A <b>responsive hospital website</b> improving accessibility and <b>appointment booking</b> convenience.`,
      image: "/logo.jpg",
      detailedDescription: `🏥 <b>Highlights:</b><br/>
✅ Google Maps integration<br/>
✅ One-click call functionality<br/>
✅ Appointment booking (in-progress)<br/>
✅ Responsive design with Bootstrap<br/><br/>

🛠 <b>Stack:</b> HTML, CSS, JavaScript, Bootstrap, Node.js<br/><br/>

🚀 <b>Future:</b> Admin dashboard & patient portal.`,
      liveLink: "https://shreesurgicalhospital.vercel.app/",
      githubLink: "https://github.com/Sanu700/Shree-Surgical-Hospital",
    },
    {
      title: "EVM Web Simulator",
      description: `Interactive <b>web-based simulation</b> of an <b>electronic voting machine (EVM)</b> using Web3 concepts.`,
      image: "/evm.jpg",
      detailedDescription: `⚡ <b>Features:</b><br/>
✅ Simulated vote casting interface<br/>
✅ Real-time result display<br/>
✅ Blockchain-inspired design concept<br/><br/>

🧰 <b>Stack:</b> HTML, CSS, JavaScript, Web3 basics<br/><br/>

🚀 <b>Future:</b> Smart contract-based validation.`,
      liveLink: "https://hikmatdada1.vercel.app/",
      githubLink: "https://github.com/Sanu700/EVM",
    },
    {
      title: "Android Apps Analysis",
      description: `A <b>data analytics project</b> exploring insights from Play Store app data using Python libraries.`,
      image: "/data.png",
      detailedDescription: `📊 <b>Key Features:</b><br/>
✅ Data cleaning, visualization & regression<br/>
✅ Insights into category-wise ratings & installs<br/>
✅ Matplotlib & Seaborn for visual analysis<br/><br/>

🧠 <b>Stack:</b> Python, Pandas, Seaborn, Scikit-learn<br/><br/>

🚀 <b>Future:</b> Dashboard-based visualization with Streamlit.`,
      githubLink: "https://github.com/Sanu700/Google-Play-Store-App-Analytics",
    },
    {
      title: "Simon Game & Drumkit",
      description: `<b>Mini JS-based rhythm and memory games</b> demonstrating <b>event handling</b> and sound APIs.`,
      image: "/simon.png",
      detailedDescription: `🎮 <b>Features:</b><br/>
✅ Simon Game – color pattern memory challenge<br/>
✅ Drumkit – playable music kit via keyboard<br/>
✅ Interactive sounds & animations<br/><br/>

🧰 <b>Stack:</b> JavaScript, HTML, CSS`,
      liveLink: "https://simonchallenge.vercel.app/",
      githubLink: "https://github.com/Sanu700/Simon-Game",
    },
    {
      title: "Data Analytics Series",
      description: `A set of <b>analytical notebooks</b> exploring LEGO, Nobel Prize, and Google Trends datasets.`,
      image: "/analytics.jpg",
      detailedDescription: `📈 <b>Includes:</b><br/>
✅ LEGO dataset analysis – popularity vs price<br/>
✅ Nobel Prize data visualization<br/>
✅ Google Trends & language usage analytics<br/><br/>

🧠 <b>Stack:</b> Python, Pandas, Seaborn, Matplotlib<br/><br/>

🚀 <b>Future:</b> Convert notebooks to interactive dashboards.`,
      githubLink: "https://github.com/Sanu700/Data-Analytics",
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
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white flex items-center justify-center gap-3 mt-4 mb-6 px-4">
  My Projects
  <span className="text-black dark:text-gray-200 text-5xl">💼</span>
</h2>


        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of my favorite projects — from{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            AI & automation
          </span>{" "}
          to{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-300">
            data analytics
          </span>{" "}
          and design.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => openModal(project)}
            className="relative group rounded-3xl p-6 backdrop-blur-lg bg-white/70 dark:bg-gray-800/60 border border-white/40 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all cursor-pointer flex flex-col items-center"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-6 flex items-center justify-center border-2 border-purple-300 dark:border-purple-500 shadow-inner group-hover:scale-105 transition-transform">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
              {project.title}
            </h3>

            {/* ✅ bold support in short desc */}
            <p
              className="text-center text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

     <div className="flex gap-4 mt-5">
  {project.liveLink && (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
      onClick={(e) => e.stopPropagation()}
    >
      🌐 Live
    </a>
  )}
  {project.githubLink && (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
      onClick={(e) => e.stopPropagation()}
    >
      💻 Code
    </a>
  )}
</div>



            <button
              className="mt-5 px-5 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                openModal(project);
              }}
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center bg-black/60 z-50 p-4 overflow-auto"
          >
        <motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.9, opacity: 0 }}
  transition={{ duration: 0.3 }}
  className="relative bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-3xl max-w-3xl w-[90%] sm:w-full p-6 sm:p-8 shadow-2xl text-center overflow-y-auto max-h-[90vh]"
>
  <button
    onClick={closeModal}
    className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
  >
    <X size={26} />
  </button>

  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4">
    {selectedProject.title}
  </h3>

  <div
    className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto px-2 sm:px-0"
    dangerouslySetInnerHTML={{
      __html: selectedProject.detailedDescription,
    }}
  />

  <div className="mt-8 flex justify-center gap-4 flex-wrap">
    {selectedProject.liveLink && (
      <a
        href={selectedProject.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded-full font-medium hover:scale-105 transition-transform"
      >
        🌐 Live Demo
      </a>
    )}
    {selectedProject.githubLink && (
      <a
        href={selectedProject.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-indigo-400 to-blue-500 text-white rounded-full font-medium hover:scale-105 transition-transform"
      >
        💻 GitHub
      </a>
    )}
  </div>
</motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
