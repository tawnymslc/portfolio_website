import { motion } from 'framer-motion';
import IntrestCards from './IntrestCards';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
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
          />
          <IntrestCards
            icon="🎧"
            title="DJ & Music Lover"
            tagline="Hip-Hop • Afrobeats • Reggaeton"
            detail="From hip-hop to afrobeats to reggaeton, I’m in"
            gradientClass={styles.djCard}
            animation="record"
          />
          <IntrestCards
            icon="🚵"
            title="Mountain Biking"
            tagline="Trails • Mountains • Outdoors"
            detail="Flow trails and desert lines are my happy place"
            gradientClass={styles.bikeCard}
            animation="trail"
          />
          <IntrestCards
            icon="🎬"
            title="Anime Fan"
            tagline="Stories • Animation • Escape"
            detail="Shonen arcs fuel my builder mindset"
            gradientClass={styles.animeCard}
            animation="film"
          />
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default About;