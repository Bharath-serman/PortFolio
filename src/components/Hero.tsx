
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!textRef.current) return;
    
    const roles = ['VR/AR Developer', 'CS Undergraduate', 'Unity Developer', 'UI Designer','AI Enthusiast'];
    let currentRole = 0;
    let currentText = '';
    let isDeleting = false;
    let typeSpeed = 100;
    
    const type = () => {
      const role = roles[currentRole];
      
      if (isDeleting) {
        currentText = role.substring(0, currentText.length - 1);
        typeSpeed = 50;
      } else {
        currentText = role.substring(0, currentText.length + 1);
        typeSpeed = 120;
      }
      
      if (textRef.current) {
        textRef.current.textContent = currentText;
      }
      
      if (!isDeleting && currentText === role) {
        typeSpeed = 1500; 
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentRole = (currentRole + 1) % roles.length;
        typeSpeed = 500; 
      }
      
      setTimeout(type, typeSpeed);
    };
    
    type();
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-dark-radial"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient">Bharath serman R</span>
            </h1>
          </motion.div>
          <motion.div
            className="text-xl md:text-3xl font-medium flex justify-center items-center h-12 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white mr-2">I'm a</span>
            <div className="text-orange-400" ref={textRef}></div>
<span className="text-orange-400 animate-pulse">|</span>

          </motion.div>
          
          <motion.p
            className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Enthusiastic Computer Science student eager to innovate and solve real-world problems with technology
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://github.com/Bharath-serman" //Github
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border p-3 bg-tech-dark hover:bg-tech-blue-dark transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="text-white" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bharath-serman-r-7999b8262/"  //LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border p-3 bg-tech-dark hover:bg-tech-blue-dark transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="text-white" size={24} />
            </a>
            <a
              href="mailto:bhar22005.cd@rmkec.ac.in"
              className="neon-border p-3 bg-tech-dark hover:bg-tech-blue-dark transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail className="text-white" size={24} />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#projects"
             className="py-3 px-8 bg-orange-400 hover:bg-orange-500 rounded-full text-white font-medium inline-flex items-center transition-all duration-300 hover:shadow-lg"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </div>
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
