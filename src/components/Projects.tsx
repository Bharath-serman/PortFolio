
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import { ExternalLink, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Travel Planner',
      date: '06/2024',
      description: 'Developed a travel planner for CMRL that displays fare, distance, and platform details using an API, with an interactive Leaflet map highlighting the travel route.',
      image: '/placeholder.svg',
      tags: ['API', 'Interactive Map', 'Transit', 'UI Design']
    },
    {
      title: 'Black Hole in VR',
      date: '12/2024',
      description: 'An immersive VR experience that simulates black hole physics and gravitational lensing, allowing users to explore space phenomena in a safe virtual environment.',
      image: '/placeholder.svg',
      link: 'https://github.com/Bharath-serman/VR_BLACK_HOLE',
      tags: ['VR', 'Physics Simulation', 'Unity', '3D Modeling']
    },
     {
      title: 'AR Face Filter',
      date: '09/2025',
      description: 'A augmented reality face filters using unity software',
      image: '/placeholder.svg',
      link: 'https://github.com/Bharath-serman/AR_Face-Filter',
      tags: ['AR', 'VR', 'Unity']
    },
    {
      title: 'AI Assistant for Blender',
      date: '01/2025',
      description: 'A custom Blender plugin that leverages AI to assist with 3D modeling tasks, providing suggestions and automating repetitive processes.',
      image: '/placeholder.svg',
      link: 'https://github.com/Bharath-serman/Blender_Assistant',
      tags: ['AI', 'Blender', 'Python', 'Automation']
    },
   
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">My Projects</h2>
          <div className="w-20 h-1 bg-tech-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in AR/VR development, 
            programming, and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard 
              key={project.title} 
              className="group h-full"
              delay={index * 0.1}
            >
              <div className="flex flex-col h-full">
                <div className="rounded-lg overflow-hidden mb-4 bg-tech-blue-dark/50 aspect-video relative">
                  <div className="absolute inset-0 bg-tech-gradient opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-gradient">{project.title}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{project.date}</span>
                    </div>
                  </div>              
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs rounded-full bg-tech-blue-dark text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={project.link} 
                  className="mt-auto inline-flex items-center text-tech-neon hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
