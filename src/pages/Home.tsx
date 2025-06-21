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
              alt="Portrait of Kokoe Fiawoo"
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
            <a className={styles.button} href="https://portfoliokokoe.netlify.app/about">More about me</a>
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
            <a className={styles.button} href="https://portfoliokokoe.netlify.app/resume">See full resume</a>

          </div>
          </section>

        </main>
        </>
    )
};

export default Home;