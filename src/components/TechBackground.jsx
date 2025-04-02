import React from 'react';

const TechBackground = ({ children, type = 'tech' }) => {
  return (
    <div className={`relative ${type === 'tech' ? 'tech-bg' : 'circuit-bg'}`}>
      <div className="absolute inset-0 bg-gradient-radial from-white/50 to-transparent dark:from-dark-bg/50"></div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default TechBackground; 