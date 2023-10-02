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
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Exciting Times Ahead! 🚀
            </h2>
            <p className="text-lg mb-4">
              I am thrilled to announce a milestone in the finance world: the
              Nifty 50 has reached 20,000 points! 📈🙌
            </p>
            <p className="text-lg mb-4">
              This remarkable accomplishment not only demonstrates the
              resilience and robustness of our economy but also showcases the
              combined efforts, innovation, and determination of all
              individuals, businesses, investors, and traders who have
              contributed to this incredible journey.
            </p>
            <p className="text-lg mb-4">
              It is a testament to the strength of the markets, the resilient
              spirit of our nation, and the boundless potential that lies ahead.
              As we find ourselves on the brink of this occasion, let us not
              forget that it represents more than a number displayed on a
              screen; it symbolizes progress, prosperity, and infinite
              possibilities.
            </p>
            <p className="text-lg mb-4">
              This milestone serves as a reminder that in the realm of finance,
              there are no limits – it merely marks the start of something. Let
              us remain dedicated to making investment choices, nurturing
              innovation, and cultivating an environment where opportunities
              continue to flourish.
            </p>
            <p className="text-lg mb-4">
              It's no longer a dream. It's history from where the real game
              begins. 📈📈
            </p>
            <p className="text-lg">
              Congratulations to all those who have played a role in this
              journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
