
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Game Development Tools',
      skills: [
        { name: 'C# for coding' },
        { name: 'Unity Engine for development' },
        { name: 'Github and Plastic SCM for version control' },
        { name: 'Renpy (Started Recently)' },
      ]
    },
    {
      title: 'Design-Tools',
      skills: [
        { name: 'Figma' },
        { name: 'Framer' },
        { name: 'Visily' },
        { name: 'Krita' },
      ]
    },
     {
      title: 'AI-Tools',
      skills: [
        { name: 'Bolt.dly' },
        { name: 'Cursor' },
        { name: 'Windsurf' },
        { name: 'Lovable' },
        { name: 'N8N'},
      ]
    }
  ];

const SkillBar = ({ name, index }: { name: string; index: number }) => (
  <motion.div
    className="inline-block mr-3 mb-3 px-4 py-2 rounded-lg bg-orange-500/15 text-white border border-orange-400/30"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    whileHover={{ scale: 1.08 }}
  >
    {name}
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
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse skill set across various technologies, focusing on Game development,
            UI Designing, and programming.
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
                    //level={skill.level} 
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
              'MongoDB', 'Figma', 'AI Tools'
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
