// FilmStrip.tsx
import React from 'react';
import Image from "next/image";
import styles from './common.module.css';

interface FilmStripProps {
  images: string[];
  speedInSeconds?: number;
}

export const FilmStrip: React.FC<FilmStripProps> = ({ images, speedInSeconds = 25 }) => {
  const displayImages = [...images, ...images, ...images, ...images];

  return (
    <div className={styles.stripContainer}>
      <div 
        className={styles.track} 
        style={{ animationDuration: `${speedInSeconds}s` }}
      >
        {displayImages.map((src, index) => (
          <div key={index} className={styles.filmFrame}>
            <div className={styles.sprockets}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`top-${i}`} className={styles.sprocketHole} />
              ))}
            </div>

            <div className={styles.imageWindow}>
              <Image src={src} alt={`Film frame ${index + 1}`} width={200} height={300} unoptimized />
            </div>

            <div className={styles.sprockets}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`bot-${i}`} className={styles.sprocketHole} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};