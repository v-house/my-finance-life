import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <>
      <nav className="bg-gray-300 p-2 px-4 lg:px-6 sticky top-0 z-10">
        <div className="mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" legacyBehavior>
              <a>
                <img
                  src="/full_logo.png"
                  alt="Logo"
                  className="cursor-pointer h-14 lg:h-16"
                />
              </a>
            </Link>
            <div className="flex gap-1 lg:gap-4 items-center">
              <a
                href="https://whatsapp.com/channel/0029VaFrrSF7dmeRbESt4R1A"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact Us via Whatsapp"
                className="text-2xl lg:text-3xl lg:scale-105 bg-gray-700 text-white p-1 rounded-lg"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:touchwith@finanzy.in"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact Us via Email"
                className="text-2xl lg:text-3xl lg:scale-105 bg-gray-700 text-white p-1 rounded-lg"
              >
                <FiMail />
              </a>
              <a
                href="https://www.linkedin.com/company/finanzy/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="text-2xl lg:text-3xl lg:scale-105 bg-gray-700 text-white p-1 rounded-lg"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-gray-700">
        <div className="mx-auto">
          <div className="flex items-center justify-evenly py-2 lg:py-4">
            <Link href="/" legacyBehavior>
              <a className="mx-auto flex justify-evenly items-center space-x-4 hover:text-white">
                <div className="shrink-0">
                  <img
                    className="h-6 w-6 lg:h-12 lg:w-12 rounded-full"
                    src="https://www.aaravinfotech.com/assets/images/og/company/blog-163466f9bd8859.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-sm lg:text-xl font-medium text-white">
                    Blogs
                  </div>
                  <p className="text-slate-300 text-xs lg:text-sm">
                    What we write
                  </p>
                </div>
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="mx-auto flex items-center space-x-4 hover:text-white">
                <div className="shrink-0">
                  <Image
                    src="/logo.jpeg"
                    width={200}
                    height={200}
                    alt=""
                    className="h-6 w-6 lg:h-12 lg:w-12 rounded-full"
                  />
                </div>
                <div>
                  <div className="text-sm lg:text-xl font-medium text-white">
                    About
                  </div>
                  <p className="text-slate-300 text-xs lg:text-sm">
                    Who we are
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
