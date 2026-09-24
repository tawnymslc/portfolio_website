import { useState } from 'react';
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
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        centered
        contentClassName={styles.experienceModal}
      >
        <ModalHeader
          toggle={toggleModal}
          className={styles.experienceModalHeader}
        >
          <div>
            <span className={styles.modalCompany}>
              {exp.company}
            </span>

            <h2 className={styles.modalRole}>
              {exp.role}
            </h2>

            <span className={styles.modalDuration}>
              {exp.duration}
            </span>
          </div>
        </ModalHeader>

        <ModalBody className={styles.experienceModalBody}>
          <div className={styles.modalAccentRow}>
            <span
              className={styles.modalAccent}
              style={{ backgroundColor: exp.primaryColor }}
            />
            <span>CAREER HIGHLIGHTS</span>
          </div>

          {Array.isArray(exp.description) ? (
            <ul className={styles.experienceHighlights}>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className={styles.experienceDescription}>
              {exp.description}
            </p>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExperience;
