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

        <p style={{ marginTop: '2rem' }}>
          Feel free to contact me for any inquiries or opportunities.
        </p>

      </section>

      <footer className={styles.footer}>
          <a href="#">Back to the top</a>
          <p>Thank you for visiting my resume page!</p>
          <p>&copy; KOKOE FIAWOO. All rights reserved.</p>
          <p>Feel free to reach out if you have any questions or would like to collaborate.</p>
          <a href="mailto:kokoe_fiawoo@hotmail.com">Contact Me</a> |{' '}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">GitHub</a> |{' '}
          <a href="https://linkedin.com/in/KokoeFiawoo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </>
  );
};

export default Resume;
