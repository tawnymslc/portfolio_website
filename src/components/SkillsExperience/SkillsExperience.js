import React, { useState } from 'react';
import useIsMobile from '../useIsMobile';
import ExperienceCard from './ExperienceCard';
import { Row, Col } from 'reactstrap';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiGooglecloud, SiVisualstudiocode } from 'react-icons/si';
import udexplogo from "../../img/udlexpogo.jpg";
import salsifyexplogo from "../../img/salsifyexplogo.jpg";
import canvasexplogo from "../../img/canvasexplogo.png";
import amazonexplogo from "../../img/amazonexplogo.jpg";
import rfexplogo from "../../img/rfexplogo.jpg";
import ebayexplogo from "../../img/ebayexplogo.jpg";
import restApiIcon from '../../assets/icons/rest-api.png'
import pythonIcon from '../../assets/icons/python.png'
import azureIcon from '../../assets/icons/azure.png'
import awsIcon from '../../assets/icons/aws.png'
import postgresIcon from '../../assets/icons/postgres.png'
import styles from './SkillsExperience.module.css'

const experienceData = [
  {
    role: "Amazon FBA Seller",
    company: "Self-Employed",
    duration: "2023 – 2025",
    description: [
    "Researched product viability, competition, availability, and ROI to identify profitable opportunities.",
    "Sourced and procured inventory while optimizing supply chain logistics.",
    "Established and managed an online store on Amazon, handling listing optimization, pricing strategies, and customer engagement.",
    "Attended workshops and training sessions to refine e-commerce, digital marketing, and business management skills."
    ],
    logo: amazonexplogo,
    primaryColor: "#FF9900" 
  },
  {
    role: "Partner Integration Engineer",
    company: "Unstoppable Domains",
    duration: "2022 – 2023",
    description: [
      "Supported over 60 partners quarterly in technical integration projects, including: Login, Resolution, and Partner API.",
      "Supported developer teams by troubleshooting and debugging integration code, with a focus on React-based implementations.",
      "Successfully merged and completed GitHub pull requests that incorporated Unstoppable's API and Libraries into various projects.",
      "The volatility of the blockchain/crypto industry led to funding challenges, affecting my role."

    ],
    logo: udexplogo,
    primaryColor: "rgb(15, 74, 274)"
  },
  {
    role: "Sr Implementation Consultant",
    company: "Salsify",
    duration: "2021 – 2022",
    description: [
      "Managed the onboarding of high-profile, strategic clients, including Coca-Cola and Hormel, overseeing 15-25 complex implementations each quarter.",
      "Led client-facing workshops, facilitated discovery calls, and provided technical support to ensure seamless integrations and client success.",
      "Served as a Team Lead, conducting 1:1 meetings and leading featured workshops to drive team development and knowledge sharing."
    ],
    logo: salsifyexplogo,
    primaryColor: "rgb(24, 182, 255)"
  },
  {
    role: "Solutions Consultant",
    company: "Rainfocus",
    duration: "2019 – 2020",
    description: [
      "Facilitated the onboarding of events by collaborating with partners, establishing expectations, configuring settings, and testing.",
      "Collaborated with project managers to formulate the comprehensive strategy for configuring a partner's event within the tool.",
      "My role was impacted by the pandemic as live events worldwide were canceled, leading to company-wide cuts."
    ],
    logo: rfexplogo,
    primaryColor: "rgb(222, 0, 69)"
  },
  {
    role: "Sr Implementation Consultant PM",
    company: "Instructure",
    duration: "2015 – 2019",
    description: 
    [
      "Led end-to-end implementation of Canvas LMS for K-12 districts and higher education institutions, ensuring seamless deployment and adoption.",
      "Recognized as the #1 Implementation Consultant, as voted by the Customer Success team, to be paired with on projects.",
      "Achieved a 95%+ deal closure rate as the lead Implementation Consultant, driving successful client onboarding and satisfaction."
    ],
    logo: canvasexplogo,
    primaryColor: "rgb(31, 105, 139)"
  },
  {
    role: "Enterprise Implementation Manager",
    company: "eBay",
    duration: "2005 – 2015",
    description: [
      "Integrated 50+ strategic brands into eBay’s marketplace. Led cross-team coordination and launched high-profile projects like the Designer Collective Landing Site for eBay fashion.",
      "Served as technical advisor for assigned projects launching their products on eBay."
    ],
    logo: ebayexplogo,
    primaryColor: "rgb(138, 198, 7)"
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
    color: '#007FFF', 
  },
];

const SkillsExperience = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState('experience');

return (
  <div className={styles.skillsTabs}>
    <div className={styles.tabButtons}>
      <button
        className={`${styles.tabButton} ${activeTab === 'experience' ? styles.active : ''}`}
        onClick={() => setActiveTab('experience')}
      >
        Experience
      </button>
      <button
        className={`${styles.tabButton} ${activeTab === 'skills' ? styles.active : ''}`}
        onClick={() => setActiveTab('skills')}
      >
        Skills
      </button>
    </div>
    <div className={styles.tabContent}>
      {activeTab === 'experience' && (
        <div className={styles.experienceContent}>
          <h3 className={styles.expskillsHeading}>Career Highlights</h3>
          <div className={styles.experienceScrollContainer}>
            <Row className="g-4">
              {experienceData.map((exp, index) => (
                <Col key={index} sm="12" md="6" lg="4" className="d-flex">
                  <ExperienceCard exp={exp} isMobile={isMobile} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
       {activeTab === 'skills' && (
        <div className={styles.skillsContent}>
          <h3 className={styles.expskillsHeading}>Technical Skills</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div
                  className={styles.skillIcon}
                  style={{ backgroundColor: skill.color + '20' }}
                >
                  {skill.icon}
                </div>
                <div className={styles.skillLabel}>{skill.label}</div>
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