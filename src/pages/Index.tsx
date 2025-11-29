
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
      
      <footer className="py-10 bg-black/60 backdrop-blur-sm mt-16">
  <div className="container mx-auto px-4 md:px-6 text-center space-y-6">

    {/* Gradient Title */}
   <p className="text-2xl font-semibold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 bg-clip-text text-transparent">
      Creating Experiences Beyond Reality
    </p>

    {/* Navigation Links */}
    <div className="flex justify-center space-x-6 text-sm font-light text-muted-foreground">
      <a href="#projects" className="hover:text-white transition">Projects</a>
      <a href="#skills" className="hover:text-white transition">Skills</a>
      <a href="#about" className="hover:text-white transition">About</a>
      <a href="#contact" className="hover:text-white transition">Contact</a>
    </div>

    {/* Divider */}
    <div className="w-20 mx-auto border-t border-gray-600"></div>

    {/* Sub Quote */}
    <p className="text-xs italic opacity-70">
      “Imagine • Build • Evolve”
    </p>

<p className="text-2xl font-semibold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 bg-clip-text text-transparent">
  © {new Date().getFullYear()} Bharath Serman R. 
</p>

  </div>
</footer>

      <motion.button
       className={`fixed right-6 bottom-6 p-3 rounded-full bg-orange-500 text-white z-40 transition-opacity ${
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
