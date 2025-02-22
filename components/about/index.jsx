import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import { IoBriefcaseSharp } from 'react-icons/io5';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import about from 'public/images/about.svg';

const About = () => {
  return (
    <section className="py-16">
      <div className="mx-auto container">
        <div className="md:flex md:items-center md:justify-between md:gap-6">
          <div className="md:w-6/12">
            {/* <!-- heading text --> */}
            <div className="mb-5 sm:mb-10">
              <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
                Ta&apos;limni biz bilan yuqori bosqichga olib chiqing.
              </h1>
            </div>
            <ul>
              <li className="mb-6 flex items-center">
                <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                  <IoBriefcaseSharp />
                </div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  Ko&apos;p funksionallik.
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                  <AiOutlineCodeSandbox />
                </div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  To`liq avtomatlashtirilgan tizim
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                  <MdOutlineMarkEmailUnread />
                </div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  Yangiliklarni e-mail orqali qabul qilish
                </p>
              </li>
            </ul>
            <button className="w-full rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 md:w-max">
              Boshlash
            </button>
          </div>
          <div className="mt-8 flex justify-center md:mt-0 scale-75">
            <div className="max-h-[500px] about-Img md:max-h-max">
              <Image src={about} alt="about img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
