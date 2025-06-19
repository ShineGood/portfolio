import styles from './styles/homestyle.module.css';

const Home = () => {
    return (
      <>
      <main id="top">
        <section className={styles.home}>
          <div className={styles.profileSection}>
            <div>
              <h4>Hey, I'm Kokoe Fiawoo 👋🏾</h4>
              <h2 className={styles.tagline1}>
                Aspiring software developer passionate about building 
                web applications and learning new technologies.
              </h2>
              
            </div>
            <img
              src="/images/photo-profil.jpg"
              alt="Profile"
              className={styles.profileImage}
            />
          </div>

          <div className={styles.aboutSection}>
            <div>
            <h1>About Me</h1>
            <p className={styles.tagline}>
              Hello! I am a dedicated and detail-oriented Computer 
              Science student with a strong passion for software development 
              and problem-solving.I have hands-on experience in full-stack development.
            </p>
            <br />
            <a className={styles.button} href="/about">More about me</a>
            <br />
            </div>
            <img
              src="/images/picou.jpg"
              alt="Profile"
              className={styles.profileImage}
            />
          </div>

          <div className={styles.resumeSection}>
            <h1>Take a look at my resume</h1>
            <br />
            <a className={styles.button} href="/resume">See full resume</a>

          </div>
          </section>

        </main>

        <footer className={styles.footer}>
        {/*  Brand/logo and back to the top  */}
        <a className={styles.logoBrand} href="#top">
          <img src="/images/SHADY.png" alt="Brand logo" />
        </a>
        <p className={styles.footerContent}> &copy; Copyright 2025
           My Portfolio Kokoe Fiawoo. All rights reserved.</p>
        <p>Thank you for visiting my portfolio!</p>
        <p>Feel free to reach out if you have any questions
           or would like to collaborate.</p>
        <a href="mailto:kokoe_fiawoo@hotmail.com">Contact Me</a> |{' '}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
        <a href="https://linkedin.com/in/KokoeFiawoo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </footer>

        </>
    )
};

export default Home;