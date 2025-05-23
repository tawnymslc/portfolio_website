import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <Card style={{ minHeight: '100%', height: '100%' }} className="d-flex flex-column">
          <img
          src={project.image}
          alt={project.title}
          className="img-fluid rounded-top"
          style={{ height: '180px', objectFit: 'cover' }}
          />
          <CardBody className="d-flex flex-column">
          <CardTitle tag="h5">{project.title}</CardTitle>
          <CardText>{project.shortDescription}</CardText>
              <div className="mt-auto">

                  <Button color="primary" onClick={toggleModal}>View More</Button>

              </div>
          </CardBody>
      </Card>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>{project.title}</ModalHeader>
        <ModalBody>
                            <Link to={project.route}>
          <img
            src={project.image}
            alt={project.title}
            className="img-fluid rounded mb-3"
          />
          </Link>
          <p><strong>Description:</strong> {project.fullDescription}</p>
          <p><strong>Technologies:</strong> {project.technologies}</p>
          <p><strong>Live Demo:</strong> <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">{project.demoUrl}</a></p>
          <p><strong>Source Code:</strong> <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">{project.codeUrl}</a></p>
          <Button color="secondary" onClick={toggleModal}>Close</Button>
        </ModalBody>
      </Modal>
    </motion.div>
  );
};

export default ProjectCard;