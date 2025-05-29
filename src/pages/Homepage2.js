import React, { useEffect, useRef, useState} from 'react';
import Header from './Header';
import Landing from '../components/Landing'
import ProjectGrid from '../components/ProjectGrid';
import SkillsExperience from '../components/SkillsExperience';
import FadeInSection from '../components/FadeInSection';
import SectionDots from '../components/SectionDots';

const HomePage2 = () => {
  const [currentSection, setCurrentSection] = useState('landing');
  const wrapperRef = useRef(null);

  useEffect(() => {
    const sectionIds = ['landing', 'projects', 'skills', 'about'];

    const handleScroll = () => {
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setCurrentSection(id);
            break;
          }
        }
      }
    };

    const wrapper = wrapperRef.current;
  if (wrapper) {
    wrapper.addEventListener('scroll', handleScroll);
  }

  return () => {
    if (wrapper) {
      wrapper.removeEventListener('scroll', handleScroll);
    }
  };
}, []);

  return (
    <>
    <Header />
    <SectionDots current={currentSection} />
    <div className="fullpage-wrapper" id="fullpage-wrapper" ref={wrapperRef}>
      <section id="landing" className="section">
        <h1>Hi, I'm Tawny</h1>
        <p>Welcome to my interactive portfolio</p>
        <Landing />
      </section>
      <FadeInSection delay={0.2}>
        <section id="projects" className="section">
            <h2>🚀 Projects</h2>
            <p>My recent work and portfolio highlights will go here.</p>
            <ProjectGrid />
        </section>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <section id="skills" className="section">
            <h2>🛠 My Experience + Skills</h2>
            <p>Technologies and tools I use.</p>
            <SkillsExperience />
        </section>
      </FadeInSection >
      <FadeInSection delay={0.2}>
        <section id="about" className="section"> 
          <h2>👩‍💻 About Me</h2>
          <p>A bit about my background, passions, and journey.</p>
        </section>
      </FadeInSection>
      </div>
    </>
  );
};

export default HomePage2;
