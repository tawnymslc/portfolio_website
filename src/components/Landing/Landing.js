import { motion, AnimatePresence, } from 'framer-motion';
import { useState, useRef, useEffect} from 'react';
import useIsMobile from '../useIsMobile'; 

import architectIcon from '../../assets/icons/architect.png';
import consultantIcon from '../../assets/icons/consultant.png';
import engineerIcon from '../../assets/icons/engineer.png';
import leaderIcon from '../../assets/icons/leader.png';

import styles from './Landing.module.css';

const floatingWords = [
  {
    text: 'Consultant',
    top: '4%',
    left: '66%',
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
    top: '47%',
    left: '76%',
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
    top: '38%',
    left: '12%',
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
    top: '68%',
    left: '25%',
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
  const [showRoleContent, setShowRoleContent] = useState(false);

  const roleAreaRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          roleAreaRef.current &&
          !roleAreaRef.current.contains(event.target)
        ) {
          setHoveredIndex(null);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

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
      <div ref={roleAreaRef} className={styles.labelGrid}>
        <svg
          className={styles.connectorLayer}
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            id="engineerPath"
            className={styles.engineerPath}
            d="M 820 330 L 860 330 L 860 220 L 670 220"
          />
          {hoveredIndex === 1 && (
            <motion.circle
              r="5"
              className={styles.engineerPulse}
              initial={{ cx: 820, cy: 330}}
              animate={{
                cx: [820, 860, 860, 670],
                cy: [330, 330, 220, 220]
              }}
              transition={{
                duration: 1.5,
                times: [0, 0.15, 0.45, 1],
                ease: "linear"
              }}
              onAnimationComplete={() => setShowRoleContent(true)}
            />
          )}
          {/* Consultant */}
          <path
            className={styles.consultantPath}
            d="M 675 70 L 425 70 L 425 130"
          />
          {hoveredIndex === 0 && (
            <motion.circle
              r="5"
              className={styles.consultantPulse}
              initial={{ cx: 675, cy: 70 }}
              animate={{
                cx: [675, 425, 425],
                cy: [70, 70, 130]
              }}
              transition={{
                duration: 1.2,
                times: [0, 0.73, 1],
                ease: "linear"
              }}
              onAnimationComplete={() => setShowRoleContent(true)}
            />
          )}
          {/* Architect */}
          <path
            className={styles.architectPath}
            d="M 155 315 L 155 350 L 300 350 L 300 275 L 350 275"
          />
          {hoveredIndex === 2 && (
            <motion.circle
              r="5"
              className={styles.architectPulse}
              initial={{ cx: 155, cy: 315 }}
              animate={{
                cx: [155, 155, 300, 300, 350],
                cy: [315, 350, 350, 275, 275]
              }}
              transition={{
                duration: 1.5,
                times: [0, 0.15, 0.55, 0.85, 1],
                ease: "linear"
              }}
              onAnimationComplete={() => setShowRoleContent(true)}
            />
          )}
          {/* Leader */}
          <path
            className={styles.leaderPath}
            d="M 290 495 290 520 L 490 520 L 490 395"
          />
          {hoveredIndex === 3 && (
            <motion.circle
              r="5"
              className={styles.leaderPulse}
              initial={{ cx: 290, cy: 495 }}
              animate={{
                cx: [290, 290, 490, 490],
                cy: [495, 520, 520, 395]
              }}
              transition={{
                duration: 1.2,
                times: [0, 0.15, 0.65, 1],
                ease: "linear"
              }}
              onAnimationComplete={() => setShowRoleContent(true)}
            />
          )}
        </svg>
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

            onClick={() => {
              setShowRoleContent(false);
              setHoveredIndex(
                hoveredIndex === index ? null : index
              )
            }}
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
            {hoveredIndex !== null && showRoleContent ? (
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
