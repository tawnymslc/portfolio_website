import React from 'react';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'reactstrap';
import spotifyprojectimg from '../img/spotify-project.jpg'
import sbprojectimg from '../img/sb_project.jpg'
import etlprojectimg from '../img/etl-project.jpg'
import newshomeprojectimg from '../img/news-project.jpg'

const projects = [
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
    title: 'News Homepage Clone',
    shortDescription: 'A responsive editorial-style homepage layout built with React.',
    fullDescription: 'This project recreates a clean news homepage layout using Bootstrap, media queries, and grid alignment.',
    image: newshomeprojectimg,
    technologies: 'React, Bootstrap, CSS, JSX',
    demoUrl: 'https://tawny-mathi.com/news',
    codeUrl: 'https://github.com/tawnymslc/portfolio_website/tree/main/src/projects/NewsFrontEnd',
    route: '/news',
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
