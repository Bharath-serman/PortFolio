
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const educationEntries = [
    {
      degree: 'Computer Science Undergraduate',
      institution: 'R.M.K Engineering College',
      period: '09/2022 - Present',
      location: 'Chennai, India',
      description: 'Pursuing a Bachelor of Engineering in Computer Science with a focus on emerging technologies including AR/VR development, artificial intelligence, and software engineering.',
      courses: ['Data Structures & Algorithms', 'Computer Graphics', 'Artificial Intelligence', 'Software Engineering', 'User Interface and Experience']
    },
    {
      degree: 'Higher Secondary',
      institution: "St.Anne's Matric.Hr.Sec. School",
      period: '06/2006 - 06/2022',
      location: 'Chennai, India',
      description: 'Completed higher secondary education with a focus on mathematics and computer science, establishing a strong foundation for further academic pursuits.',
      courses: ['Mathematics', 'Computer Science', 'Physics', 'Chemistry', 'English']
    }
  ];
  
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Education</h2>
          <div className="w-20 h-1 bg-tech-gradient mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationEntries.map((entry, index) => (
            <AnimatedCard 
              key={entry.institution}
              className="mb-10 last:mb-0 relative"
              delay={index * 0.2}
            >
              {/* Timeline dot */}
              <div className="absolute -left-0 top-6 w-6 h-6 rounded-full bg-tech-gradient flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-tech-dark"></div>
              </div>
              
              <div className="pl-6 border-l-2 border-tech-purple/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{entry.degree}</h3>
                  <div className="flex items-center text-tech-neon text-sm mt-2 md:mt-0">
                    <Calendar size={14} className="mr-1" />
                    <span>{entry.period}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <GraduationCap size={16} className="mr-2 text-tech-neon" />
                    <h4 className="text-lg font-semibold">{entry.institution}</h4>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin size={16} className="mr-2 shrink-0" />
                    <p>{entry.location}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{entry.description}</p>
                
                <div>
                  <h5 className="text-lg font-semibold mb-3 flex items-center">
                    <BookOpen size={18} className="mr-2 text-tech-neon" />
                    Key Courses
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {entry.courses.map(course => (
                      <span 
                        key={course} 
                        className="px-3 py-1 text-xs rounded-full bg-tech-blue-dark text-white"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gradient">Languages</h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <AnimatedCard delay={0.1} className="py-4 px-6 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Tamil</h4>
                <p className="text-sm text-muted-foreground">Full Professional Proficiency</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2} className="py-4 px-6 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">English</h4>
                <p className="text-sm text-muted-foreground">Professional Working Proficiency</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3} className="py-4 px-6 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Japanese</h4>
                <p className="text-sm text-muted-foreground">Limited Working Proficiency</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.4} className="py-4 px-6 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Hindi</h4>
                <p className="text-sm text-muted-foreground">Limited Working Proficiency</p>
              </div>
            </AnimatedCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
