import styles from './styles/resume.module.css';

const Resume = () => {
    const openResume = () => {
    window.open('../pdf/Kokoe fiawoo resume general.pdf', '_blank');
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
          href="../pdf/Kokoe fiawoo resume general.pdf"
          download="Kokoe fiawoo resume general.pdf"
          className={styles.button}
        >
          Download Resume
        </a>

        <iframe
          src="../pdf/Kokoe fiawoo resume general.pdf"
          title="Resume"
          className={styles.iframe}
          style={{ height: '200px', width: '300px' }}
        ></iframe>

        <p style={{ marginTop: '2rem' }}>
          Feel free to contact me for any inquiries or opportunities.
        </p>

      </section>
    </>
  );
};

export default Resume;
