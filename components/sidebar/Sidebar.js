import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdOutlineSpaceDashboard, MdMenu } from 'react-icons/md';
import { IoExitOutline } from 'react-icons/io5';
import { FiUser, FiLink } from 'react-icons/fi';
import { BiTestTube } from 'react-icons/bi';
import { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useUserContext } from '../../context/userContext';

const Sidebar = ({ children }) => {
  const [sidebarShowDesktop, setSidebarShowDesktop] = useState(true);
  const [sidebarShowMobile, setSidebarShowMobile] = useState(true);
  const router = useRouter();
  const { logoutUser, userName } = useUserContext();

  const toggleSidebarDesktop = () => {
    setSidebarShowDesktop(!sidebarShowDesktop);
  };

  const toggleSidebarMobile = () => {
    setSidebarShowMobile(!sidebarShowMobile);
  };

  const Menus = [
    {
      title: 'Asosiy Sahifa',
      path: '/dashboard',
      icon: <MdOutlineSpaceDashboard />,
    },
    { title: 'Testlarim', path: '/dashboard/question', icon: <BiTestTube /> },
    { title: 'Foydali', path: '/dashboard/useful', icon: <FiLink /> },
    { title: 'Profil', path: '/dashboard/profile', icon: <FiUser /> },
    {
      title: 'Chiqish',
      path: '',
      icon: <IoExitOutline />,
      logout: true,
    },
  ];

 

  const handleClick = () => {
    logoutUser();
    router.push('/');
  };

  return (
    <div className="flex">
      <aside
        className={`
          ${
            sidebarShowMobile
              ? 'transform -translate-x-[100%] md:translate-x-0'
              : 'transform translate-x-0 bg-white'
          } fixed top-0 left-0 z-50 transition duration-300`}
      >
        <div
          className={`${
            sidebarShowDesktop ? 'w-[15rem] sm:w-[17rem] md:w-[20rem]' : 'w-[4.5rem] md:w-24'
          } h-screen shadow-2xl bg-white duration-200 space-y-6 p-2 md:p-5`}
        >
          <div className="relative flex items-center">
            <Link href="/dashboard/profile">
              <div className="flex items-center justify-center rounded-2xl border-2 border-gray-300 bg-transparent w-fit p-0.5 cursor-pointer">
                <div className="group relative">
                  <div className="rounded-full w-12 h-12 bg-blue-500" />
                  <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white">
                    {userName.charAt(0)}
                  </h2>
                </div>
              </div>
            </Link>
            <div
              className={
                sidebarShowDesktop ? 'relative ml-2 md:ml-4' : 'hidden'
              }
            >
              <h2 className="text-[#242627] font-semibold text-base md:text-lg truncate">
                {userName}
              </h2>
            </div>
            <div
              onClick={toggleSidebarDesktop}
              className={`
                ${
                  !sidebarShowDesktop
                    ? '-right-10 rounded-r-lg'
                    : '-right-5 rounded-l-lg'
                }
                  absolute px-0.5 py-3 bg-blue-200 hidden md:block text-blue-500 hover:bg-blue-100 cursor-pointer`}
            >
              {sidebarShowDesktop ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </div>
          </div>
          <div className="px-1">
            <hr />

            <div className="md:mt-4">
              {Menus.map((item) => (
                <div key={item.title}>
                  <Link href={item.path}>
                    <div
                      className={`${
                        router.pathname == item.path
                          ? 'bg-[#3b82f6]'
                          : 'bg-transparent'
                      } flex items-center px-3 py-2 md:py-3 my-1 hover:text-white rounded-lg cursor-pointer hover:bg-[#3b82f6] group`}
                      onClick={item.logout ? handleClick : ''}
                    >
                      <span
                        className={`${
                          router.pathname == item.path ? 'text-white' : ''
                        } text-2xl`}
                      >
                        {item.icon}
                      </span>
                      <h1
                        className={`${
                          router.pathname == item.path ? 'text-white' : ''
                        } ${
                          sidebarShowDesktop
                            ? ' font-semibold ml-4 cursor-pointer'
                            : 'hidden'
                        }`}
                      >
                        {item.title}
                      </h1>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <Link href="/dashboard/create-test">
            <div className="flex flex-col items-center justify-center capitalize cursor-pointer border-2 hover:border-blue-500 hover:dark:border-white py-4 rounded-lg bg-[#f2f3f7] duration-200">
              <BsPlusCircleFill className="text-blue-500 text-3xl bg-white rounded-full shadow-xl" />
              <small
                className={
                  sidebarShowDesktop
                    ? 'font-semibold text-gray-500 py-2'
                    : 'hidden'
                }
              >
                Yangi test yaratish
              </small>
            </div>
          </Link>
          <div
            className={`${
              sidebarShowDesktop ? 'block' : 'hidden'
            } absolute bottom-2 leading-snug`}
          >
            <h3 className="text-sm font-medium truncate">EdTeach - quiz app</h3>
            <Link href="https://dotsoft.uz">
              <a target="_blank" className="text-xs hover:underline truncate">
                Dotsoft - development team.
              </a>
            </Link>
          </div>
        </div>
      </aside>

      <main
        className={`${
          sidebarShowDesktop ? 'md:ml-72 lg:ml-[20rem]' : 'md:ml-20 lg:ml-32'
        }  md:-ml-4 w-full bg-gray-50 h-screen`}
      >
        <div>
          {children}
          <div
            className="fixed top-3 right-4 block md:hidden"
            onClick={toggleSidebarMobile}
          >
            <MdMenu className="text-5xl p-2 rounded-lg bg-gray-200 shadow-lg" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
