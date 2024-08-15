import React, { useState, useEffect } from "react";
import { bannerImgOne, bannerImgTwo, bannerImgThree } from '../../../public/images/assets';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [bannerImgOne, bannerImgTwo, bannerImgThree];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`banner-image ${
            index === currentImageIndex ? "active" : ""
          } ${isTransitioning ? "transitioning" : ""}`}
        />
      ))}
      <div className="banner_title">
        <h1>Planning Your Everlasting Memories</h1>
        <p>Everyday is an Event… we turn your special ones into memories… You dream it.. we make it happen…</p>
      </div>
    </div>
  );
};

export default Banner;
