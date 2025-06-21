import { useState } from 'react';
import styles from '../pages/styles/gallerystyle.module.css';

const initialImages = [
    '/images/me.jpg',
    '/images/feu.jpg',
    '/images/dessert.jpg',
    '/images/quiche.jpg',
    '/images/montagne.jpg',
    '/images/cascade.jpg',
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg'
];

const Gallery = () => {
  const [images, setImages] = useState(initialImages);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDragIndex(index);
  };

  const handleDragEnd = () => {
    setDragIndex(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (index: number) => {
    if (dragIndex === null || dragIndex === index) return;

    const updated = [...images];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(index, 0, moved);
    setImages(updated);
    setDragIndex(null);
  };

  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>Photo Gallery (Drag to Reorder)</h2>
      <p style={{ fontSize: 'xx-large' }}>You can reorder the picture </p>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`${styles.card} ${dragIndex === index ? styles.dragging : ''}`}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
