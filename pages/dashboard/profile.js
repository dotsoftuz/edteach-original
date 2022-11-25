import React, { useState } from 'react';
import Head from 'next/head';

import { Sidebar, Breadcrumb } from '../../components';
import { CiEdit } from 'react-icons/ci';
import { useUserContext } from '../../context/userContext';

const Profile = () => {
  const [testCard, setTestCard] = useState(false);
  const { userName, userEmail, questions } = useUserContext();

  console.log(questions);

  return (
    <div>
      <Head>
        <title>edTeach - Kurslar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar>
        <div className="p-5">
          <Breadcrumb
            page="Asosiy sahifa"
            page2="Profil"
            link="/dashboard"
            active
          />
          <div>
            <div className="relative flex flex-col md:flex-row bg-gray-200 rounded-lg p-4 md:p-6 my-5">
              <div className="flex items-center">
                <div className="group relative">
                  <h2
                    className="rounded-full w-16 h-16 md:w-20 md:h-20 object-contain text-4xl text-center pt-4 bg-[#0FD4FFFF] text-white "
                    // src="https://www.lazydev.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperson01.2102dbe6.png&w=64&q=75"
                    // alt="avatar img"
                  >
                    {userName.charAt(0)}
                  </h2>
                  <div className="absolute top-0 rounded-full w-16 h-16 md:w-20 md:h-20 bg-black bg-opacity-40 hidden group-hover:block">
                    <CiEdit className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white cursor-pointer" />
                  </div>
                </div>
                <div className="ml-5">
                  <div className="flex items-center space-x-2">
                    <h2 className=" text-lg font-semibold">{userName}</h2>
                    <span className="bg-purple-500 text-white text-xs font-semibold px-1 rounded-full">
                      Teacher
                    </span>
                  </div>
                  <p className="text-purple-500 font-medium">{userEmail}</p>
                </div>
              </div>
              <div className="md:ml-auto mt-4 md:mt-0 space-y-3 flex flex-col md:flex-col-reverse">
                <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mt-4">
                  <div className="leading-0 flex flex-col items-center">
                    <h3 className="text-lg md:text-xl font-bold">23</h3>
                    <p className="text-sm font-semibold uppercase">Likes</p>
                  </div>
                  <div className="leading-0 flex flex-col items-center">
                    <h3 className="text-lg md:text-xl font-bold">
                      {questions.length}
                    </h3>
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
            {!questions ? (
              <h3 className="text-2xl font-semibold my-5">
                Siz hali test yaratmadingiz.
              </h3>
            ) : (
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">
                    Testlar ro&apos;yxati:
                  </h3>
                  <div className="flex items-center space-x-2">
                    <svg
                      onClick={() => setTestCard(true)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${
                        testCard ? 'bg-gray-200' : ''
                      } w-10 h-10 p-2 rounded-lg cursor-pointer`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                      />
                    </svg>
                    <svg
                      onClick={() => setTestCard(false)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${
                        testCard ? '' : 'bg-gray-200'
                      } w-10 h-10 p-2 rounded-lg cursor-pointer`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                      />
                    </svg>
                  </div>
                </div>
                {questions.map((item) => (
                  <>
                    <div
                      className={`${
                        testCard
                          ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                          : 'flex flex-col space-y-2'
                      } my-5`}
                    >
                      <div
                        className={`${
                          testCard
                            ? 'flex flex-col space-y-2'
                            : 'flex flex-row space-x-2 md:space-x-4'
                        } relative  p-4 rounded-lg bg-gray-200`}
                      >
                        <div>
                          <img
                            className={`${
                              testCard ? 'w-full' : 'w-72'
                            } rounded-lg h-56 object-cover`}
                            src="/images/about-img1.jpg"
                            alt="test image"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <span className="bg-purple-500 text-white text-xs font-semibold px-1 rounded-full">
                              Quiz
                            </span>
                            <h2 className="text-xl font-semibold">
                              {item.title}
                            </h2>
                            <h2 className="text-lg font-semibold">
                              {item.description}
                            </h2>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h2 className=" text-base font-semibold">
                                Umumiy testlar soni:
                              </h2>
                              <span className="bg-purple-500 text-white text-xs font-semibold px-1 rounded-full">
                                {item.questionList.length} ta
                              </span>
                            </div>
                            <h2 className="text-xs font-semibold">
                              Yaratuvchi: {item.createrName}
                            </h2>
                          </div>
                        </div>
                        <div
                          className={`${
                            testCard ? 'bottom-2' : 'top-2'
                          } absolute  right-2 flex items-center space-x-1 hover:text-purple-500 cursor-pointer`}
                        >
                          <p className="text-lg font-semibold">Start</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Profile;
