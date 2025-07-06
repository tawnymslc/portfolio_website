import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import useIsMobile from '../useIsMobile'; 
import architectIcon from '../../assets/icons/architect.png';
import consultantIcon from '../../assets/icons/consultant.png';
import engineerIcon from '../../assets/icons/engineer.png';
import leaderIcon from '../../assets/icons/leader.png';
import styles from './Landing.module.css';

const floatingWords = [
  {
    text: 'Consultant',
    top: '10%',
    left: '47%',
    glow: 'rgba(0, 132, 255, 0.5)',
    description:
      'I’ve worked with clients in EdTech, Events, and Web3, helping them get the most out of their tools. I break down complex setups and make things feel easy and approachable.'
  },
  {
    text: 'Engineer',
    top: '40%',
    left: '74%',
    glow: 'rgba(0, 255, 255, 0.5)',
    description:
      'Across my roles, I’ve loved creating, designing, and building technical solutions that actually work for people. Whether it’s front-end or back-end, I enjoy turning ideas into real, usable tools.'
  },
  {
    text: 'Architect',
    top: '40%',
    left: '20%',
    glow: 'rgba(0, 255, 160, 0.5)',
    description:
      'I’ve helped enterprise clients map out their onboarding plans and technical setup. I’m all about finding efficient ways to meet business goals and making sure everything fits together smoothly.'
  },
  {
    text: 'Leader',
    top: '68%',
    left: '48%',
    glow: 'rgba(255, 0, 153, 0.5)',
    description:
      'I have spent time as a team lead in leading workshops, mentoring teammates, and helping clients feel confident with new tools. I try to bring energy and clarity to every team I’m part of.'
  }
];

const iconMap = {
  Architect: architectIcon,
  Consultant: consultantIcon,
  Engineer: engineerIcon,
  Leader: leaderIcon
};

const Landing = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobile = useIsMobile();
  const designerControls = useAnimation();
  const engineerControls = useAnimation();
  const technologistControls = useAnimation();
  const consultantControls = useAnimation();

  const controlsArray = useMemo(() => [
  designerControls,
  engineerControls,
  technologistControls,
  consultantControls,
  ], [designerControls, engineerControls, technologistControls, consultantControls]);

  useEffect(() => {
    controlsArray.forEach((control, index) => {
      control.start({
        y: [0, -8, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.3,
        }
      });
    });
  }, [controlsArray]);

  return (
    <div className={styles.floatingLabelsWrapper}>
      <div className={styles.introCards}>
        <div className={styles.introCard}>
          <div className={styles.waveIcon}>👋</div>
          <div className={styles.introText}>
            <p className={styles.greeting}>Hello, I'm</p>
            <h1 className={styles.nameHeading}>Tawny</h1>
          </div>
        </div>
          <div className={styles.secondaryCard}>
            <ul className={styles.titleList}>
                <li>IMPLEMENTATION CONSULTANT</li>
                <li>SOLUTIONS ENGINEER</li>
                <li>CUSTOMER ARCHITECT</li>
                <li>FULL STACK DEVELOPER</li>
            </ul>
          </div>
      </div>
      <div className={styles.labelGrid}>
        {floatingWords.map((word, index) => (
          <motion.div
            key={index}
            className={styles.floatingLabel}
              style={{ ...(isMobile ? {} : { top: word.top, left: word.left }),
              zIndex: hoveredIndex === index ? 2 : 0
            }}
              initial={{ y: 0, scale: 1, backgroundColor: 'rgba(0, 0, 0, 0)', color: '#222' }}
              animate={{
                scale: hoveredIndex === index ? (isMobile ? 1.03 : 1.2) : 1,
                boxShadow: hoveredIndex === index
                  ? `0 0 20px ${floatingWords[index].glow}`
                  : '0 0 0 transparent',
                backgroundColor: hoveredIndex === index ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)',
                color: hoveredIndex === index ? '#fff' : '#222',
                transition: {
                  scale: { duration: 0.3 },
                  boxShadow: { duration: 0.3 },
                  backgroundColor: { duration: 0.3 },
                  color: { duration: 0.3 }
                }
              }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
              <div className={styles.labelContent}>
                <span className={styles.iconCircle}>
                  <img src={iconMap[word.text]} alt={`${word.text} icon`} />
                </span>
                <span className={styles.labelText}>{word.text}</span>
              </div>
          </motion.div>
        ))}
        {hoveredIndex !== null && (
          <motion.div
            className={styles.blurOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        {hoveredIndex === null && (
          <motion.div
            className={styles.landingPrompt}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [1, 0.6, 1], // soft pulse
              transition: {
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
              },
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            👆 Hover over a label to learn more
          </motion.div>
        )}
        <motion.div
          key={hoveredIndex}
          className={styles.labelDescription}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            y: hoveredIndex !== null ? 0 : 10
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
            delay: hoveredIndex !== null ? 0.15 : 0
          }}
        >     
          {hoveredIndex !== null && floatingWords[hoveredIndex].description}
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
