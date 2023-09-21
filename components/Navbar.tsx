import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <span className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            My Finance Life
          </span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <span className="hover:underline cursor-pointer">Blogs</span>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <span className="hover:underline cursor-pointer">About Us</span>
            </Link>
          </li>
        </ul>
        <div className="hidden sm:flex space-x-4">
          <Link href="https://www.instagram.com/" legacyBehavior>
            <span className="hover:text-blue-400 cursor-pointer">
              <FaInstagram className="text-2xl" />
            </span>
          </Link>
          <Link href="https://www.facebook.com/" legacyBehavior>
            <span className="hover:text-blue-400 cursor-pointer">
              <FaFacebook className="text-2xl" />
            </span>
          </Link>
          <Link href="https://www.linkedin.com/" legacyBehavior>
            <span className="hover:text-blue-400 cursor-pointer">
              <FaLinkedin className="text-2xl" />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
