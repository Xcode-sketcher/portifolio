"use client";

import { useState } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  // Prevenir interface de carrossel se tiver só 1 imagem
  if (images.length === 1) {
    return (
      <div className={styles.carouselContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[0]} alt="Single Preview" className={styles.singleImage} />
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.arrowLeft} onClick={prevSlide} aria-label="Anterior">
        &#10094;
      </button>

      <div className={styles.sliderWrapper}>
        <div 
          className={styles.slider} 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className={styles.slide}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={`Preview slide ${idx + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
      </div>

      <button className={styles.arrowRight} onClick={nextSlide} aria-label="Próximo">
        &#10095;
      </button>

      <div className={styles.dots}>
        {images.map((_, idx) => (
          <span 
            key={idx} 
            className={`${styles.dot} ${currentIndex === idx ? styles.dotActive : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
