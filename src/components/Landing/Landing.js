import { motion, AnimatePresence } from 'framer-motion';
import { useState} from 'react';
import useIsMobile from '../useIsMobile'; 

import architectIcon from '../../assets/icons/architect.png';
import consultantIcon from '../../assets/icons/consultant.png';
import engineerIcon from '../../assets/icons/engineer.png';
import leaderIcon from '../../assets/icons/leader.png';

import styles from './Landing.module.css';

const floatingWords = [
  {
    text: 'Consultant',
    top: '1%',
    left: '46%',
    glow: 'rgba(0, 132, 255, 0.5)',
    headline: 'I help customers turn complex products into successful outcomes.',
    skills: [
      'Customer Discovery',
      'Implementation Strategy',
      'Enterprise Accounts'
    ],
    description:
      'Onboarded hundreds of accounts across EdTech, Events, E-Commerce, and Web3 while helping customers understand product capabilities and choose the right implementation approach.'
  },
  {
    text: 'Engineer',
    top: '35%',
    left: '74%',
    glow: 'rgba(0, 255, 255, 0.5)',
    headline: 'I build and troubleshoot the integrations behind the solution.',
    skills: [
      'REST APIs',
      'Python',
      'React',
      'Webhooks',
      'OAuth',
      'Data Transformation'
    ],
    description:
      'Built full-stack projects and integrations using React, Python, Node.js, REST APIs, and JavaScript while developing deeper backend and system integration skills.'
  },
  {
    text: 'Architect',
    top: '35%',
    left: '20%',
    glow: 'rgba(0, 255, 160, 0.5)',
    headline: 'I translate business requirements into technical solutions.',
    skills: [
      'System Design',
      'Data Mapping',
      'Integration Architecture',
      'API Design'
    ],
    description:
      'Worked with enterprise customers and complex integrations, helping teams understand their data, define requirements, and turn ideas into implementable technical solutions.'
  },
  {
    text: 'Leader',
    top: '73%',
    left: '46%',
    glow: 'rgba(255, 0, 153, 0.5)',
    headline: 'I help teams move complex projects forward.',
    skills: [
      'Mentoring',
      'Technical Leadership',
      'Enterprise Delivery',
      'Problem Solving'
    ],
    description:
      'Mentored implementation consultants, managed strategic enterprise accounts, served as a product SME, and helped teams remove blockers on complex projects.'
  }
];

const iconMap = {
  Architect: architectIcon,
  Consultant: consultantIcon,
  Engineer: engineerIcon,
  Leader: leaderIcon
};

const rolePanelVariants = {
  hidden: {
    opacity: 0,
    y: 12
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      staggerChildren: 0.06,
      delayChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.18
    }
  }
};

const roleItemVariants = {
  hidden: {
    opacity: 0,
    y: 8
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25
    }
  }
};

const Landing = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobile = useIsMobile();

  return (
    <div className={styles.floatingLabelsWrapper}>
        <div className={styles.introCard}>
          <div className={styles.waveIcon}>👋</div>
          <div className={styles.introCardText}>
            <p className={styles.introCardGreeting}>Hello, I'm</p>
            <h1 className={styles.introCardName}>Tawny</h1>
          </div>
        </div>
      <div className={styles.positioningStatement}>
          <h2>I turn complex business problems into technical solutions.</h2>
          <p>
            I work where customers, business needs, APIs, and engineering meet.
          </p>
      </div>
      <div className={styles.labelGrid}>
        {floatingWords.map((word, index) => (
          <motion.button
            key={index}
            type="button"
            className={styles.floatingLabel}
            style={
              isMobile
                ? {}
                : {
                    top: word.top,
                    left: word.left,
                    zIndex: hoveredIndex === index ? 3 : 1
                  }
            }

            whileHover={!isMobile ? { scale: 1.08 } : undefined}
            whileTap={{ scale: 0.97 }}

            animate={{
              scale: hoveredIndex === index ? 1.04 : 1,
              opacity:
                hoveredIndex !== null && hoveredIndex !== index
                  ? 0.4
                  : 1,
              boxShadow:
                hoveredIndex === index
                  ? `0 0 24px ${word.glow}`
                  : '0 0 0 transparent',
              backgroundColor:
                hoveredIndex === index
                  ? '#111'
                  : 'rgba(255,255,255,0)',
              color:
                hoveredIndex === index
                  ? '#fff'
                  : '#222'
            }}

            onClick={() =>
              setHoveredIndex(
                hoveredIndex === index ? null : index
              )
            }
          >
            <span className={styles.labelContent}>
              <span className={styles.iconCircle}>
                <img
                  src={iconMap[word.text]}
                  alt={`${word.text} icon`}
                />
              </span>
              <span className={styles.labelText}>
                {word.text}
              </span>
            </span>
          </motion.button>
        ))}
        <div className={styles.roleContentArea}>
          <AnimatePresence mode="wait">
            {hoveredIndex !== null ? (
              <motion.div
                key={floatingWords[hoveredIndex].text}
                className={styles.rolePanel}
  variants={rolePanelVariants}

  initial="hidden"

  animate="visible"

  exit="exit"
              >
                <span className={styles.roleEyebrow}>
                  {floatingWords[hoveredIndex].text}
                </span>

                <motion.h2 variants={roleItemVariants}>
                  {floatingWords[hoveredIndex].headline}
                </motion.h2>

                <motion.p variants={roleItemVariants}>
                  {floatingWords[hoveredIndex].description}
                </motion.p>

                <motion.div variants={roleItemVariants} className={styles.skillTags}>
                  {floatingWords[hoveredIndex].skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </motion.div>

                <motion.a href="#projects" variants={roleItemVariants} className={styles.exploreLink}>
                  Explore my work ↓
                </motion.a>
              </motion.div>
            ) : (
              <motion.p
                key="prompt"
                className={styles.landingPrompt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.65 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                Select a role to explore how I work
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Landing;
