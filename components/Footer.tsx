import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="relative bg-gray-600">
        <div className="bg-gray-300 py-4 text-center mx-2 lg:mx-6 rounded-md shadow-2xl relative transform translate-y-4 z-10">
          <p className="font-extrabold">
            Contact us at:{" "}
            <a href="mailto:touchwith@finanzy.in" className="text-blue-900">
              touchwith@finanzy.in
            </a>
          </p>
        </div>
        <footer className="bg-gray-700 text-white p-1 lg:p-6 pt-4 flex items-center justify-between relative">
          <div className="flex items-center mt-2">
            <div className="mr-4">
              <Image src="/logo.jpeg" alt="Logo" width={64} height={64} />
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Finanzy</h4>
              <h6 className="text-sm">A financial radio for a better world</h6>
            </div>
          </div>
          <div className="flex gap-1 lg:gap-4 items-center">
            <a
              href="mailto:touchwith@finanzy.in"
              target="_blank"
              rel="noopener noreferrer"
              title="Contact Us via Email"
              className="text-3xl scale-105 text-white transition duration-300 ease-in-out"
            >
              <FiMail />
            </a>
            <a
              href="https://www.linkedin.com/company/finanzy/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-3xl scale-105 transition duration-300 ease-in-out"
            >
              <FaLinkedin />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
