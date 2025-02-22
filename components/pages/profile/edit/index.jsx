import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { BiUser, BiLockAlt } from 'react-icons/bi';
import { CiEdit } from 'react-icons/ci';

import { useUserContext } from 'context/userContext';

const EditProfile = ({ edit, closeEdit }) => {
  const { userName } = useUserContext();
  return (
    <>
      <div
        className={
          edit
            ? 'fixed top-0 left-0 right-0 bottom-0 z-[60] flex items-center justify-center bg-black bg-opacity-40'
            : 'block'
        }
      >
        <div className="relative w-[90%] h-[50vh] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] p-6 bg-white shadow-lg rounded-xl">
          <div
            onClick={closeEdit()}
            className="absolute -top-1 -right-1 hover:top-0 hover:right-0 p-1.5 rounded-lg bg-white shadow-lg cursor-pointer duration-200"
          >
            <GrFormClose className="text-blue-500" />
          </div>

          <div className="flex items-center">
            <label className="group relative">
              <img
                className="rounded-full w-16 h-16 md:w-20 md:h-20 object-contain"
                src="https://e7.pngegg.com/pngimages/748/695/png-clipart-circle-blue-font-blue-circle-violet-circle-frame-thumbnail.png"
                alt=""
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white">
                {userName.charAt(0)}
              </h2>
              <input type="file" className="hidden" name="file1" />
              <div className="absolute top-0 rounded-full w-16 h-16 md:w-20 md:h-20 bg-black bg-opacity-40 hidden group-hover:block">
                <CiEdit className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white cursor-pointer" />
              </div>
            </label>
            <div className="ml-5">
              <h2 className=" text-lg font-semibold">Profilni Tahrirlamoq</h2>
            </div>
          </div>
          <div className="my-5 space-y-2 md:space-y-3">
            <div className="relative group">
              <div className="flex items-center rounded-lg text-black bg-gray-100 focus-within:px-1 duration-200 focus-within:bg-gray-200 ring-transparent focus-within:ring-1 focus-within:ring-gray-300">
                <input
                  id="username"
                  className="outline-none flex flex-grow p-3 md:p-4 bg-transparent placeholder-black rounded-l-xl px-4 text-sm duration-300"
                  type="text"
                  placeholder="Full name"
                />
                <div className="absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-3 md:p-4 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-gray-300 group-focus-within:bg-opacity-60">
                  <BiUser className="text-black" />
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="flex items-center rounded-lg text-black bg-gray-100 focus-within:px-1 duration-200 focus-within:bg-gray-200 ring-transparent focus-within:ring-1 focus-within:ring-gray-300">
                <input
                  id="password"
                  className="outline-none flex flex-grow p-3 md:p-4 bg-transparent placeholder-black rounded-l-xl px-4 text-sm duration-300"
                  type="text"
                  placeholder="Password"
                />
                <div className="absolute top-0 right-0 duration-300 rounded-xl bg-transparent p-3 md:p-4 group-focus-within:-top-2 group-focus-within:-right-2 group-focus-within:bg-gray-300 group-focus-within:bg-opacity-60">
                  <BiLockAlt className="text-black" />
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={closeEdit()}
            className="absolute bottom-4 right-4 space-x-2"
          >
            <button className="rounded-lg py-2 px-4 shadow-md text-sm md:text-base font-semibold active:bg-opacity-80 ease-in-out bg-blue-200 text-blue-500 active:scale-95 duration-200">
              Bekor qilmoq
            </button>
            <button className="rounded-lg py-2 px-4 shadow-md text-sm md:text-base font-semibold active:bg-opacity-80 ease-in-out bg-blue-500 text-white active:scale-95 duration-200">
              Saqlamoq
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
