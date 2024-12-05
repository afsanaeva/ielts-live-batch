"use client"
import { useState } from 'react';

export default function MediaGallery({ media:any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="relative max-w-screen-xl mx-auto">
        <img
          src={media[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full rounded-lg"
        />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
