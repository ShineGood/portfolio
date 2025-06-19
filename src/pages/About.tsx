import styles from './styles/aboutstyle.module.css';
import React from 'react';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <header className={styles.header}>
        <h1>Welcome to My Portfolio</h1>
      </header>

      <div className={styles.container}>
        <div style={{ textAlign: 'center' }}>
          <img src="../images/photo-profil.jpg" alt="kokoe fiawoo" />
          <h1>Hi, I'm Kokoe Fiawoo</h1>
        </div>

      <div className={styles.bio}>
        <h2>About Me</h2>
        <p>
          Hello! I am a dedicated and detail-oriented Computer Science student
            with a strong passion for software development and problem-solving.
            I have hands-on experience in full-stack development, object-oriented programming,
            and working with modern web technologies such as HTML5, CSS3, JavaScript,
            TypeScript, and React.
        </p>

        <p>
          My goal is to become a proficient software engineer who builds scalable,
          user-friendly applications that solve real-world problems. I'm eager to keep learning,
          collaborate on innovative projects, and contribute to the tech community through open-source work and internships.
        </p>

        <p>
            When I'm not coding, you can find me baking, exploring new places,
            reading books, and spending time with friends and family.
        </p>

        <p>
          I believe in continuous learning and always strive to improve my craft.
          I'm excited to share my journey and connect with others in the tech community.
        </p>

        <p>
          This site is part of my term project, designed and coded by me to demonstrate what I've learned. 
          Thank you for visiting!
        </p>

        <h2>Contact Me</h2>
          <p>
            Feel free to reach out if you have any questions or just want to chat about web development!
            You can reach me at: <br /><a href="mailto:kokoe_fiawoo@hotmail.com">reach out</a>
          </p>
        </div>
      </div>

      <div className={styles.skills}>
        <h2>My Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </div>

      <footer className={styles.footer}>
        <a href="#">Back to the top</a>
        <p>Thank you for visiting my about me page!</p>
        <p>&copy; KOKOE FIAWOO. All rights reserved.</p>
        <p>Feel free to reach out if you have any questions or would like to collaborate.</p>
        <a href="mailto:kokoe_fiawoo@hotmail.com">Contact Me</a> |{' '}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
        <a href="https://linkedin.com/in/KokoeFiawoo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </div>
  );
};

export default About;
