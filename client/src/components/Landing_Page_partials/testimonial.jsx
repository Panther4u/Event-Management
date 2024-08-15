import React, { useState, useEffect, useRef } from 'react';


const testimonials = [
  {
    quote: "Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She also known as the best selling book author.",
    name: "Zen",
    imgSrc: "https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg"
  },
  {
    quote: "Jonathan Koletic is an American internet entrepreneur and media proprietor, and investor. He is the founder of the multi-national technology company Treymont.",
    name: "Jonathan",
    imgSrc: "https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg"
  },
  {
    quote: "Charlie Green is an European entrepreneur and media consultant, and investor. He is the founder of the Hallmark Inc.",
    name: "Charlie",
    imgSrc: "https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg"
  },
  {
    quote: "Sarah Dam is an American internet entrepreneur and media proprietor, and investor. She is the founder of the multi-national technology company Zara.",
    name: "Sarah",
    imgSrc: "https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Adjust the interval to change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateSlide = () => {
      const mainWidth = mainRef.current.offsetWidth;
      const translateValue = currentIndex * -mainWidth;
      document.getElementById('slide-row').style.transform = `translateX(${translateValue}px)`;
    };

    updateSlide();
    window.addEventListener('resize', updateSlide);
    
    return () => window.removeEventListener('resize', updateSlide);
  }, [currentIndex]);

  return (
    <div className="testimonial">
      <section className='test' ref={mainRef}>
        <h1>Testimonials</h1>
        <div className="slider">
          <div className="slide-row" id="slide-row">
            {testimonials.map((testimonial, index) => (
              <div className="slide-col" key={index}>
                <div className="content">
                  <p>{testimonial.quote}</p>
                  <h2>{testimonial.name}</h2>
                </div>
                <div className="hero">
                  <img src={testimonial.imgSrc} alt={`${testimonial.name} avatar`} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="indicator">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`btn ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
