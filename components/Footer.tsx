import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-1 lg:p-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-4">
          <Image src="/logo.jpeg" alt="Logo" width={64} height={64} />
        </div>
        <div>
          <h4 className="text-2xl font-semibold">Finanzy</h4>
          <h6 className="text-sm">A financial radio for a better world</h6>
        </div>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/company/finanzy/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="text-3xl hover:text-blue-400 transition duration-300 ease-in-out"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
