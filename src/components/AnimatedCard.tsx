
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ className = '', children, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`rounded-xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 120px 30px rgba(0, 0, 0, 0.2)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative glass-card h-full">
        <div 
          className={`absolute inset-0 bg-tech-gradient rounded-xl opacity-0 transition-opacity duration-300 blur-sm -z-10 ${
            isHovered ? 'opacity-50' : ''
          }`}
        />
        <div className="h-full p-6">
          {children}
        </div>
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] translate-x-[-100%] transition-transform duration-700 ${
            isHovered ? 'translate-x-[200%]' : ''
          }`}
        />
      </div>
    </motion.div>

    
  );
};


export default AnimatedCard;
