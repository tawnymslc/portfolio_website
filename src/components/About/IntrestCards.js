import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const IntrestCards = ({ icon, title, tagline, detail, gradientClass, animation, onActivate }) => {

    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped((v) => !v);
        onActivate?.();
    };

    const renderAnimation = () => {
        switch (animation) {
            case 'equalizer':
                return (
                    <div className={styles.equalizer}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                );
case 'record':

  return (

    <div className={styles.vinylPlayer}>

      <div className={styles.vinylRecord}>

        <div className={styles.vinylMarker}></div>

        <div className={styles.vinylRing}></div>

        <div className={styles.vinylCenter}></div>

      </div>

      <div className={styles.vinylToneArm}></div>

    </div>

  );
            case 'trail':
                return (
                    <div className={styles.trailAnimation}>
                    <span className={styles.movingBike}>🚵</span>

                    <svg
                        className={styles.trailLine}
                        viewBox="0 0 160 40"
                        aria-hidden="true"
                    >
                        <path
                        d="M5 30 C25 5, 45 38, 70 20 S115 5, 155 28"
                        />
                    </svg>
                    </div>
                );
            case 'film':
                return (
                    <div className={styles.filmWindow}>
                    <div className={styles.filmStrip}>
                        <div className={styles.filmFrame}>✦</div>
                        <div className={styles.filmFrame}>⚡</div>
                        <div className={styles.filmFrame}>✦</div>
                        <div className={styles.filmFrame}>⚡</div>
                        <div className={styles.filmFrame}>✦</div>
                    </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return(
    <motion.button
      type="button"
      className={`${styles.factCard} ${gradientClass}`}
      onClick={handleFlip}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleFlip()}
      aria-pressed={flipped}
      aria-label={`${title}: ${flipped ? 'details' : 'summary'}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className={styles.flipInner}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
        >
        <div className={`${styles.face} ${styles.front}`}>
            <div className={styles.iconBubble}>
                <span className={styles.cardIcon} aria-hidden="true">
                {icon}
                </span>
            </div>
            <span className={styles.cardTitle}>
                {title}
            </span>
            <span className={styles.cardTagline}>
                {tagline}
            </span>
            <span className={styles.flip}>
                Tap to Explore →
            </span>
        </div>
        <div className={`${styles.face} ${styles.back}`}>
            <div className={styles.animationArea}>
                {renderAnimation()}
            </div>
            <span className={styles.backTitle}>
                {title}
            </span>
            <span className={styles.backDetail}>
                {detail}
            </span>
            <span className={styles.flip}>
                Tap to return
            </span>
        </div>
      </motion.div>
    </motion.button>
    ) 
};

export default IntrestCards