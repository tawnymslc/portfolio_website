import React, { useState } from 'react';
import useIsMobile from './useIsMobile';
import udexplogo from "../img/udlexpogo.jpg";
import salsifyexplogo from "../img/salsifyexplogo.jpg";
import canvasexplogo from "../img/canvasexplogo.png";
import amazonexplogo from "../img/amazonexplogo.jpg";
import rfexplogo from "../img/rfexplogo.jpg";
import ebayexplogo from "../img/ebayexplogo.jpg";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiGooglecloud, SiVisualstudiocode } from 'react-icons/si';
import restApiIcon from '../assets/icons/rest-api.png';
import pythonIcon from '../assets/icons/python.png'
import azureIcon from '../assets/icons/azure.png'
import awsIcon from '../assets/icons/aws.png'
import postgresIcon from '../assets/icons/postgres.png'

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
  { icon: <FaReact color="#61dafb" size="3.2em" />, label: 'React', color: '#61dafb' },
  { icon: <FaJsSquare color="#F0DB4F" size="3.2em" />, label: 'JavaScript', color: '#F0DB4F' },
  { icon: <FaNodeJs color="#68A063" size="3.2em" />, label: 'Node.js', color: '#68A063' },
  { icon: <FaHtml5 color="#E34C26" size="3.2em" />, label: 'HTML5', color: '#E34C26' },
  { icon: <FaCss3Alt color="#264de4" size="3.2em" />, label: 'CSS3', color: '#264de4' },
  {
    icon: (
      <img
        src={pythonIcon}
        alt="Python"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ),
    label: 'Python',
    color: '#FFD43B',
  },
  { icon: <SiNextdotjs color="#000000" size="3.2em" />, label: 'Next.js', color: '#000000' },
  { icon: (
      <img
        src={postgresIcon}
        alt="REST APIs"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ), 
    label: 'SQL', 
    color: '#336791' 
  },
  { icon: <SiMongodb color="#4DB33D" size="3.2em" />, label: 'MongoDB', color: '#4DB33D' },
  { icon: <SiTailwindcss color="#38BDF8" size="3.2em" />, label: 'Tailwind CSS', color: '#38BDF8' },
  { icon: <FaBootstrap color="#563d7c" size="3.2em" />, label: 'Bootstrap', color: '#563d7c' },
  {
    icon: (
      <img
        src={restApiIcon}
        alt="REST APIs"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ),
    label: 'REST APIs',
    color: '#61dafb',
  },
  { icon: <FaGithub color="#171515" size="3.2em" />, label: 'GitHub', color: '#171515' },
  { icon: <SiVisualstudiocode color="#007ACC" size="3.2em" />, label: 'VS Code', color: '#007ACC' },
  { icon: <SiGooglecloud color="#4285F4" size="3.2em" />, label: 'Google Cloud', color: '#4285F4' },
  {
    icon: (
      <img
        src={awsIcon}
        alt="AWS"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ),
    label: 'AWS',
    color: '#FF9900',
  },
  {
    icon: (
      <img
        src={azureIcon}
        alt="Azure"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ),
    label: 'Azure',
    color: '#007FFF', // Azure blue
  },
];

const SkillsExperience = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState('experience');

  return (
   <div className="skills-tabs">
    <div className="tab-buttons">
      <button
        className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
        onClick={() => setActiveTab('experience')}
      >
        Experience
      </button>
      <button
        className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
        onClick={() => setActiveTab('skills')}
      >
        Skills
      </button>
    </div>
    <div className="tab-content">
      {activeTab === 'experience' && (
        <div className="experience-content">
          <h3 className="expskills-heading">Career Highlights</h3>
            <div className="experience-scroll-container">
              {experienceData.map((exp, i) => (
                <div key={i} className="experience-card">
                  {isMobile && <h4 className="card-duration">{exp.duration}</h4>}
                  <img className="company-logo" src={exp.logo} alt={`${exp.company} logo`} />
                  <h6>{exp.role}</h6>
                  <p className="company">{exp.company}</p>
                  <p className="duration">{exp.duration}</p>
                  <p className="exp-description">{exp.description}</p>
                </div>
              ))}
            </div>
        </div>
      )}
      {activeTab === 'skills' && (
        <div className="skills-content">
          <h3 className="expskills-heading">Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div
                  className="skill-icon"
                  style={{
                    backgroundColor: skill.color + '20',
                  }}
                >
                  {skill.icon}
                </div>
                <div className="skill-label">{skill.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default SkillsExperience;