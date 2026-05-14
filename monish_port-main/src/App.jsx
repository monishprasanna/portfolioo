import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MarqueeBanner from './components/MarqueeBanner.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import JourneyTimeline from './components/JourneyTimeline.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative selection:bg-primary selection:text-primary-foreground">
      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <MarqueeBanner />
          <About />
          <Projects />
          <Skills />
          <JourneyTimeline />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
