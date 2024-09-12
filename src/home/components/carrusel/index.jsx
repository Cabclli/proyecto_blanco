import React, { useState, useEffect } from 'react';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div style={{ position: 'relative', width: '5vm', maxWidth: '100%', overflow: 'hidden' }}>
      <a href={slides[currentIndex].url} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </a>
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          zIndex: 2
        }}
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          zIndex: 2
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
