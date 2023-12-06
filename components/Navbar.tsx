import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <nav className="bg-gray-300 p-2 px-1 lg:px-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/full_logo.png"
            alt="Logo"
            width={160}
            height={100}
            className="cursor-pointer rounded-lg w-24 lg:w-48"
          />
        </div>
        <div className="bg-blue-400 text-white rounded-lg p-1 lg:p-2 px-2 lg:px-4">
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className={`nav-button ${asPath === "/" ? "text-black" : ""}`}
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`nav-button ${
                  asPath === "/about" ? "text-black" : ""
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
