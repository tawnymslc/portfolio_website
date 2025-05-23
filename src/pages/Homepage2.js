import React, { useEffect, useRef, useState} from 'react';
import Header from './Header';
import ProjectGrid from '../components/ProjectGrid';
import FadeInSection from '../components/FadeInSection';
import SectionDots from '../components/SectionDots';
import { motion } from 'framer-motion';

const HomePage2 = () => {
  const [currentSection, setCurrentSection] = useState('landing');
  const wrapperRef = useRef(null);

  const scrollToProjects = () => {
    const scroll = document.getElementById('projects');
    if (scroll) scroll.scrollIntoView({ behavior: 'smooth' });
  };

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
        <button onClick={scrollToProjects}>
          View My Work
        </button>
      </section>

      <section id="projects" className="section">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <FadeInSection>
            <h2>🚀 Projects</h2>
            <p>My recent work and portfolio highlights will go here.</p>
            <ProjectGrid />
          </FadeInSection>
        </motion.div>
      </section>

      <section id="skills" className="section">
        <FadeInSection>
          <h2>🛠 Skills</h2>
          <p>Technologies and tools I use.</p>
        </FadeInSection>
      </section>

      <section id="about" className="section">
        <FadeInSection>
          <h2>👩‍💻 About Me</h2>
          <p>A bit about my background, passions, and journey.</p>
        </FadeInSection>
      </section>
      </div>
    </>
  );
};

export default HomePage2;
