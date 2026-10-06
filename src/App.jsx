import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import FeaturedHighlights from "./components/FeaturedHighlights";
import EngineeringPhilosophy from "./components/EngineeringPhilosophy";
import LookingFor from "./components/LookingFor";
import ProblemSolving from "./components/ProblemSolving";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("portfolio_theme");
    if (saved !== null) {
      return saved === "dark";
    }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio_theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className="min-h-screen bg-page text-[#1e1b2e] dark:text-slate-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <CurrentlyBuilding />
      <FeaturedHighlights />
      <About />
      <Skills />
      <ProblemSolving />
      <Projects />
      <EngineeringPhilosophy />
      <LookingFor />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
