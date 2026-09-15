import React from 'react';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'reactstrap';
import toolprojectimg from '../img/tool_project.png'
import sbprojectimg from '../img/sb_project.jpg'
import etlprojectimg from '../img/etl-project.jpg'
import workdayprojectimg from '../img/workday_project.png'

const projects = [
    {
      title: 'Client Employee Transfer Tool',
      shortDescription: 'Migrate employee data between HR platforms with validation, mapping, duplicate protection, and reporting.',
      fullDescription: 'A client-focused employee migration tool that simulates transferring active employees from Workstream to Toast. The integration validates required employee data, prevents duplicates, translates location and position values using customer-configured mappings, persists migration history in PostgreSQL, and provides downloadable migration reports.',
      image: toolprojectimg,
      technologies: 'FastAPI, Python, PostgreSQL, SQLAlchemy, REST APIs',
      demoUrl: 'https://tawny-mathi.com/tool',
      codeUrl: 'https://github.com/tawnymslc/employee-transfer-tool',
      route: '/tool',
    },
    {
      title: 'Workday Integration Platform',
      shortDescription: 'Simulates enterprise Workday integrations across Payroll and Learning systems with resilient delivery and monitoring.',
      fullDescription: 'Enterprise integration demo that normalizes Workday worker events into a canonical data model, distributes updates to Payroll and Learning systems, handles retryable and non-retryable failures, and exposes operational health metrics through a live dashboard.',
      image: workdayprojectimg,
      technologies: "React, FastAPI, Python, REST APIs, Canonical Data Modeling, Retry Logic, Observability",
      demoUrl: 'https://tawny-mathi.com/workday',
      codeUrl: 'https://github.com/tawnymslc/employee-transfer-tool/blob/main/main.py',
      route: '/workday',
    },
    {
      title: 'Lender API Integration',
      shortDescription: 'Integration for retrieving, transforming, and syncing deals data into internal LOS.',
      fullDescription: 'Simulates a lender retrieving deal data from Lendio via REST APIs, transforming it into an internal data model, and syncing it to a downstream system. Demonstrates API integration, data mapping, transformation, and end-to-end integration workflows using Python/FastAPI and React.',
      image: sbprojectimg,
      technologies: 'React, Reactstrap, Python, FastAPI, REST APIs',
      demoUrl: 'https://tawny-mathi.com/lender',
      codeUrl: 'https://github.com/tawnymslc/portfolio-python-api/blob/main/main.py',
      route: '/lender',
  },
  {
      title: 'ETL Dashboard',
      shortDescription: 'Visualize product pricing by category using an ETL pipeline.',
      fullDescription: 'This dashboard extracts data from a mock API, transforms it in a Python backend, and loads it into a React chart.',
      image: etlprojectimg ,
      technologies: 'React, Recharts, Python, FastAPI',
      demoUrl: 'https://tawny-mathi.com/etl',
      codeUrl: 'https://github.com/tawnymslc/portfolio_website/tree/main/src/projects/ETLDashboard',
      route: '/etl',
  },
];

const ProjectGrid = () => {
  
  const fullRows = Math.floor(projects.length / 4); // 4 per row now
  const remainder = projects.length % 4;

  return (
    <Container fluid className="mt-5">
      <Row className="g-4">
        {projects.map((project, index) => {
          const isInLastRow = index >= fullRows * 4;
          const centerThree = remainder === 3 && isInLastRow;
          const centerTwo = remainder === 2 && isInLastRow;
          const centerOne = remainder === 1 && isInLastRow;

          let colClass = 'd-flex';

          if (centerThree || centerTwo || centerOne) {
            colClass += ' justify-content-center';
          }

          return (
            <Col key={index} sm="12" md="6" lg="3" className={colClass}>
              <ProjectCard project={project} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProjectGrid;
