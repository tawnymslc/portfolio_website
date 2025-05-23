import React from 'react';

const sections = ['landing', 'projects', 'skills', 'about'];

const SectionDots = ({ current }) => {
  return (
    <div className="section-dots">
      {sections.map((id) => (
        <div
          key={id}
          className={`dot ${current === id ? 'active' : ''}`}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
        />
      ))}
    </div>
  );
};

export default SectionDots;
