
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import ThreeDBackground from '../components/ThreeDBackground';
import CursorEffect from '../components/CursorEffect';
import { ArrowUp } from 'lucide-react';

const Index: React.FC = () => {
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showButton = scrollY > 500;
      setShowScrollToTop(showButton);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-tech-dark overflow-x-hidden">
      <ThreeDBackground />
      <CursorEffect />
      
      <Navbar />
      
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      
      <footer className="py-8 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Bharath Serman R. All rights reserved.
          </p>
        </div>
      </footer>
      <motion.button
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-tech-gradient text-white z-40 transition-opacity ${
          showScrollToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
        initial={{ scale: 0 }}
        animate={{ scale: showScrollToTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </div>
  );
};

export default Index;
