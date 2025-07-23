import React, { useEffect, useState } from "react";
import axios from "axios";
import bannerFallback from "../assets/images/banner.jpg";
import TestimonialSlider from "../components/TestimonialSlider";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// const API = "http://localhost:1337/api/homes?populate=*";
// const BASE_URL = "http://localhost:1337";

const api = axios.create ({
  baseURL: process.env.REACT_APP_API_URL,
})

const API = "/api/homes?populate=*";
const BASE_URL = api;
console.log(API);
const Home = () => {
  const [home, setHome] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // navigation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(API);
        setHome(res.data.data || []);
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to fetch home content.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading content...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      {home.length === 0 && <p className="text-center mt-10">No content found.</p>}

      {home.map((item) => {
        const {
          id,
          title_heading,
          tagline,
          banner_image,
          choose_us_title,
          choose_us_des,
          why_choose_us,
          ready_to_start,
          testimonial_1,
          testimonial_1_jane,
          testimonial_2,
          testimonial_2_carlos,
          testimonial_3,
          testimonial_3_alice,
        } = item;

        const bannerUrl = banner_image?.[0]?.url
          ? `${BASE_URL}${banner_image[0].url}`
          : bannerFallback;

        // Build testimonials array dynamically from the API data
        const testimonials = [
          { name: testimonial_1_jane, quote: testimonial_1, rating: 5 },
          { name: testimonial_2_carlos, quote: testimonial_2, rating: 4.5 },
          { name: testimonial_3_alice, quote: testimonial_3, rating: 4 },
        ];

        //7 steps
        const steps = [
          "Choose your state of formation",
          "Pick a unique business name",
          "Appoint a registered agent",
          "File Articles of Organization",
          "Create an LLC Operating Agreement",
          "Apply for an EIN (Employer Identification Number)",
          "Comply with ongoing state requirements",
        ];

        return (
          <React.Fragment key={id}>
            {/* Banner Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <img
                src={bannerUrl}
                alt="BizOrigin Banner"
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>
              <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
                <div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
                    {title_heading}
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
                    {tagline}
                  </p>
                  <br />
                  {/* Button */}
                  <button
                    onClick={() => navigate("/contact")}
                    className="mt-4 py-2 px-8 rounded-md font-semibold transition-all duration-300 shadow-md bg-[#fb8500] text-black
                  hover:bg-black hover:text-[#fb8500] hover:shadow-[0_0_15px_#fb8500]"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  {choose_us_title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12">
                  {choose_us_des}
                </p>
               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                   {/* Features Grid */}
                {why_choose_us.map((item,id)=>{
                  return( <div key={id} className="bg-gray-50 p-6 rounded-lg shadow-[0px_1px_2px_0px_#fb8500] hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>);
                })}
                </div>

                {/* CTA */}
                <div className="mt-12">
                  <p className="text-lg sm:text-xl text-gray-800 font-medium mb-4">
                    {ready_to_start}
                  </p>
                  {/* Button */}
                  <button
                    onClick={() => navigate("/contact")}
                    className="mt-4 py-2 px-8 rounded-md font-semibold transition-all duration-300 shadow-md bg-[#fb8500] text-black
                  hover:bg-black hover:text-[#fb8500] hover:shadow-[0_0_15px_#fb8500]"
                  >
                    Get Started
                  </button>

                </div>
              </div>
            </section>

            {/* 7 steps */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Easy steps to start your LLC
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                  Follow these simple steps to start your LLC with confidence.
                </p>

                {/* Steps List */}
                <ul className="text-left space-y-4">
                  {steps.map((step, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="text-[#fb8500] text-xl">
                        <FaCheckCircle />
                      </div>
                      <span className="text-gray-800 text-lg font-medium">
                        {index + 1}. {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Testimonial Section */}
            <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
              <TestimonialSlider testimonials={testimonials} />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Home;
