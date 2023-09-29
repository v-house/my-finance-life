import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const { asPath } = useRouter();

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
              <a
                href="/"
                className={`nav-button ${
                  asPath === "/" ? "text-blue-200" : ""
                }`}
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`nav-button ${
                  asPath === "/about" ? "text-blue-200" : ""
                }`}
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
