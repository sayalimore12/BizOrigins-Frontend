import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }
  return stars;
};

const TestimonialSlider = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) {
    return <p className="text-center">No testimonials available.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="p-6 bg-white rounded-md text-center">
            <div className="flex justify-center mb-2 space-x-1">
              {renderStars(t.rating)}
            </div>
            <p className="text-lg italic text-gray-700 mb-2">"{t.quote}"</p>
            <h3 className="text-xl font-semibold">{t.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
