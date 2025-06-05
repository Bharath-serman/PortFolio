
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import { GraduationCap, Briefcase, Languages, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">About Me</h2>
          <div className="w-20 h-1 bg-tech-gradient mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-tech-gradient blur-md rounded-2xl transform rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-tech-dark">
                <div className="absolute inset-0 bg-tech-gradient animate-gradient-x opacity-20"></div>
                <div className="aspect-[9/5] w-full bg-tech-dark flex justify-center items-center">
                  <div className="text-6xl font-bold bg-clip-text text-transparent bg-tech-gradient animate-gradient-x">
                    <img src='public\my img.jpeg'></img>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Bharath serman R
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm an enthusiastic Computer Science undergraduate with a passion for AR/VR development, 
                3D modeling, and creating immersive digital experiences. My goal is to innovate and solve 
                real-world problems through cutting-edge technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatedCard className="h-full" delay={0.1}>
                <div className="flex flex-col h-full">
                  <div className="mb-3 text-tech-neon">
                    <GraduationCap size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Education</h4>
                  <p className="text-muted-foreground flex-grow">
                    Computer Science Undergraduate at R.M.K Engineering College
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard className="h-full" delay={0.2}>
                <div className="flex flex-col h-full">
                  <div className="mb-3 text-tech-neon">
                    <Briefcase size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Experience</h4>
                  <p className="text-muted-foreground flex-grow">
                    Internship at Chennai Metro Rail Limited
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard className="h-full" delay={0.3}>
                <div className="flex flex-col h-full">
                  <div className="mb-3 text-tech-neon">
                    <Languages size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Languages</h4>
                  <p className="text-muted-foreground flex-grow">
                    Tamil, English, Japanese (Limited), Hindi (Limited)
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard className="h-full" delay={0.4}>
                <div className="flex flex-col h-full">
                  <div className="mb-3 text-tech-neon">
                    <Heart size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Interests</h4>
                  <p className="text-muted-foreground flex-grow">
                    Reading books, Gaming, Watching Series, Making 3D models
                  </p>
                </div>
              </AnimatedCard>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center sm:justify-start mt-8"
            >
              <a
                href="#contact"
                className="py-3 px-8 bg-tech-gradient hover:opacity-90 rounded-full text-white font-medium transition-all duration-300 hover:shadow-glow"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
