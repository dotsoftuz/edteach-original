import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SiConcourse } from "react-icons/si";
import { FiUser } from "react-icons/fi";
import { GrTest } from "react-icons/gr";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useRouter();

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const Menus = [
    {
      title: "Asosiy Sahifa",
      path: "/dashboard",
      icon: <MdOutlineSpaceDashboard />,
    },
    { title: "Kurslar", path: "/course", icon: <SiConcourse /> },
    { title: "Profil", path: "/profile", icon: <FiUser /> },
    { title: "Testlar", path: "/tests", icon: <GrTest /> },
    { title: "Chiqish", path: "/login", icon: <IoExitOutline />, red: true },
  ];

  return (
    <>
      <div
        className={`${
          open ? "w-72" : "w-fit"
        } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        <div className="flex flex-col flex-grow">
          <div
            onClick={toggleSidebar}
            className={`
           ${open ? "right-0  rounded-l-lg" : "-right-5 rounded-r-lg"}
           absolute px-0.5 py-3 bg-gray-300 text-[#161925] cursor-pointer
          `}
          >
            {open ? (
              <IoIosArrowBack className="text-gray-700" />
            ) : (
              <IoIosArrowForward className="text-gray-700" />
            )}
          </div>

          <div className="relative flex items-center">
            <div className="flex items-center justify-center rounded-2xl border-2 border-gray-300 dark:border-transparent bg-transparent dark:bg-[#242627] w-fit p-1">
              <img
                className="rounded-full w-10 h-10 object-contain"
                src="https://www.lazydev.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperson01.2102dbe6.png&w=64&q=75"
                alt="avatar img"
              />
            </div>
            <div className={open ? "relative ml-4" : "hidden"}>
              <h2 className="text-[#242627] dark:text-white font-semibold text-lg">
                Andy Panda
              </h2>
              <span className="absolute top-1 -right-2 w-1.5 h-1.5 rounded-full bg-[#6fce97]" />
            </div>
          </div>

          <div className="mt-4">
            <small className="text-xs font-medium text-[#161925] dark:text-gray-500 uppercase py-2">
              Overview
            </small>
            <ul>
              {Menus.map((menu, index) => (
                <Link href={menu.path} key={index}>
                  <li
                    className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                      location.pathname === menu.path &&
                      "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    <span className="text-2xl">{menu.icon}</span>
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-300 hover:block font-semibold`}
                    >
                      {menu.title}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <small className="text-xs font-medium text-[#161925] dark:text-gray-500 uppercase py-2 truncate">
              Add new
            </small>
            <div className="flex flex-col items-center justify-center cursor-pointer border hover:border-gray-500 hover:dark:border-white py-4 rounded-lg bg-[#f2f3f7] dark:bg-[#323435] py-2">
              <BsPlusCircleFill className="text-[#3f8dfd] text-3xl bg-white rounded-full shadow-xl" />
              <small
                className={
                  open
                    ? "font-semibold text-gray-500 dark:text-white py-2"
                    : "hidden"
                }
              >
                Add new Test
              </small>
            </div>
          </div>
        </div>

        <div className={`${open ? "w-72" : "w-0 hidden"} px-3 mt-auto`}>
          <h3 className="text-sm font-medium truncate">EdTeach - quiz app</h3>
          <Link href="https://dotsoft.uz">
            <a target="_blank" className="text-xs hover:underline truncate">
              Dotsoft - development team.
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
