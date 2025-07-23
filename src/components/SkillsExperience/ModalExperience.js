import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import styles from './SkillsExperience.module.css'

const ModalExperience = ({ exp, clearHover }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    const newState = !modalOpen;
    setModalOpen(newState);
    if (!newState && typeof clearHover === 'function') {
      clearHover(); 
    }
  };

  return (
    <div className={styles.nodeLogoWrapper}>
       <img
    src={exp.logo}
    alt={exp.company}
    className={styles.nodeLogoOnly}
    onClick={toggleModal}
    style={{ cursor: 'pointer', '--glow-color': exp.primaryColor }}
  />

      <Modal isOpen={modalOpen} toggle={toggleModal} centered>
        <ModalHeader
          style={{
            backgroundColor: exp.primaryColor,
            color: 'white',
          }}
          toggle={toggleModal}
        >
          {exp.role}
        </ModalHeader>
        <ModalBody>
          <p><strong>Company:</strong> {exp.company}</p>
          <p><strong>Duration:</strong> {exp.duration}</p>
          {Array.isArray(exp.description) ? (
            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          ) : (
            <p>{exp.description}</p>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExperience;
