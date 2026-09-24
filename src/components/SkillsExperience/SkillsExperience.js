import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import ModalExperience from './ModalExperience';
import useIsMobile from '../useIsMobile';
import { FaReact, FaJsSquare, FaGithub } from 'react-icons/fa';
import { SiGooglecloud, } from 'react-icons/si';
import udexplogo from "../../img/udlexpogo.jpg";
import salsifyexplogo from "../../img/salsifyexplogo.jpg";
import canvasexplogo from "../../img/canvasexplogo.png";
import lendioexplogo from "../../img/lendioexplogo.png";
import rfexplogo from "../../img/rfexplogo.jpg";
import ebayexplogo from "../../img/ebayexplogo.jpg";
import restApiIcon from '../../assets/icons/rest-api.png'
import pythonIcon from '../../assets/icons/python.png'
import awsIcon from '../../assets/icons/aws.png'
import postgresIcon from '../../assets/icons/postgres.png'
import fastApiIcon from '../../img/fastapilogo.png'
import webhooksIcon from '../../img/webhookslogo.png'
import postmanIcon from '../../img/postmanlogo.png'
import oauthIcon from '../../assets/icons/oauthlogo.webp'
import styles from './SkillsExperience.module.css'

const experienceData = [
  {
    role: "Technical Implementation Consultant PM",
    company: "Lendio",
    duration: "2025-2026",
    rolePreview: 'Led lender onboarding and API integrations, translating lending workflows into product rules and technical solutions.',
    description: [
      "The technical advisor for lenders and partners, guiding onboarding, system design, and integration strategy from kickoff through launch.",
      "Partner with customer and internal teams to gather requirements and design scalable solutions involving API integrations and financial workflows.",
      "Troubleshoot integration issues by analyzing logs, validating API requests, and guiding customers through resolution and best practices."
    ],
    logo: lendioexplogo,
    primaryColor: "rgb(80, 188, 233)",
    previewPosition: "topLeft",
  },
  {
    role: "Solutions Consultant",
    company: "Rainfocus",
    duration: "2019 – 2020",
    rolePreview: 'Designed event technology solutions and translated customer requirements into implementation strategies.',
    description: [
      "Facilitated the onboarding of events by collaborating with partners, establishing expectations, configuring settings, and testing.",
      "Collaborated with project managers to formulate the comprehensive strategy for configuring a partner's event within the tool.",
      "My role was impacted by the pandemic as live events worldwide were canceled, leading to company-wide cuts."
    ],
    logo: rfexplogo,
    primaryColor: "rgb(222, 0, 69)",
    previewPosition: "left",
  },
  {
    role: "Partner Integration Engineer",
    company: "Unstoppable Domains",
    duration: "2022 – 2023",
    rolePreview: 'Built and supported partner integrations, working across APIs, technical requirements, and partner engineering teams.',
    description: [
      "Supported over 60 partners quarterly in technical integration projects, including: Login, Resolution, and Partner API.",
      "Supported developer teams by troubleshooting and debugging integration code, with a focus on React-based implementations.",
      "Successfully merged and completed GitHub pull requests that incorporated Unstoppable's API and Libraries into various projects.",
      "The volatility of the blockchain/crypto industry led to funding challenges, affecting my role."

    ],
    logo: udexplogo,
    primaryColor: "rgb(15, 74, 274)",
    previewPosition: "topLeft",
  },
  {
    role: "Sr Implementation Consultant PM",
    company: "Instructure",
    duration: "2015 – 2019",
    rolePreview: 'Led end-to-end Canvas implementations and helped customers turn complex requirements into successful launches.',
    description: 
    [
      "Led end-to-end implementation of Canvas LMS for K-12 districts and higher education institutions, ensuring seamless deployment and adoption.",
      "Recognized as the #1 Implementation Consultant, as voted by the Customer Success team, to be paired with on projects.",
      "Achieved a 95%+ deal closure rate as the lead Implementation Consultant, driving successful client onboarding and satisfaction."
    ],
    logo: canvasexplogo,
    primaryColor: "rgb(31, 105, 139)",
    previewPosition: "right",
  },
  {
    role: "Sr Implementation Consultant",
    company: "Salsify",
    duration: "2021 – 2022",
    rolePreview: 'Led enterprise implementations across complex product-data workflows and cross-functional customer teams.',
    description: [
      "Managed the onboarding of high-profile, strategic clients, including Coca-Cola and Hormel, overseeing 15-25 complex implementations each quarter.",
      "Led client-facing workshops, facilitated discovery calls, and provided technical support to ensure seamless integrations and client success.",
      "Served as a Team Lead, conducting 1:1 meetings and leading featured workshops to drive team development and knowledge sharing."
    ],
    logo: salsifyexplogo,
    primaryColor: "rgb(24, 182, 255)",
    previewPosition: "topRight",
  },
  {
    role: "Enterprise Implementation Manager",
    company: "eBay",
    duration: "2005 – 2015",
    rolePreview: 'Led enterprise integrations for 50+ brands, connecting customer systems to eBay’s marketplace.',
    description: [
      "Integrated 50+ strategic brands into eBay’s marketplace. Led cross-team coordination and launched high-profile projects like the Designer Collective Landing Site for eBay fashion.",
      "Served as technical advisor for assigned projects launching their products on eBay."
    ],
    logo: ebayexplogo,
    primaryColor: "rgb(138, 198, 7)",
    previewPosition: "right",
  }
];

const skills = [
  { icon: (
      <img
        src={pythonIcon}
        alt="python"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ),
    label: 'Python',
    color: '#FFD43B',
    category: 'Integration & Backend',
  },
  { icon: (
      <img
        src={restApiIcon}
        alt="rest apis"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ),
    label: 'REST APIs',
    color: '#61dafb',
    category: 'Integration & Backend',
  },
  { icon: <FaReact color="#61dafb" size="3.2em" />, label: 'React', color: '#61dafb', category: 'Application Development' },
  { icon: <FaJsSquare color="#F0DB4F" size="3.2em" />, label: 'JavaScript', color: '#F0DB4F', category: 'Application Development' },
  { icon: (
      <img
        src={postgresIcon}
        alt="postgres"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ), 
    label: 'PostgreSQL', 
    color: '#336791',
    category: 'Integration & Backend'
  },
  { icon: (
      <img
        src={webhooksIcon}
        alt="webhooks"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ),
    label: 'Webhooks', 
    color: '#DA4863',
    category: 'Integration & Backend',
  },
  { icon: (
      <img
        src={oauthIcon}
        alt="oauth"
        style={{ width: '40px', height: '40px', objectFit: 'contain', transform: 'scale(1.6)' }}
      />
    ),
    label: 'OAuth', 
    color: '#000',
    category: 'Integration & Backend',
  },
  { icon: (
    <img
      src={fastApiIcon}
      alt="fast aPIs"
      style={{ width: '40px', height: '40px', objectFit: 'contain', transform: 'scale(1.6)' }}
    />
    ), 
    label: 'FastAPI', 
    color: '#3D948B', 
    category: 'Integration & Backend' 
  },
  { icon: (
      <img
        src={awsIcon}
        alt="AWS"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ),
    label: 'AWS',
    color: '#FF9900',
    category: 'Cloud & Delivery',
  },
  { icon: <FaGithub color="#171515" size="3.2em" />, label: 'GitHub', color: '#171515', category: 'Cloud & Delivery'},
  { icon: <SiGooglecloud color="#4285F4" size="3.2em" />, label: 'Google Cloud', color: '#4285F4', category: 'Cloud & Delivery' },
  { icon: (
      <img
        src={postmanIcon}
        alt="postman"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ),
    label: 'Postman',
    color: '#e5783c', 
    category: 'Cloud & Delivery',
  },
];

const SkillsExperience = () => {
  
  const [activeTab, setActiveTab] = useState('experience');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobile = useIsMobile(); 
  const experienceList = isMobile ? experienceData : [...experienceData].reverse();

  const skillCategories = [
    'Integration & Backend',
    'Application Development',
    'Cloud & Delivery'
  ];


return (
      <section className={styles.expSkillsSection}>
        <div className={styles.expSkillsIntro}>
          <span className={styles.eyebrow}>EXPERIENCE & EXPERTISE</span>
          <h2>Experience behind the work.</h2>
          <p>
            <strong>Built through years of solving real customer problems.</strong>
          </p>
          <p>
            My background spans implementation, integrations, solution design, engineering, and enterprise delivery.
          </p>
        </div>
        <div>
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
                <h3 className={styles.expskillsHeading}>CAREER EXPERIENCE</h3>
                <h4 className={styles.skillCategoryHeading}>Where I've put it into practice</h4>
                <h4 className={styles.skillCategoryHeading}> 10+ years working with customers, products, integrations, and technology.</h4>
                <div className={styles.nodeGrid}>
                  {experienceList.map((exp, index) => {

                    const positionClass =
                      styles[`preview${exp.previewPosition.charAt(0).toUpperCase()}${exp.previewPosition.slice(1)}`];

                    return (
                      <div
                        key={index}
                        className={`${styles.nodeLogoWrapper} ${positionClass} ${
                          hoveredIndex === index ? styles.active : ""
                        } ${hoveredIndex !== null && hoveredIndex !== index ? styles.dimmed : ""}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{ marginTop: index % 2 === 0 ? "0rem" : "14rem" }}
                      >
                        <ModalExperience exp={exp} clearHover={() => setHoveredIndex(null)} />
                        <div className={styles.companyName}>{exp.company}</div>
                        <div className={styles.duration}>{exp.duration}</div>
                        <div className={styles.role}>{exp.role}</div>
                        <AnimatePresence>
                          {hoveredIndex === index && (
                            <motion.div
                              className={styles.previewCard}
                              style={{ "--accent": exp.primaryColor }}
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.98 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className={styles.previewHeader}>
                                <div>
                                  <div className={styles.previewRole}>{exp.rolePreview}</div>
                                </div>
                                <span
                                  className={styles.previewDot}
                                  style={{ background: exp.primaryColor }}
                                />
                              </div>
                              <div className={styles.previewHint}>Click for full details</div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {activeTab === 'skills' && (
              <div className={styles.skillsContent}>
                <h3 className={styles.expskillsHeading}>
                  TECHNICAL SKILLS
                </h3>
                {skillCategories.map((category) => (
                  <div
                    key={category}
                    className={styles.skillCategory}
                  >
                    <h4 className={styles.skillCategoryHeading}>
                      {category}
                    </h4>

                    <div className={styles.skillsGrid}>
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill) => (
                          <div
                            key={skill.label}
                            className={styles.skillItem}
                          >
                            <div
                              className={styles.skillIcon}
                              style={{
                                backgroundColor: skill.color + '20',
                                '--skill-color': skill.color
                              }}
                            >
                              {skill.icon}
                            </div>

                            <div className={styles.skillLabel}>
                              {skill.label}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
  </section>
  );
};

export default SkillsExperience;