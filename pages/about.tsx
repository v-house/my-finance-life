import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-blue-100 py-4">
      <div className="m-1 lg:m-6">
        <div className="flex items-center mb-4">
          <Image src="/logo.jpeg" alt="Logo" width={64} height={64} />
          <div className="ml-4">
            <h1 className="text-4xl font-bold text-blue-900">Finanzy</h1>
            <h3 className="text-lg text-gray-600">
              A financial radio for a better world
            </h3>
          </div>
        </div>
        <hr className="border-t border-blue-500 my-4" />
        <div className="bg-blue-900 text-white p-6 rounded-lg flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:mr-8 mb-6 lg:mb-0">
            <Image
              src="/about_image.jpeg"
              alt="Image Description"
              width={500}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-2xl font-bold mb-4">Exciting Times Ahead! 🚀</p>
            <p className="text-lg">
              I am thrilled to announce a milestone, in the finance world; the
              Nifty 50 has reached a 20,000 points! 📈🙌
            </p>
            <p className="text-lg">
              This remarkable accomplishment not demonstrates the resilience and
              robustness of our economy. Also showcases the combined efforts,
              innovation and determination of all individuals, businesses,
              investors and traders.who have contributed to this incredible
              journey.
            </p>
            <p className="text-lg">
              It is a testament, to the strength of the markets the resilient
              spirit of our nation and the boundless potential that lies ahead.
              As we find ourselves on the brink of this occasion let us not
              forget that it represents more than a number displayed on a
              screen; it symbolizes progress, prosperity and infinite
              possibilities.
            </p>
            <p className="text-lg">
              This milestone serves as a reminder that in the realm of finance
              there are no limits – it merely marks the start of something. Let
              us remain dedicated to making investment choices nurturing
              innovation and cultivating an environment where opportunities
              continue to flourish.
            </p>
            <p className="text-lg">
              It's no longer a dream. It's a history from where the real game
              begins.📈📈
            </p>
            <p className="text-lg">
              Congratulations, to all those who have played a role in this
              journey!
            </p>
          </div>
        </div>
        <div className="container mx-auto py-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          {/* About Card */}
          <div className="bg-blue-100 p-4 rounded-lg flex-1">
            <h2 className="text-2xl font-semibold text-blue-900">ABOUT</h2>
            <p className="text-gray-700 mt-2">
              Finanzy is a newsletter where you can dive into financial
              education, financial literacy, financial news, and business
              updates. We are dedicated to providing top-class personal finance
              knowledge to the public and making them financially independent.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-blue-100 p-4 rounded-lg flex-1">
            <h2 className="text-2xl font-semibold text-blue-900">VISION</h2>
            <p className="text-gray-700 mt-2">
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

export default AboutPage;
