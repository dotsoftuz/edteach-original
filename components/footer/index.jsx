import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="container mx-auto pt-24 bg-blue-50">
      <div className="">
        <div className="pb-10 border-b">
          <div className="flex items-center justify-between">
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-6 font-semibold leading-normal">Company</h3>
              <ul>
                <li className="mb-3.5">
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-3.5">
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li className="mb-3.5">
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-6 font-semibold leading-normal">Pages</h3>
              <ul>
                <li className="mb-3.5">
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Login
                  </a>
                </li>
                <li className="mb-3.5">
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Register
                  </a>
                </li>
                <li className="mb-3.5">
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Add list
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
              <h3 className="mb-6 font-semibold leading-normal">Legal</h3>
              <ul>
                <li className="mb-3.5">
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Terms
                  </a>
                </li>
                <li className="mb-3.5">
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-3.5">
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                    href="#"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-4/12 p-8">
              <div className="lg:max-w-sm">
                <h3 className="mb-6 font-semibold leading-normal">
                  Obuna bo&apos;ling.
                </h3>
                <p className="mb-5 font-sans text-gray-600 leading-relaxed">
                  Qo&apos;shimcha yangilaklardan habardor bo&apos;lib turish uchun obuna bo&apos;ling.
                </p>
                <div className="mb-3 xl:pl-6 inline-block md:max-w-xl w-full overflow-hidden border border-gray-300 rounded-xl focus-within:ring focus-within:ring-indigo-300">
                  <div className="flex flex-wrap items-center">
                    <div className="w-full xl:flex-1">
                      <input
                        className="p-2 xl:p-0 xl:pr-6 w-full font-medium bg-transparent text-gray-500 placeholder-gray-500 outline-none"
                        id="footerInput1-1"
                        type="text"
                        placeholder="Emailni kiriting."
                      />
                    </div>
                    <div className="w-full xl:w-auto">
                      <div className="block">
                        <button
                          className="py-3 px-4 w-full text-white font-semibold border border-blue-700 focus:ring focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 transition ease-in-out duration-200"
                          type="button"
                        >
                          Obuna bo&apos;lish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-6">
          <Link href="/">
            <a classNameName="cursor-pointer">
              <Image
                width={110}
                height={40}
                src="/images/logo.svg"
                alt="logo"
              />
            </a>
          </Link>
          <div className="w-auto p-4 text-sm md:text-base text-gray-600 font-medium">
            <a
              href="https://dotsoft.uz"
              target="_blank"
              className="mr-1 text-blue-600 hover:underline"
            >
              Dotsoft team.
            </a>
            &copy;2022
          </div>
          <div className="w-auto p-4">
            <div className="flex items-center justify-between">
              <div className="w-auto p-4">Icons</div>
              <div className="w-auto p-4">Icons</div>
              <div className="w-auto p-4">Icons</div>
              <div className="w-auto p-4">Icons</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
