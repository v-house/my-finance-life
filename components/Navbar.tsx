import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import router from "next/router";

const Navbar = () => {
  return (
    <nav className="p-2 px-1 lg:px-6 sticky top-0 z-10 rounded-b-lg lg:rounded-b-2xl bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/full_logo.jpg"
            alt="Logo"
            width={160}
            height={100}
            className="cursor-pointer rounded-lg"
          />
        </div>
        <div className="bg-blue-900 text-white rounded-lg p-2 px-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a
                  className={`nav-button ${
                    router.pathname === "/" ? "text-blue-200" : ""
                  }`}
                >
                  Blogs
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a
                  className={`nav-button ${
                    router.pathname === "/about" ? "text-blue-200" : ""
                  }`}
                >
                  About Us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
