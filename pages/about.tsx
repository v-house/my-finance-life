// components/AboutUs.tsx

import React from "react";
import { FaRegLightbulb, FaChartPie, FaBullseye } from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
          <p className="text-lg text-gray-900 mt-2">
            Finanzy is your source for financial knowledge and independence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* ABOUT */}
          <div className="bg-gradient-to-b from-blue-400 to-blue-600 p-6 rounded-lg shadow-md">
            <FaRegLightbulb className="text-5xl text-blue-900 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-blue-900 text-center mb-4">
              About
            </h2>
            <p className="text-lg text-gray-200">
              Finanzy is a newsletter where you can dive into financial
              education, financial literacy, financial news, and business
              updates. We are dedicated to providing top-class personal finance
              knowledge to the public and making them financially independent.
            </p>
          </div>

          {/* MISSION */}
          <div className="bg-gradient-to-b from-blue-400 to-blue-600 p-6 rounded-lg shadow-md">
            <FaChartPie className="text-5xl text-blue-900 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-blue-900 text-center mb-4">
              Mission
            </h2>
            <p className="text-lg text-gray-200">
              At Finanzy, we are passionate about helping our readers achieve
              financial independence. We aim to give them the knowledge and
              tools to manage their money effectively, invest wisely, and plan
              for their future. Our goal is to empower individuals to take
              control of their financial well-being and build a solid foundation
              for long-term financial success.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-gradient-to-b from-blue-400 to-blue-600 p-6 rounded-lg shadow-md">
            <FaBullseye className="text-5xl text-blue-900 mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold text-blue-900 text-center mb-4">
              Vision
            </h2>
            <p className="text-lg text-gray-200">
              "To be the trusted source of financial insights, empowering our
              readers with the knowledge to make informed decisions and achieve
              financial success.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
