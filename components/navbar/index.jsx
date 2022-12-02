import { React, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';


const Header = () => {

  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => setIsToggled(!isToggled);

  return (
    <header aria-label="Site Header" className="border-b">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/">
              <span className='text-sm md:text-xl font-semibold'>edTeach</span>
            </Link>
          </div>
          <div onClick={handleClick} className={isToggled ? "window-rgb rgb-active" : "window-rgb"}></div>
          <nav
            aria-label="Site Nav"
            className={isToggled ? "nav nav-mobile" : "nav"}
          >
            <div className='w-full border-b-[1px] justify-end lg:hidden flex'>
              <div className='w-[50px] h-[50px] flex flex-col justify-center items-center text-[20px] text-gray-600 border-l-[1px]'><FaTimes onClick={handleClick} />
              </div>
              </div>

            <a className="text-sm md:text-base font-semibold text-gray-500" href="#">
              Asosiy
            </a>
            <a className="text-sm md:text-base font-semibold text-gray-500 duration-700" href="#price">
              Obuna
            </a>
            <a className="text-sm md:text-base font-semibold text-gray-500" href="">
              Xizmatlar
            </a>
            <a className="text-sm md:text-base font-semibold text-gray-500" href="">
              Kurslar
            </a>
            <a className="text-sm md:text-base font-semibold text-gray-500" href="#contact">
              Aloqa
            </a>

            
          <div className="md:hidden flex-1 items-start mt-5  flex">
            <Link
              href="/dashboard"
            >
              <a className='w-fit rounded-lg py-2 !px-12  font-medium shadow-md text-sm duration-300
                active:bg-opacity-80 cursor-pointer ease-in-out active:scale-95 bg-purple-500 
                 dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md'>Kirish</a>
            </Link>
          </div>
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <Link
              href="/dashboard"
            >
              <a className='w-fit rounded-lg py-2 px-8 font-medium shadow-md text-sm duration-300
                active:bg-opacity-80 cursor-pointer ease-in-out active:scale-95 bg-purple-500 
                 dark:bg-[#1a5cff] md:text-sm text-white hover:shadow-md'>Kirish</a>
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              className="text-sm md:text-base font-semibold z-100 rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
              onClick={handleClick}
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
