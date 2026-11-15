// FilmStrip.tsx
import React from 'react';
import Image from "next/image";
import styles from './common.module.css';

export interface FilmStripProps {
  images: string[];
  speedInSeconds?: number;
  direction?: "forward" | "backward";
}

export const FilmStrip: React.FC<FilmStripProps> = ({
  images,
  speedInSeconds = 25,
  direction = "forward",
}) => {
  const displayImages = [...images, ...images, ...images, ...images];

  return (
    <div className={styles.stripContainer}>
      <div
        className={styles.track}
        style={{
          animationDuration: `${speedInSeconds}s`,
          animationDirection: direction === "backward" ? "reverse" : "normal",
        }}
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