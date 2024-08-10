// Slider.js
import React, { useEffect, useState } from 'react';
import './SliderMen.css';
import slide1 from './menimg/men-slide1.avif';
import slide2 from './menimg/men-slide2.png';
import slide3 from './menimg/men-slide3.webp';

const slides = [
  { id: 1, image: slide1 },
  { id: 2, image: slide2 },
  { id: 3, image: slide3 },
];

const SliderMen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [deg, setDeg] = useState(0);
  const [zoom, setZoom] = useState(false);

  const nextSlide = () => {
    setZoom(true);
    setDeg(deg - 120);
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [deg]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoom(false);
    }, 1900);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <div className="slider" style={{ perspective: '1000px' }}>
        <div className="slider-wrapper" style={{ transform: `rotateY(${deg}deg)` }}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slider-item ${activeIndex === index ? 'active' : ''}`}
            >
              <img src={slide.image} alt={`Slide ${slide.id}`} className="slider-item__image" />
              <div className="slider-item__info">
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderMen;
