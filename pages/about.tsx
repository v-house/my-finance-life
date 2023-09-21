const AboutUs = () => {
  return (
    <div>
      <div className="bg-blue-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
            About Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="md:pr-8">
              <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-blue-900">
                  Our Team
                </h2>
                <p className="text-gray-700 leading-7">
                  Meet the passionate team behind My Finance Life. Our experts
                  come from diverse backgrounds in finance, technology, and
                  education. Together, we are dedicated to delivering valuable
                  insights and resources to help you navigate the complexities
                  of personal finance.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-blue-900">
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-7">
                  At My Finance Life, we are on a mission to empower individuals
                  by providing them with the knowledge and tools to take control
                  of their financial well-being. We believe that financial
                  literacy is the key to unlocking a brighter and more
                  prosperous future.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-blue-900">
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-7">
                  Our vision is a world where everyone, regardless of their
                  background or circumstances, has the ability to make informed
                  financial decisions. We aim to create a community of
                  financially savvy individuals who can achieve their financial
                  goals and aspirations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-blue-900">
                  Why Choose Us
                </h2>
                <p className="text-gray-700 leading-7">
                  With a dedicated team of experts in finance, technology, and
                  education, we offer comprehensive resources and personalized
                  guidance to help you navigate the complexities of personal
                  finance. We're committed to your financial success.
                </p>
              </section>
            </div>
            <div>
              <img
                src="https://i.pinimg.com/564x/fa/4e/11/fa4e11fe456df4f567c812f7a700986f.jpg"
                alt="Our Team"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="text-center mt-12">
            <h2 className="text-3xl font-semibold mb-4 text-blue-900">
              Heading Note
            </h2>
            <p className="text-gray-700 leading-7">Let's do it better.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
