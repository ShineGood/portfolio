import { useState, useEffect } from 'react';
import styles from '../pages/styles/gallerystyle.module.css';

const images = [
  '/images/me.jpg',
  '/images/feu.jpg',
  '/images/dessert.jpg',
  '/images/quiche.jpg',
  '/images/montagne.jpg',
  '/images/cascade.jpg',
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex !== null) {
      if (e.key === 'ArrowLeft') showPrevious(e as any);
      if (e.key === 'ArrowRight') showNext(e as any);
      if (e.key === 'Escape') setSelectedIndex(null);
    }
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [selectedIndex]);

  return (
    <>
      <section className={styles.gallery}>
        <h2 className={styles.title}>Photo Gallery</h2>
        <div className={styles.grid}>
          {images.map((src, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className={styles.modal} onClick={() => setSelectedIndex(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.navButton} onClick={showPrevious}>
                ←
              </button>
              <img
                src={images[selectedIndex]}
                alt="Enlarged"
                className={styles.modalImage}
              />
              <button className={styles.navButton} onClick={showNext}>
                →
              </button>
            </div>
          </div>
        )}
      </section>
      <footer className={styles.footer}>
        <a href="#">Back to the top</a>
        <p>Thank you for visiting my gallery page!</p>
        <p>&copy; Kokoe Fiawoo. All rights reserved.</p>
        <a href="mailto:kokoe_fiawoo@hotmail.com">Contact Me</a> |
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </>
  );
};

export default Gallery;
