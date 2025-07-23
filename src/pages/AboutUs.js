
import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaRocket,
  FaGlobe,
  FaUsers,
  FaClock,
  FaBook,
  FaBuilding,
  FaStar,
  FaHandshake,
  FaTasks,
} from "react-icons/fa";
import missionImg from "../assets/images/mission.jpg";
import visionImg from "../assets/images/vision.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:1337/api/about-us?populate=*";
const BASE_URL = "http://localhost:1337";

const iconmap = {
  FaCheckCircle,
  FaRocket,
  FaGlobe,
  FaUsers,
  FaClock,
  FaBook,
  FaBuilding,
  FaStar,
  FaHandshake,
  FaTasks 
}

const AboutUs = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // navigation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        //  console.log("Strapi response:", res.data);
        setAbout(res.data.data || []);
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to fetch home content.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(">>", about);
  if (!about) return <p>Loading...</p>;

  const { hero_title,
    hero_description,
    mission_title,
    mission_description,
    mission_image,
    vision_title,
    vision_description,
    vision_image,
    what_makes_us_different,
    our_impact,
     } = about;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">{hero_title}</h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            {hero_description}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {mission_title}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              {mission_description}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={missionImg}
              alt="Our Mission"
              className="rounded-lg shadow-xl object-cover w-full h-[350px]"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-last md:order-first">
            <img
              src={visionImg}
              alt="Our Vision"
              className="rounded-lg shadow-xl object-cover w-full h-[350px]"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {vision_title}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {vision_description}
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fb8500] to-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {what_makes_us_different.map((item, id) => {
              return (
                <div
                  key={id}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                >
                  <div className="text-4xl mb-4 text-[#fb8500]">  {React.createElement(iconmap[item.icon])}</div>
                  <p className="text-lg text-gray-100">{item.text}</p>
                </div>
              )

            })}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12">
            Our Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {our_impact.map((item, id) => {
              console.log("item", item);
              return (
                <div
                  key={id}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border-t-4 border-[#fb8500]"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="text-gray-700 text-base sm:text-lg">{item.text}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12">
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
    </div>
  );
};

export default AboutUs;

