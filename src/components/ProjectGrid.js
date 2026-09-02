import React from 'react';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'reactstrap';
import spotifyprojectimg from '../img/spotify-project.jpg'
import sbprojectimg from '../img/sb_project.jpg'
import etlprojectimg from '../img/etl-project.jpg'
import workdayprojectimg from '../img/workdayproject.png'

const projects = [
    {
    title: 'Workday Integration Platform',
    shortDescription: 'Simulates enterprise Workday integrations across Payroll and Learning systems with resilient delivery and monitoring.',
    fullDescription: "Enterprise integration demo that normalizes Workday worker events into a canonical data model, distributes updates to Payroll and Learning systems, handles retryable and non-retryable failures, and exposes operational health metrics through a live dashboard.",
    image: workdayprojectimg,
    technologies: "React, FastAPI, Python, REST APIs, Canonical Data Modeling, Retry Logic, Observability",
    demoUrl: 'https://tawny-mathi.com/workday',
    codeUrl: 'https://github.com/tawnymslc/employee-transfer-tool/blob/main/main.py',
    route: '/workday',
    },
    {
    title: 'Lender Integration Operations Tool',
    shortDescription: 'Internal tool for retrieving, transforming, and syncing deals data.',
    fullDescription: 'Built an internal integration tool that simulates how lender teams retrieve deal data from a partner API, map it to an internal LOS schema, execute synchronization workflows, and verify imported records.',
    image: sbprojectimg,
    technologies: 'React, Reactstrap, Python, FastAPI, REST APIs',
    demoUrl: 'https://tawny-mathi.com/lender',
    codeUrl: 'https://github.com/tawnymslc/portfolio_website/tree/main/src/projects/APIDataSync',
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
  {
    title: 'Spotify Artist Explorer',
    shortDescription: 'Search and explore your favorite music artists using Spotify API.',
    fullDescription: 'This app lets users search for artists, view top tracks, albums, and get insights via the Spotify API.',
    image: spotifyprojectimg,
    technologies: 'React, Axios, Spotify Web API, Node.js',
    demoUrl: 'https://tawny-mathi.com/spotify',
    codeUrl: 'https://github.com/tawnymslc/portfolio_website/tree/main/src/projects/Spotify',
    route: '/spotify',
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
