// import React from 'react';
// import Slider from 'react-slick';
// import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// const testimonials = [
//   {
//     name: 'Jane D.',
//     quote: 'As a first-time business owner, I needed guidance. BizOrigins walked me through every step right from choosing the right structure to filing my documents. Super helpful and fast',
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     rating: 5,
//   },
//   {
//     name: 'Carlos M.',
//     quote: 'Everything was simple and upfront. No confusing legal talk or surprise fees. I felt confident throughout the whole process. Would definitely recommend their service',
//     image: 'https://randomuser.me/api/portraits/men/46.jpg',
//     rating: 4.5,
//   },
//   {
//     name: 'Alice J',
//     quote: 'They helped me file my LLC, get my EIN, and even answered my random questions along the way. Very satisfied with the customer support team!',
//     image: 'https://randomuser.me/api/portraits/women/68.jpg',
//     rating: 4,
//   },
// ];

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//       },
//     },
//   ],
// };

// // Helper function to display stars
// const renderStars = (rating) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     if (i <= Math.floor(rating)) {
//       stars.push(<FaStar key={i} className="text-yellow-400" />);
//     } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
//       stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
//     } else {
//       stars.push(<FaRegStar key={i} className="text-yellow-400" />);
//     }
//   }
//   return stars;
// };

// const TestimonialSlider = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12">
//       <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
//       <Slider {...settings}>
//         {testimonials.map((t, index) => (
//           <div key={index} className="p-6 bg-white shadow-md rounded-md text-center">
//             <img
//               src={t.image}
//               alt={t.name}
//               className="w-20 h-20 mx-auto rounded-full mb-4"
//             />
//             <div className="flex justify-center mb-2 space-x-1">
//               {renderStars(t.rating)}
//             </div>
//             <p className="text-lg italic text-gray-700 mb-2">"{t.quote}"</p>
//             <h3 className="text-xl font-semibold">{t.name}</h3>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default TestimonialSlider;

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
