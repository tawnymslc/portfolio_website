import { motion } from 'framer-motion';
import { useState } from 'react';
import IntrestCards from './IntrestCards';
import styles from './About.module.css';

const About = () => {

  const [exploredCards, setExploredCards] = useState([]);

  const handleExplore = (card) => {
    setExploredCards((current) => {
      if (current.includes(card)) {
        return current;
      }

      return [...current, card];

    });
  };

  const profileComplete = exploredCards.length === 4;

  return (
    <section   className={`${styles.aboutSection} ${

    profileComplete ? styles.profileCompleteSection : ''

  }`}>
      <div className={styles.aboutIntro}>
        <span className={styles.eyebrow}>ABOUT ME</span>
        <h2>The person behind the integrations.</h2>
        <p>
           I spend a lot of time thinking about APIs, systems, and how to make complicated things work. 
           Outside of that, you’ll usually find me teaching dance, building a playlist, 
           on a mountain bike, or watching something animated.
        </p>
      </div>
    <div> 
      <motion.div
        className={styles.aboutContent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className={styles.funFacts}>
          <IntrestCards
            icon="🎶"
            title="Dance"
            tagline="Teaching • Choreography • Energy"
            detail="I teach weekly high-energy classes at EOS"
            gradientClass={styles.danceCard}
            animation="equalizer"
            onActivate={() => handleExplore('dance')}
          />
          <IntrestCards
            icon="🎧"
            title="DJ & Music Lover"
            tagline="Hip-Hop • Afrobeats • Reggaeton"
            detail="From hip-hop to afrobeats to reggaeton, I’m in"
            gradientClass={styles.djCard}
            animation="record"
            onActivate={() => handleExplore('music')}
          />
          <IntrestCards
            icon="🚵"
            title="Mountain Biking"
            tagline="Trails • Mountains • Outdoors"
            detail="Flow trails and desert lines are my happy place"
            gradientClass={styles.bikeCard}
            animation="trail"
            onActivate={() => handleExplore('bike')}
          />
          <IntrestCards
            icon="🎬"
            title="Anime Fan"
            tagline="Stories • Animation • Escape"
            detail="Shonen arcs fuel my builder mindset"
            gradientClass={styles.animeCard}
            animation="film"
            onActivate={() => handleExplore('anime')}
          />
        </div>
      </motion.div>
      {profileComplete && (
        <motion.div
          className={styles.solutionReveal}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.profileComplete}>
            ✓ PROFILE COMPLETE
          </div>

          <span className={styles.solutionEyebrow}>
            HOW I APPROACH A SOLUTION
          </span>

          <h3 className={styles.solutionTitle}>
            From customer problem to working solution.
          </h3>

          <div className={styles.solutionFlow}>
            <div className={styles.solutionStep}>
              <span className={styles.stepNumber}>01</span>
              <strong>Understand</strong>
              <span>Customer needs</span>
            </div>

            <span className={styles.solutionArrow}>→</span>

            <div className={styles.solutionStep}>
              <span className={styles.stepNumber}>02</span>
              <strong>Design</strong>
              <span>Technical approach</span>
            </div>

            <span className={styles.solutionArrow}>→</span>

            <div className={styles.solutionStep}>
              <span className={styles.stepNumber}>03</span>
              <strong>Build</strong>
              <span>Integration logic</span>
            </div>

            <span className={styles.solutionArrow}>→</span>

            <div className={styles.solutionStep}>
              <span className={styles.stepNumber}>04</span>
              <strong>Validate</strong>
              <span>Test & refine</span>
            </div>

            <span className={styles.solutionArrow}>→</span>

            <div className={styles.solutionStep}>
              <span className={styles.stepNumber}>05</span>
              <strong>Deliver</strong>
              <span>Launch & support</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
    </section>
  );
};

export default About;