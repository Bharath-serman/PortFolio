
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Work Experience</h2>
          <div className="w-20 h-1 bg-tech-gradient mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatedCard className="relative">
            <div className="absolute -left-0 top-6 w-6 h-6 rounded-full bg-tech-gradient flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-tech-dark"></div>
            </div>
            
            <div className="pl-6 border-l-2 border-tech-purple/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Intern</h3>
                <div className="flex items-center text-tech-neon text-sm mt-2 md:mt-0">
                  <Calendar size={14} className="mr-1" />
                  <span>June 2024 - July 2024</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Briefcase size={16} className="mr-2 text-tech-neon" />
                  <h4 className="text-lg font-semibold">Chennai Metro Rail Limited</h4>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin size={16} className="mr-2 shrink-0" />
                  <p>Chennai, India</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Chennai Metro Rail Limited (CMRL) is a government-owned organization responsible 
                for developing and operating the Chennai Metro, enhancing urban mobility with a 
                modern, efficient, and sustainable transportation system.
              </p>
              
              <div>
                <h5 className="text-lg font-semibold mb-3 flex items-center">
                  <Award size={18} className="mr-2 text-tech-neon" />
                  Key Achievements
                </h5>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-5">
                  <li>
                    Developed a travel planner for CMRL that displays fare, distance, and 
                    platform details using an API
                  </li>
                  <li>
                    Created an interactive Leaflet map highlighting the travel route
                  </li>
                  <li>
                    Optimized the user interface for both desktop and mobile users
                  </li>
                  <li>
                    Implemented real-time data updates to provide accurate information
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-tech-blue-dark text-white">
                  API Integration
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-tech-blue-dark text-white">
                  UI/UX Design
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-tech-blue-dark text-white">
                  Interactive Maps
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-tech-blue-dark text-white">
                  Transportation Systems
                </span>
              </div>
            </div>
          </AnimatedCard>
          <div className="mt-20">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading">Achievements</h2>
              <div className="w-20 h-1 bg-tech-gradient mx-auto rounded-full mb-6"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AnimatedCard delay={0.1}>
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="p-2 rounded-full bg-tech-blue-dark text-tech-neon">
                      <Award size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">First Prize in Mini-Project competition</h3>
                    <p className="text-muted-foreground">
                      Attained First prize in the department level Mini-project competition of our department for the project VR_Black
                    </p>
                  </div>
                  
                </div>
              </AnimatedCard>
              <AnimatedCard delay={0.2}>
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="p-2 rounded-full bg-tech-blue-dark text-tech-neon">
                      <Award size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Paper Presentation</h3>
                    <p className="text-muted-foreground">
                      Presented research papers at academic conferences, showcasing innovative ideas 
                      and solutions in the field of computer science.
                    </p>
                  </div>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={0.3}>
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="p-2 rounded-full bg-tech-blue-dark text-tech-neon">
                      <Award size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Unity Learn - AR Face filter certification</h3>
                    <p className="text-muted-foreground">
                      Earned Unity Learn certification, demonstrating proficiency in Augmented reality Face filter project.
                    </p>
                  </div>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={0.4}>
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="p-2 rounded-full bg-tech-blue-dark text-tech-neon">
                      <Award size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">NPTEL Certifications</h3>
                    <p className="text-muted-foreground">
                      Successfully completed multiple National Programme on Technology Enhanced Learning courses 
                      with excellent scores, demonstrating mastery in technical subjects.
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
