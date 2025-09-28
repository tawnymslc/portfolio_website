import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaWrench } from 'react-icons/fa';
import styles from './About.module.css';

const floatTransition = {
  duration: 3.2,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
};


const FactCard = ({ icon, title, detail, gradientClass, onActivate }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped((v) => !v);
        onActivate?.();
    };

    useEffect(() => {
        if (flipped) {
            const timer = setTimeout(() => setFlipped(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [flipped]);

  return (
    <motion.button
      type="button"
      className={`${styles.factCard} ${gradientClass}`}
      onClick={handleFlip}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleFlip()}
      aria-pressed={flipped}
      aria-label={`${title}: ${flipped ? 'details' : 'summary'}`}
      initial={{ y: 0 }}
      animate={{ y: [0, -6, 0] }}
      transition={floatTransition}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className={styles.flipInner}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
        >
        <div className={`${styles.face} ${styles.front}`}>
          <span className={styles.cardIcon} aria-hidden="true">{icon}</span>
          <span>{title}</span>
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          {detail}
        </div>
      </motion.div>
    </motion.button>
  );
};

const About = () => {
  return (
    <div> 
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={styles.underConstructionWrapper}
      >
        <FaWrench className={styles.bounceIcon} size="2.4em" color="#FF9900" />
        <p className={styles.underConstructionSub}>This section is under construction 🚧</p>
      </motion.div>
      <motion.div
        className={styles.aboutContent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p>"I'm a technical consultant turned engineer with a love for solving complex problems..."</p>
        <div className={styles.funFacts}>
          <FactCard
            icon="🎶"
            title="Dance Fitness Instructor"
            detail="I teach weekly high-energy classes at EOS"
            gradientClass={styles.danceCard}
          />
          <FactCard
            icon="🎧"
            title="DJ & Music Lover"
            detail="From hip-hop to afrobeats to reggaeton, I’m in"
            gradientClass={styles.djCard}
          />
          <FactCard
            icon="🚵"
            title="Mountain Biking"
            detail="Flow trails and desert lines are my happy place"
            gradientClass={styles.bikeCard}
          />
          <FactCard
            icon="🎬"
            title="Anime Fan"
            detail="Shonen arcs fuel my builder mindset"
            gradientClass={styles.animeCard}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;