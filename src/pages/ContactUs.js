import React from "react";
import PageWrapper from "../components/PageWrapper";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate(); // navigation
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Get in Touch</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          We’re here to answer any questions about your business needs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
           <form className="space-y-5">
  {/* Name Field */}
  <div>
    <label
      htmlFor="name"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Your Name
    </label>
    <input
      id="name"
      name="name"
      type="text"
      placeholder="Enter your name"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fb8500] focus:outline-none"
    />
  </div>

  {/* Email Field */}
  <div>
    <label
      htmlFor="email"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Your Email
    </label>
    <input
      id="email"
      name="email"
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fb8500] focus:outline-none"
    />
  </div>

  {/* Message Field */}
  <div>
    <label
      htmlFor="message"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Your Message
    </label>
    <textarea
      id="message"
      name="message"
      rows="4"
      placeholder="Type your message"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fb8500] focus:outline-none"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="mt-4 w-full py-2 px-8 rounded-md font-semibold transition-all duration-300 shadow-md bg-[#fb8500] text-black
      hover:bg-black hover:text-[#fb8500] hover:shadow-[0_0_15px_#fb8500]"
  >
    Send Message
  </button>
</form>

          </div>

          {/* Help */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Connect with us</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Contact Number</strong>
                 <p className="text-sm">Yes, call our support at +1 (800) 123-4567.</p>
              </li>
              <li>
                <strong>Our email</strong>
                <p className="text-sm">info@bizorigins.com</p>
              </li>
               <li>
                <strong>Address</strong>
                <p className="text-sm">51 Windsor Avenue, Mineola, New York 11501</p>
              </li>
                <li>
                <strong>Office Hours</strong>
                <p className="text-sm">Mon 8:00 am - Fri 4:00 pm</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
