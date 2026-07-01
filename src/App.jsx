import React from "react";
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

function App() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Navbar />
      <Hero />
      <CurrentlyBuilding />
      <FeaturedHighlights />
      <About />
      <Skills />
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
