import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import { gallery } from '../Data/staticData';

const Gallery = ({ title, description, urls }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <article className={styles.article}>
      <figure className={styles.figure}>
        <figcaption className={styles.figcaption}>
          <h2>{title}</h2>
          <p>{description}</p>
        </figcaption>
        <button 
          className={styles.button} 
          onClick={handleToggle} 
          aria-expanded={isOpen}
          aria-controls={`gallery-section-${title.replace(/\s+/g, '-')}`}
        >
          {isOpen ? 'Close Gallery' : 'Open Gallery'}
        </button>
      </figure>
      <section 
        id={`gallery-section-${title.replace(/\s+/g, '-')}`} 
        className={`${styles.section} ${isOpen ? styles.open : ''}`}
      >
        {urls.map((url, index) => (
          <div
            key={index}
            className={styles.image}
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        ))}
      </section>
    </article>
  );
};

const Galleries = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Gallery</h1>
          <nav className={styles.breadcrumb}>
            <a href="/">Home</a> <span> / </span> <a href="/gallery">Gallery</a>
          </nav>
        </div>
      </header>
      {gallery.map((item, index) => (
        <Gallery
          key={index}
          title={item.title}
          description={item.description}
          urls={item.urls}
        />
      ))}
    </div>
  );
};

export default Galleries;
