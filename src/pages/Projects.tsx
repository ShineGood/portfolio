import styles from './styles/projectstyle.module.css';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects. Designed and developed a fully responsive personal site with animated components and a clean UI.',
    technologies: 'HTML5, CSS3, JavaScript, React, GitHub Pages',
    code: 'https://github.com/ShineGood/portfolio',
    demo: 'https://portfoliokokoe.netlify.app/',
  },
  {
    title: 'Task Manager Web App',
    description: 'Drag-and-drop task manager with persistent local storage and dynamic UI updates.',
    technologies: 'JavaScript, HTML5, CSS3, JSON, Local Storage',
    code: 'https://github.com/ShineGood/drag-drop',
    demo: 'https://shinegood.github.io/drag-drop/',
  },
  {
    title: 'University Course Management System',
    description: 'Backend system for managing student enrollment using RESTful services and database integration.',
    technologies: 'Java, Spring Boot, MySQL, REST APIs',
  },
  {
    title: 'Banking Application',
    description: 'Console-based banking system showcasing object-oriented design and behavioral patterns.',
    technologies: 'Java, Design Patterns (Factory, Decorator, Observer, Strategy)',
  },
  {
    title: 'CS Department System UML & Java Implementation',
    description: 'Designed a scalable system with support for course management, waitlisting, and notifications.',
    technologies: 'UML, Java, OOP, Design Patterns',
  },
  {
    title: 'Recipe Finder App',
    description: 'Search and discover recipes based on ingredients or meal names with live API integration and responsive UI.',
    technologies: 'HTML5, CSS3, JavaScript, REST API',
    },
];

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string;
  code?: string;
  demo?: string;
};

const ProjectCard = ({title, description, technologies, code, demo }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Technologies:</strong> {technologies}</p>
      <div className={styles.buttons}>
        {code && <a aria-label={`View source code for ${title}`} href={code} target="_blank" rel="noopener noreferrer" className={styles.link}>View Code</a>}
        {demo && <a aria-label={`See live demo of ${title}`}href={demo} target="_blank" rel="noopener noreferrer" className={styles.demo}>Live Demo</a>}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

