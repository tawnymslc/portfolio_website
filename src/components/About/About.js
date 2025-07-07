import { motion } from 'framer-motion';
import { FaWrench } from 'react-icons/fa';
import styles from './About.module.css'

const About = () => {

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={styles.underConstructionWrapper}
            >
                <div className={styles.underConstructionIcon}>
                    <FaWrench className={styles.bounceIcon} size="2.4em" color="#FF9900" />
                </div>
                <p className={styles.underConstructionSub}>This section is under construction 🚧</p>
                <h2 className="section-heading">About Me</h2>  
            </motion.div>
            <motion.div
                className={styles.aboutContent}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                >
                <p>I'm a technical consultant turned engineer with a love for solving complex problems, building intuitive apps, and leading integration projects.</p>
                <div className={styles.funFacts}>
                    <motion.div className={`${styles.factCard} ${styles.danceCard}`} whileHover={{ scale: 1.08 }}>
                        🎶 Dance Fitness Instructor
                    </motion.div>
                    <motion.div className={`${styles.factCard} ${styles.djCard}`} whileHover={{ scale: 1.08 }}>
                        🎧 DJ & Music Lover
                    </motion.div>
                    <motion.div className={`${styles.factCard} ${styles.bikeCard}`} whileHover={{ scale: 1.08 }}>
                        🚵 Mountain Biking Adventurer
                    </motion.div>
                    <motion.div className={`${styles.factCard} ${styles.animeCard}`} whileHover={{ scale: 1.08 }}>
                        🎬 Anime Fan
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
          
