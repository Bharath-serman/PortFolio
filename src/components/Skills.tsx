
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C#', level: 46 },
        { name: 'Java', level: 30 },
      ]
    },
    {
      title: '3D & AR/VR',
      skills: [
        { name: 'Unity', level: 40 },
        { name: 'Blender', level: 30 },
        { name: 'AR Development', level: 40 },
        { name: 'VR Development', level: 50 },
      ]
    },
    {
      title: 'Design-Tools',
      skills: [
        { name: 'Figma', level: 45 },
        { name: 'Framer', level: 40 },
        { name: 'Visily', level: 60 },
        { name: 'CapCut', level: 40 },
      ]
    },
    {
      title: 'Other Tech Skills',
      skills: [
        { name: 'AI Integration', level: 40 },
        { name: 'Git,Github', level: 45 },
        { name: 'MongoDB', level: 40 },
        { name: 'AI Tools Exploration', level: 65 },
      ]
    },
     {
      title: 'AI-Tools',
      skills: [
        { name: 'Bolt.dly', level: 40 },
        { name: 'Cursor', level: 55 },
        { name: 'Windsurf', level: 45 },
        { name: 'Lovable', level: 55 },
        { name: 'N8N', level: 25 },
      ]
    }
  ];

  const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-1">
  <span className="text-white font-medium">{name}</span>
  <span className="text-orange-400 font-medium">{level}%</span>
</div>
<div className="w-full h-2 bg-orange-400/80 rounded-full overflow-hidden">
  <motion.div 
    className="h-full bg-violet-500/90"
    initial={{ width: 0 }}
    animate={{ width: `${level}%` }}
    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 + 0.3 }}
  ></motion.div>
</div>

    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">My Skills</h2>
          <div className="w-20 h-1 bg-tech-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse skill set across various technologies, focusing on AR/VR development,
            3D modeling, and programming.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gradient">{category.title}</h3>
              <div>
                {category.skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    index={index} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Unity', 'Blender', 'AR/VR','Visily', 'Framer', 'C#', 
              'MongoDB', 'Video CapCut', 'Figma', 'AI Tools'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="px-6 py-3 rounded-full bg-orange-500/20 text-white border border-orange-300/30 hover:border-orange-400/50 transition-colors duration-300 cursor-default"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.10,
                  boxShadow: '0 0 50px rgba(255, 102, 0, 1)',
                  transition: { duration: 0.2 }
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
