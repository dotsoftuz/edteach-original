import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo.svg';

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => setIsToggled(!isToggled);

  return (
    <nav className="sticky left-0 top-0 z-50 bg-white/90 w-full backdrop-blur">
      <div className="mx-auto h-[70px] container">
        <div className="relative flex h-full items-center justify-between border-b border-slate-500/10">
          {/* <!-- logo --> */}
          <div className="w-[15rem] max-w-full text-2xl font-semibold">
            <Link href="#">
              <Image src={logo} />
            </Link>
          </div>
          {/* <!-- menu --> */}
          <div className="flex w-full items-center justify-between">
            <nav
              className={`${
                isToggled ? 'block ' : 'hidden'
              }  absolute right-0 top-[90px] w-full max-w-[350px] rounded-lg border border-blue-200 bg-white py-5 px-6 shadow-lg shadow-blue-400/5 transition-all lg:static lg:block lg:max-w-full lg:border-none lg:shadow-none lg:bg-transparent lg:px-0 lg:py-0`}
              id="navbarCollapse"
            >
              <ul className="flex flex-col justify-center gap-8 lg:flex-row">
                <li>
                  <Link href="#">
                    <a className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base">
                      Asosiy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#about">
                    <a className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base">
                      Haqida
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#services">
                    <a className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base">
                      Xizmatlar
                    </a>
                  </Link>
                </li>
         
                <li>
                  <Link href="#price">
                    <a className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base">
                      Obuna
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <a className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base">
                      Aloqa
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- menu btn --> */}
          <div className="flex">
            <Link href="/dashboard">
              <a className="mr-10 hidden rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 duration-200 hover:bg-blue-600 sm:block lg:mr-0">
                Kirish
              </a>
            </Link>
            <button
              onClick={handleClick}
              id="navbarToggler"
              className="block lg:hidden"
            >
              <FiMenu
                name="menu-outline"
                className="text-3xl  text-blue-500"
              ></FiMenu>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
