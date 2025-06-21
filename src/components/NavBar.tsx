import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../pages/styles/navbarstyle.module.css'; // Adjust the path/filename if needed

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" onClick={closeMenu}>My Portfolio</Link>
      </div>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul 
      className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        <li>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ''}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ''}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ''}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/dragdropgal" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ''}>
            Drag and Drop Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
