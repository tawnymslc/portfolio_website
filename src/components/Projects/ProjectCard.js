import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, reverse }) => {
  return (
    <motion.article
      className={`${styles.projectRow} ${reverse ? styles.reverse : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        to={project.route}
        className={styles.projectImageLink}
        aria-label={`Explore ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
      </Link>

      <div className={styles.projectContent}>
        <span className={styles.projectCategory}>
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.shortDescription}</p>

        <div className={styles.projectTags}>
          {project.highlights.map((highlight) => (
            <span key={highlight}>
              {highlight}
            </span>
          ))}
        </div>
        <Link to={project.route} className={styles.projectLink}>
          Explore project <span>→</span>
        </Link>
      </div>
    </motion.article>
  );
};

export default ProjectCard;