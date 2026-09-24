import React from 'react';
import ProjectCard from './ProjectCard';

import toolprojectimg from '../../img/tool_project.png'
import sbprojectimg from '../../img/sb_project.jpg'
import etlprojectimg from '../../img/etl-project.jpg'
import workdayprojectimg from '../../img/workday_project.png'

import styles from './ProjectGrid.module.css';

const projects = [
  {
    title: 'Client Employee Transfer Tool',
    category: 'HR SYSTEM INTEGRATION',
    shortDescription:
      'Migrate employee data between HR platforms with validation, mapping, duplicate protection, and reporting.',
    image: toolprojectimg,
    highlights: ['Validation', 'Data Mapping', 'PostgreSQL', 'Reporting'],
    route: '/tool',
  },
  {
    title: 'Workday Integration Platform',
    category: 'EVENT-DRIVEN INTEGRATION',
    shortDescription:
      'Process Workday worker events across Payroll and Learning systems with transformation, retry handling, and observability.',
    image: workdayprojectimg,
    highlights: ['Canonical Model', 'Multi-System Delivery', 'Retry Logic', 'Observability'],
    route: '/workday',
  },
  {
    title: 'Lender API Integration',
    category: 'API / DATA INTEGRATION',
    shortDescription:
      'Retrieve partner deals, normalize source data, transform schemas, and sync records into a lender LOS.',
    image: sbprojectimg,
    highlights: ['REST APIs', 'Transformation', 'Data Mapping', 'Sync'],
    route: '/lender',
  },
  {
    title: 'Product Data ETL Pipeline',
    category: 'DATA PIPELINE',
    shortDescription:
      'Extract external product data, transform pricing data into category-level metrics, and visualize the processed dataset.',
    image: etlprojectimg,
    highlights: ['Python', 'FastAPI', 'ETL', 'Recharts'],
    route: '/etl',
  },
];

const ProjectGrid = () => {

  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsIntro}>
        <span className={styles.eyebrow}>SELECTED WORK</span>
        <h2>See how I put it into practice.</h2>
        <p>
          Projects built around real integration problems, from requirements
          and data transformation to APIs, system design, and observability.
        </p>
      </div>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
