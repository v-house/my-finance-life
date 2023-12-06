import React from "react";

const trial = () => {
  return (
    <div>
      <section className="py-8 lg:py-20 bg-white">
        <div className="flex flex-col px-8 mx-auto space-y-6 lg:space-y-12 max-w-7xl xl:px-12">
          <div className="relative">
            <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              About Us
            </h2>
            <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
              Finanzy is your source for financial knowledge and independence.
            </p>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                className="rounded-lg shadow-xl"
                src="./about11.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                Financial Empowerment Platform
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl font-bold">
                Who we are
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                Finanzy is a newsletter where you can dive into financial
                education, financial literacy, financial news, and business
                updates. We are dedicated to providing top-class personal
                finance knowledge to the public and making them financially
                independent.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img
                className="rounded-lg shadow-xl"
                src="./about_image1.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                Empowering Financial Futures
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl font-bold">
                What we aim for
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                At Finanzy, we are passionate about helping our readers achieve
                financial independence. We aim to give them the knowledge and
                tools to manage their money effectively, invest wisely, and plan
                for their future. Our goal is to empower individuals to take
                control of their financial well-being and build a solid
                foundation for long-term financial success.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                className="rounded-lg shadow-xl"
                src="https://www.provise.com/wp-content/uploads/2020/07/AdobeStock_331489342.jpeg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                Enabling Informed Success
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl font-bold">
                What's our Vision
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                To be the trusted source of financial insights, empowering our
                readers with the knowledge to make informed decisions and
                achieve financial success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default trial;
