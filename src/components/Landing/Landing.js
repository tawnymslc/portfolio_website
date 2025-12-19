import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import useIsMobile from '../useIsMobile'; 
import architectIcon from '../../assets/icons/architect.png';
import consultantIcon from '../../assets/icons/consultant.png';
import engineerIcon from '../../assets/icons/engineer.png';
import leaderIcon from '../../assets/icons/leader.png';
import styles from './Landing.module.css';



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

  const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const width = useScreenSize();

const floatingWords = [
  {
    text: 'Consultant',
    top: '10%',
    left: '47%',
    glow: 'rgba(0, 132, 255, 0.5)',
    description:
      [
        'Onboarded hundreds of accounts across EdTech, Events, E-Commerce, and Web3',
        'Consulted with clients on product capabilities, user benefits, and recommended onboarding strategies',
        'Demonstrated ROI, trained users on features, and guided efficient adoption'
      ],
    branches:
        width >= 992 && width < 1100
        ? [
            { top: '67%', left: '35%' },
            { top: '30%', left: '35%' },
            { top: '50%', left: '35%' }
          ]
      : width >= 1100 && width < 1300
        ? [
            { top: '67%', left: '37%' },
            { top: '30%', left: '37%' },
            { top: '50%', left: '37%' }
          ]
      : width >= 1300
        ? [
            { top: '67%', left: '38%' },
            { top: '30%', left: '38%' },
            { top: '50%', left: '38%' }
          ]
      : [
          // Mobile fallback (stacked)
          { top: '70%', left: '75%' },
          { top: '80%', left: '75%' },
          { top: '90%', left: '50%' }
        ]
  },
  {
    text: 'Engineer',
    top: '40%',
    left: '74%',
    glow: 'rgba(0, 255, 255, 0.5)',
    description:
      [
        'Built full stack projects using React, Node.js, Python, and REST APIs',
        'Completed two coding bootcamps to strengthen full stack and backend skills',
        'Integrated dApps with JavaScript libraries and APIs'
      ],
    branches:
      width >= 992 && width < 1100
        ? [
            { top: '22%', left: '35%' },
            { top: '40%', left: '17%' },
            { top: '58%', left: '35%' }
          ]
      : width >= 1100 && width < 1300
        ? [
            { top: '22%', left: '35%' },
            { top: '40%', left: '20%' },
            { top: '58%', left: '35%' }
          ]
      : width >= 1300
        ? [
            { top: '22%', left: '41%' },
            { top: '40%', left: '26%' },
            { top: '58%', left: '41%' }
          ]
      : [
          // Mobile fallback (stacked)
          { top: '70%', left: '75%' },
          { top: '80%', left: '75%' },
          { top: '90%', left: '50%' }
        ]
  },
  {
    text: 'Architect',
    top: '40%',
    left: '20%',
    glow: 'rgba(0, 255, 160, 0.5)',
    description:
      [ 
        'Worked with enterprise accounts and their complex integrations, including Hormel and Coca-Cola',
        'Helped customers understand their data and translate business requirements into technical solutions',
        'Guided clients from concept to realization, showing how their ideas could be implemented in the new tool'
      ],
    branches:
      width >= 992 && width < 1100
        ? [
            { top: '21%', left: '38%' },
            { top: '40%', left: '51%' },
            { top: '59%', left: '38%' }
          ]
      : width >= 1100 && width < 1300
        ? [
            { top: '21%', left: '41%' },
            { top: '40%', left: '54%' },
            { top: '59%', left: '41%' }
          ]
      : width >= 1300
        ? [
            { top: '21%', left: '36%' },
            { top: '40%', left: '49%' },
            { top: '59%', left: '36%' }
          ]
      : [
          // Mobile fallback (stacked)
          { top: '70%', left: '75%' },
          { top: '80%', left: '75%' },
          { top: '90%', left: '50%' }
        ]
  },
  {
    text: 'Leader',
    top: '68%',
    left: '48%',
    glow: 'rgba(255, 0, 153, 0.5)',
    description:
      [
      'Led and mentored Junior Implementation Consultants, accelerating skill growth and supporting career development',
      'Managed the most strategic and complex enterprise accounts, ensuring successful outcomes',
      'Served as SME for product features and acted as the go-to resource for removing project blockers'
      ],
    branches:
      width >= 992 && width < 1100
        ? [
            { top: '49%', left: '35%' },
            { top: '11%', left: '35%' },
            { top: '30%', left: '35%' }
          ]
      : width >= 1100 && width < 1300
        ? [
            { top: '49%', left: '37%' },
            { top: '11%', left: '37%' },
            { top: '30%', left: '37%' }
          ]
      : width >= 1300
        ? [
            { top: '47%', left: '38%' },
            { top: '11%', left: '38%' },
            { top: '29%', left: '38%' }
          ]
      : [
          // Mobile fallback (stacked)
          { top: '70%', left: '75%' },
          { top: '80%', left: '75%' },
          { top: '90%', left: '50%' }
        ]
  },
];

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
              opacity: [1, 0.6, 1], 
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
        >     
        {hoveredIndex !== null && (
          <div className={styles.descriptionGroup}>
            {floatingWords[hoveredIndex].branches.map((pos, i) => (
              <motion.div
                key={i}
                className={styles.labelDescription}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                style={
                  !isMobile
                    ? { position: 'absolute', top: pos.top, left: pos.left }
                    : undefined
                }
              >
                {floatingWords[hoveredIndex].description[i]}
              </motion.div>
            ))}
          </div>
        )}
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
