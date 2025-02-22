import React, { useState } from 'react';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import Head from 'next/head';
import Link from 'next/link';
import { db } from '../../../firebase';
import { Sidebar, Breadcrumb, Pagination } from 'components';
import { useUserContext } from 'context/userContext';
import { paginate } from 'utils/paginate';

import { BsTrash } from 'react-icons/bs';

const Tests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [testCard, setTestCard] = useState(true);

  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const { questions, getUsertime } = useUserContext();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatePosts = paginate(questions, currentPage, pageSize);

  const sendData = async (id) => {
    const collectionRef = doc(db, `question`, id);
    const quest = await getDoc(collectionRef);
    const payload = {
      status: 'started',
      pin: String(Math.floor(Math.random() * 900000) + 1000),
      id: id,
      questionIndex: 0,
    };

    await updateDoc(collectionRef, payload);
    quest.data().playerId.map((i) => {
      const deletePlayer = async () => {
        const PlayerColl = doc(db, `question/${id}/players`, i.id);
        await deleteDoc(PlayerColl);
      };
      deletePlayer();
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Testni rostdan o`chirmoqchimisiz?') === true) {
      try {
        const docRef = doc(db, `question`, id);
        await deleteDoc(docRef);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Head>
        <title>edTeach - Testlarim</title>
      </Head>
      <Sidebar>
        <Breadcrumb
          page="Asosiy sahifa"
          page2="Testlarim"
          link="/dashboard"
          active
        />
        <div className="p-5 md:pr-[2rem] lg:pr-[4rem]">
          <div className="relative -mt-2 mb-5">
            <input
              type="text"
              className="rounded-lg w-full shadow-sm bg-white outline-none p-3 md:p-4 focus:px-6 duration-200 placeholder-black"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              placeholder="Testlarni izlash."
            />
            <span className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Testlar ro&apos;yxati:</h3>
              <div className="flex items-center space-x-2">
                <svg
                  onClick={() => setTestCard(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${
                    testCard ? ' bg-white' : ''
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
                    testCard ? '' : ' bg-white'
                  } hidden md:block w-10 h-10 p-2 rounded-lg cursor-pointer`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className={`${
              testCard
                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                : 'flex flex-col space-y-2'
            } my-5`}
          >
            {paginatePosts
              .filter((val) => {
                if (searchTerm === '') {
                  return val;
                } else if (
                  val.title
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return (
                  <div
                    key={key}
                    className={`${
                      testCard
                        ? 'flex flex-col space-y-2'
                        : 'flex flex-row space-x-2 md:space-x-4'
                    } relative p-2 md:p-4 rounded-lg  bg-white shadow-xl`}
                  >
                    <img
                      className={`${
                        testCard ? 'h-56 w-full' : 'h-32 md:h-56 w-36 md:w-72'
                      } rounded-lg object-cover`}
                      src="/images/testbg.png"
                      alt="test image"
                    />
                    <div className="flex flex-grow flex-col justify-between">
                      <div className="w-full overflow-hidden">
                        <span className="bg-blue-500 text-white text-xs font-semibold px-1 rounded-full">
                          {val.questionVisibility === 'public'
                            ? 'Ommaviy'
                            : 'Shaxsiy'}
                        </span>
                        <h2 className="text-lg md:text-xl font-semibold truncate">
                          {val.title}
                        </h2>
                        <h2 className="text-sm md:text-lg font-semibold truncate">
                          {val.description}
                        </h2>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h2 className="text-sm text-gray-700 md:text-base font-semibold">
                            Umumiy testlar soni:
                          </h2>
                          <span className="bg-blue-500 text-white text-xs font-semibold px-1 rounded-full">
                            {val.questionList.length} ta
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h2 className="text-sm text-gray-700 md:text-base font-semibold">
                            Test yaratilgan vaqt:
                          </h2>
                          <span className="text-sm text-gray-700 font-semibold px-1 rounded-full">
                            {getUsertime(new Date(val.prefixTime))}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${
                        testCard ? 'flex-row' : 'flex-col-reverse'
                      } flex items-center justify-between`}
                    >
                      <div
                        onClick={() => handleDelete(val.id)}
                        className="flex items-center space-x-1 hover:text-rose-500 cursor-pointer"
                      >
                        <BsTrash className="" />
                        <h5 className="text-lg font-semibold hidden md:block">
                          O&apos;chirish
                        </h5>
                      </div>
                      <div onClick={() => sendData(val.id)}>
                        <Link href={`/dashboard/startgame/${val.id}`}>
                          <div className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer">
                            <p className="text-lg font-semibold hidden md:block">
                              Boshlash
                            </p>
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
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            <Pagination
              items={questions.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
          {!paginatePosts.length > 1 && (
            <div className="flex items-center justify-center h-[70vh]">
              <h1 className="text-2xl text-red-600 font-semibold">
                Teslar mavjud emas.
              </h1>
            </div>
          )}
        </div>
      </Sidebar>
    </div>
  );
};

export default Tests;
