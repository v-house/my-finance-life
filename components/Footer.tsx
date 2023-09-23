import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram className="text-2xl hover:text-pink-500 hover:bg-white transition duration-300 ease-in-out" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebook className="text-2xl hover:text-blue-400 hover:bg-white transition duration-300 ease-in-out" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin className="text-2xl hover:text-blue-400 hover:bg-white transition duration-300 ease-in-out" />
          </a>
        </div>
        <p className="text-gray-400 text-sm">Connect with us on social media</p>
      </div>
    </footer>
  );
};

export default Footer;
