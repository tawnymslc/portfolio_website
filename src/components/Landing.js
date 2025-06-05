import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import architectIcon from '../assets/icons/architect.png';
import consultantIcon from '../assets/icons/consultant.png';
import engineerIcon from '../assets/icons/engineer.png';
import leaderIcon from '../assets/icons/leader.png';

const floatingWords = [
  {
    text: 'Consultant',
    top: '5%',
    left: '17%',
    description:
      'I’ve worked with clients in EdTech, Events, and Web3, helping them get the most out of their tools. I break down complex setups and make things feel easy and approachable.'
  },
  {
    text: 'Engineer',
    top: '20%',
    left: '65%',
    description:
      'Across my roles, I’ve loved creating, designing, and building technical solutions that actually work for people. Whether it’s front-end or back-end, I enjoy turning ideas into real, usable tools.'
  },
  {
    text: 'Architect',
    top: '60%',
    left: '22%',
    description:
      'I’ve helped enterprise clients map out their onboarding plans and technical setup. I’m all about finding efficient ways to meet business goals and making sure everything fits together smoothly.'
  },
  {
    text: 'Leader',
    top: '75%',
    left: '70%',
    description:
      'I have spent time as a team lead in leading workshops, mentoring teammates, and helping clients feel confident with new tools. I try to bring energy and clarity to every team I’m part of.'
  },
];

const iconMap = {
  Architect: architectIcon,
  Consultant: consultantIcon,
  Engineer: engineerIcon,
  Leader: leaderIcon
};


const Landing = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const designerControls = useAnimation();
    const engineerControls = useAnimation();
    const technologistControls = useAnimation();
    const consultantControls = useAnimation();

    const controlsArray = [
        designerControls,
        engineerControls,
        technologistControls,
        consultantControls,
    ];

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
  }, []);

  return (
    <div className="floating-labels-wrapper">
      {floatingWords.map((word, index) => (
        <motion.div
            key={index}
            className="floating-label"
            style={{ top: word.top, left: word.left, zIndex: hoveredIndex === index ? 2 : 0}}
            initial={{ y: 0, scale: 1, backgroundColor: 'rgba(0, 0, 0, 0)', color: '#222' }}
            animate={{
              scale: hoveredIndex === index ? 1.2 : 1,
              boxShadow: hoveredIndex === index
                ? '0 0 20px rgba(0, 255, 255, 0.6)'
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
            <div className="label-content">
              <span className="icon-circle">
                <img src={iconMap[word.text]} alt={`${word.text} icon`} />
              </span>
              <span className="label-text">{word.text}</span>
            </div>
        </motion.div>
      ))}
      {hoveredIndex !== null && (
      <motion.div
        className="blur-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      )}
      {hoveredIndex === null && (
        <motion.div
          className="landing-prompt"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          👆 Hover over a label to learn more
        </motion.div>
      )}
      <motion.div
        key={hoveredIndex}
        className="label-description"
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
  );
};

export default Landing;
