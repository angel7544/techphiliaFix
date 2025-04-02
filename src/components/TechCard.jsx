import React from 'react';

const TechCard = ({ children, className = '', hover = true }) => {
  return (
    <div 
      className={`
        bg-white dark:bg-dark-card 
        border border-light-border dark:border-dark-border
        rounded-xl shadow-lg 
        transition-all duration-300
        ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default TechCard; 