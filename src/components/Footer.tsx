// src/components/Footer.tsx

import styles from '../pages/styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/*  Brand/logo and back to the top  */}
      <a className={styles.logoBrand} href="#top">
        <img src="/images/SHADY.png" alt="Brand logo" />
      </a>
      <a href="#">Back to the top</a>
      <p>Thank you for visiting my site!</p>
      <p>&copy; KOKOE FIAWOO. All rights reserved.</p>
      <p>Feel free to reach out if you have any questions or would like to collaborate.</p>
      <a href="mailto:emerode.shine@gmail.com">Contact Me</a> |{' '}
      <a href="https://github.com/ShineGood" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">GitHub</a> |{' '}
      <a href="https://linkedin.com/in/kokoe-f-fiawoo-b8369a1a1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </footer>
  );
};

export default Footer;
