import React from 'react';
import Head from 'next/head';

import { Sidebar, Breadcrumb } from '../../components';
import { CiEdit } from 'react-icons/ci';

const Profile = () => {
  return (
    <div>
      <Head>
        <title>edTeach - Kurslar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar>
        <div className="p-5">
          <Breadcrumb page="Profil" link="/profile" />
          <div>
            <div className="relative flex flex-col md:flex-row bg-gray-200 rounded-lg p-4 md:p-6 my-5">
              <div className="flex items-center">
                <div>
                  <img
                    className="rounded-full w-16 h-16 md:w-20 md:h-20 object-contain"
                    src="https://www.lazydev.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperson01.2102dbe6.png&w=64&q=75"
                    alt="avatar img"
                  />
                </div>
                <div className="ml-5">
                  <div className="flex items-center space-x-2">
                    <h2 className=" text-lg font-semibold">Andy Panda</h2>
                    <span className="bg-purple-500 text-white text-xs font-semibold px-1 rounded-full">
                      Teacher
                    </span>
                  </div>
                  <p className="text-purple-500 font-medium">
                    andypanda@gmail.com
                  </p>
                </div>
              </div>
              <div className="md:ml-auto mt-4 md:mt-0 space-y-3 flex flex-col md:flex-col-reverse">
                <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mt-4">
                  <div className="leading-0 flex flex-col items-center">
                    <h3 className="text-lg md:text-xl font-bold">23</h3>
                    <p className="text-sm font-semibold uppercase">Likes</p>
                  </div>
                  <div className="leading-0 flex flex-col items-center">
                    <h3 className="text-lg md:text-xl font-bold">03</h3>
                    <p className="text-sm font-semibold uppercase">
                      Umumiy testlar
                    </p>
                  </div>
                </div>
                <a
                  className="rounded-lg py-2 px-8 font-medium text-sm duration-300
          active:bg-opacity-80 cursor-pointer ease-in-out active:scale-95 bg-transparent border border-purple-500 md:text-sm text-purple-500 hover:shadow-md text-center"
                >
                  Edit
                </a>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-5">
              Siz hali test yaratmadingiz.
            </h3>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Profile;
