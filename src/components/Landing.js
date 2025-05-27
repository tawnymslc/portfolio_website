import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const floatingWords = [
  {
    text: 'Leader',
    top: '5%',
    left: '15%',
    description:
      'I thrive on mentoring and supporting others, often stepping into the role of SME to guide both teammates and clients. I’ve led workshops, created enablement materials, and enjoy fostering clarity and confidence across teams.'
  },
  {
    text: 'Engineer',
    top: '20%',
    left: '70%',
    description:
      'I started with a deep love for front-end development during my two bootcamps, but I’ve grown to really enjoy backend work too—especially solving complex problems, building scalable systems, and applying creative solutions that have real impact.'
  },
  {
    text: 'Technologist',
    top: '60%',
    left: '20%',
    description:
      'I love staying ahead of the curve with new technologies. Recently I’ve been learning Tailwind and Next.js, and I’m excited to explore Web 3.0 and beyond. Diving into new tools and frameworks keeps my creativity sharp.'
  },
  {
    text: 'Consultant',
    top: '75%',
    left: '75%',
    description:
      'I’ve been an implementation consultant in EdTech, Events, and Web3.0. I enjoy working directly with clients, helping them unlock the full value of their tech stack, and making complex integrations feel easy and approachable.'
  },
];


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
    controlsArray.forEach(control => {
      control.start({
        y: [0, -10, 0],
        transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
      });
    });
  }, []);

  return (
    <div className="floating-labels-wrapper">
      {floatingWords.map((word, index) => (
        <motion.div
          key={index}
          className="floating-label"
          style={{ top: word.top, left: word.left }}
          initial={{ y: 0, scale: 1 }}
          animate={controlsArray[index]}
          whileHover={{ scale: 1.5, y: 0, transition: { duration: 0.3 } }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {word.text}
        </motion.div>
      ))}

      <motion.div
        className="label-description"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: hoveredIndex !== null ? 1 : 0, y: hoveredIndex !== null ? 0 : 10 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {hoveredIndex !== null && floatingWords[hoveredIndex].description}
      </motion.div>
    </div>
  );
};

export default Landing;
