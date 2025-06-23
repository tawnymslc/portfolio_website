import React, { useState } from 'react';
import {  Card, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const ExperienceCard = ({ exp, isMobile }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <Card style={{ minHeight: '100%', height: '100%' }} className="d-flex flex-column h-100 experience-card">
      {isMobile && <h4 className="card-duration">{exp.duration}</h4>}
      <img className="company-logo" src={exp.logo} alt={`${exp.company} logo`} />
        <CardBody className="d-flex flex-column">
            <CardText className="company">{exp.company}</CardText>
            <CardTitle tag="h6">{exp.role}</CardTitle>
            <CardText className="duration">{exp.duration}</CardText>
            <Button style={{ backgroundColor: exp.primaryColor, borderColor: exp.primaryColor, width: "fit-content", alignSelf: "center", }} onClick={toggleModal} className="more-info-btn">
                More Info
            </Button>
        </CardBody>
        <Modal isOpen={modalOpen} toggle={toggleModal} centered>
            <ModalHeader toggle={toggleModal}>{exp.role}</ModalHeader>
            <ModalBody>
            <p><strong>Company:</strong> {exp.company}</p>
            <p><strong>Duration:</strong> {exp.duration}</p>
            {Array.isArray(exp.description) ? (
                <ul>
                {exp.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
            ) : (
                <p>{exp.description}</p>
            )}
            </ModalBody>
        </Modal>
    </Card>
  );
};

export default ExperienceCard;
