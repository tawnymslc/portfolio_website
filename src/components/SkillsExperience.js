import React, {useState, useRef} from 'react';
import useIsMobile from './useIsMobile';
import udexplogo from "../img/udlexpogo.jpg";
import salsifyexplogo from "../img/salsifyexplogo.jpg";
import canvasexplogo from "../img/canvasexplogo.png";
import amazonexplogo from "../img/amazonexplogo.jpg";
import rfexplogo from "../img/rfexplogo.jpg";
import ebayexplogo from "../img/ebayexplogo.jpg";

const experienceData = [
  {
    role: "Amazon FBA Seller",
    company: "Self-Employed",
    duration: "2023 – 2025",
    description: "Launched and managed an online store using Amazon FBA. Researched product viability, sourced inventory, optimized listings, and handled customer engagement and fulfillment.",
    logo: amazonexplogo
  },
  {
    role: "Partner Integration Engineer",
    company: "Unstoppable Domains",
    duration: "2022 – 2023",
    description: "Supported 60+ partners quarterly with Login, Resolution, and API integrations. Collaborated with dev teams to debug React-based implementations and submit production-ready GitHub PRs.",
    logo: udexplogo
  },
  {
    role: "Sr Implementation Consultant",
    company: "Salsify",
    duration: "2021 – 2022",
    description: "Led onboarding for clients like Coca-Cola and Hormel. Ran discovery calls, configured data workflows, scoped projects, and mentored team members as a team lead.",
    logo: salsifyexplogo
  },
  {
    role: "Solutions Consultant",
    company: "Rainfocus",
    duration: "2019 – 2020",
    description: "Managed onboarding and setup of enterprise event platforms. Handled configuration, stakeholder training, and project delivery across cross-functional teams.",
    logo: rfexplogo
  },
  {
    role: "Sr Implementation Consultant PM",
    company: "Instructure",
    duration: "2015 – 2019",
    description: "Delivered Canvas LMS implementations for K–12 and higher ed. Managed timelines, SSO setup, migrations, and client training across 30+ projects per quarter.",
    logo: canvasexplogo
  },
  {
    role: "Enterprise Implementation Manager",
    company: "eBay",
    duration: "2005 – 2015",
    description: "Integrated 50+ strategic brands into eBay’s marketplace. Led cross-team coordination and launched high-profile projects like the Designer Collective for seller in fashion",
    logo: ebayexplogo
  }
];

const skills = [
  'React', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap',
  'Node.js', 'MongoDB', 'Tailwind CSS', 'Next.js', 'REST APIs',
  'GitHub', 'VS Code', 'Google Cloud', 'Python', 'SQL'
];

const SkillsExperience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const isMobile = useIsMobile();

  const handleDotClick = (index) => {
    if (scrollRef.current) {
      const wrapperWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * wrapperWidth,
        behavior: "smooth"
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const wrapperWidth = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / wrapperWidth);
      setActiveIndex(index);
    }
  };

  const numDots = Math.ceil(experienceData.length / 3);

  return (
    <section className="skills-experience-section">
      <div className="experience-section">
        <div
          className="experience-scroll-wrapper"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          <h3 className="skills-heading">Career Highlights</h3>
          <div className="experience-scroll-container">
            {experienceData.map((exp, i) => (
              <div key={i} className="experience-card">
                {isMobile && <h4 className="card-duration">{exp.duration}</h4>}
                <img className="company-logo" src={exp.logo} alt={`${exp.company} logo`} />
                <h6>{exp.role}</h6>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="scroll-dots horizontal">
          {[...Array(numDots)].map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
        <h3 className="skills-heading">Technical Skills</h3>
        <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-icon">
          {skill}
        </div>
      ))}
    </div>
      </div>
    </section>
  );
};

export default SkillsExperience;