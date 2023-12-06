import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <>
      <nav className="bg-gray-300 p-2 px-4 lg:px-6 sticky top-0 z-10">
        <div className="mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" legacyBehavior>
              <a>
                <Image
                  src="/full_logo.png"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="cursor-pointer text-2xl"
                />
              </a>
            </Link>
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
                  <img
                    className="h-6 w-6 lg:h-12 lg:w-12 rounded-full"
                    src="./logo.jpeg"
                    alt=""
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
