import styles from './styles/resume.module.css';

const Resume = () => {
    const openResume = () => {
    window.open('../pdf/Kokoe-Fiawoo.pdf', '_blank');
  };

  return (
    <>
      <section className={styles.resumeSection}>
        <h2 className={styles.heading}>My Resume</h2>
        <p className={styles.text}>
          Here you can view my professional background, 
          skills, and experiences or download my resume below:
        </p>

        <p>Click the button below to view my resume in a new tab.</p>
        
        <button onClick={openResume} className={styles.button}>
          View My Resume
        </button>

        <a
          href="../pdf/Kokoe-Fiawoo.pdf"
          download="Kokoe-Fiawoo-Resume.pdf"
          className={styles.button}
        >
          Download Resume
        </a>

        <p style={{ marginTop: '2rem' }}>
          Feel free to contact me for any inquiries or opportunities.
        </p>

      </section>
    </>
  );
};

export default Resume;
