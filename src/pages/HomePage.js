import React, { useEffect, useRef, useState} from 'react';
import Header from './Header';
import Landing from '../components/Landing/Landing'
import ProjectGrid from '../components/ProjectGrid';
import SkillsExperience from '../components/SkillsExperience/SkillsExperience';
import About from '../components/About/About'
import FadeInSection from '../components/FadeInSection';
import SectionDots from '../components/SectionDots';

const HomePage = () => {
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
        <Landing />
      </section>
      <FadeInSection delay={0.2}>
        <section id="projects" className="section">
            <h2 className="section-heading">🚀 Things I've Built</h2>
            <ProjectGrid />
        </section>
      </FadeInSection>
        <section id="skills" className="section">
            <h2 className="section-heading">🛠 My Experience & Skills</h2>
            <SkillsExperience />
        </section>
      <FadeInSection delay={0.2}>
        <section id="about" className="section"> 
           <h2 className="section-heading">About Me</h2>
          <About />
        </section>
      </FadeInSection>
      </div>
    </>
  );
};

export default HomePage;
