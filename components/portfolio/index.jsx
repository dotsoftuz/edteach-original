import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import none from '../../public/images/about-img1.jpg';

const About = () => {
  return (
    <section className="py-16">
      <div className="mx-auto container">
        {/* <!-- heading text --> */}
        <div className="mb-10 text-center">
          <span className="font-medium text-blue-500">Our Portfolio</span>
          <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
            Our Recent Works
          </h1>
          <p className="mx-auto max-w-2 mt-2 text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur deleniti sit dolor numquam non. Et.
          </p>
        </div>
        {/* <!-- wrapper --> */}
        <div className="flex flex-col gap-5">
          {/* <!-- col-1 --> */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
              <div className="absolute portBox h-full w-full object-cover duration-200 group-hover:scale-125">
                <Image src={none} alt="portfolio img" />
              </div>
              <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                <p className="text-sm font-semibold text-white">
                  Type Your portfolio details{' '}
                  <span className="text-xs text-slate-300 block">
                    12 August 2025
                  </span>
                </p>
                <div className="rounded-full bg-white p-1.5 text-lg text-blue-500">
                  <FiMenu />
                </div>
              </div>
            </div>
            <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
              <div className="absolute portBox h-full w-full object-cover duration-200 group-hover:scale-125">
                <Image src={none} alt="portfolio img" />
              </div>
              <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                <p className="text-sm font-semibold text-white">
                  Type Your portfolio details{' '}
                  <span className="text-xs text-slate-300 block">
                    12 August 2025
                  </span>
                </p>
                <div className="rounded-full bg-white p-1.5 text-lg text-blue-500">
                  <FiMenu />
                </div>
              </div>
            </div>
            <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52 sm:col-span-2">
              <div className="absolute portBox h-full w-full object-cover duration-200 group-hover:scale-125">
                <Image src={none} alt="portfolio img" />
              </div>
              <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                <p className="text-sm font-semibold text-white">
                  Type Your portfolio details{' '}
                  <span className="text-xs text-slate-300 block">
                    12 August 2025
                  </span>
                </p>
                <div className="rounded-full bg-white p-1.5 text-lg text-blue-500">
                  <FiMenu />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end col-1 --> */}

          {/* <!-- col-2 --> */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52 md:col-span-2">
              <div className="absolute portBox h-full w-full object-cover duration-200 group-hover:scale-125">
                <Image src={none} alt="portfolio img" />
              </div>

              <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                <p className="text-sm font-semibold text-white">
                  Type Your portfolio details{' '}
                  <span className="text-xs text-slate-300 block">
                    12 August 2025
                  </span>
                </p>
                <div className="rounded-full bg-white p-1.5 text-lg text-blue-500">
                  <FiMenu />
                </div>
              </div>
            </div>
            <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
              <div className="absolute portBox h-full w-full object-cover duration-200 group-hover:scale-125">
                <Image src={none} alt="portfolio img" />
              </div>
              <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                <p className="text-sm font-semibold text-white">
                  Type Your portfolio details{' '}
                  <span className="text-xs text-slate-300 block">
                    12 August 2025
                  </span>
                </p>
                <div className="rounded-full bg-white p-1.5 text-lg text-blue-500">
                  <FiMenu />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end col-2 --> */}

          {/* <!-- col-3 --> */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
              <div className="absolute portBox h-full w-full object-cover duration-200 group-hover:scale-125">
                <Image src={none} alt="portfolio img" />
              </div>
              <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                <p className="text-sm font-semibold text-white">
                  Type Your portfolio details{' '}
                  <span className="text-xs text-slate-300 block">
                    12 August 2025
                  </span>
                </p>
                <div className="rounded-full bg-white p-1.5 text-lg text-blue-500">
                  <FiMenu />
                </div>
              </div>
            </div>
            <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
              <div className="absolute portBox h-full w-full object-cover duration-200 group-hover:scale-125">
                <Image src={none} alt="portfolio img" />
              </div>
              <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                <p className="text-sm font-semibold text-white">
                  Type Your portfolio details{' '}
                  <span className="text-xs text-slate-300 block">
                    12 August 2025
                  </span>
                </p>
                <div className="rounded-full bg-white p-1.5 text-lg text-blue-500">
                  <FiMenu />
                </div>
              </div>
            </div>
            <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52 sm:col-span-2">
              <div className="absolute portBox h-full w-full object-cover duration-200 group-hover:scale-125">
                <Image src={none} alt="portfolio img" />
              </div>
              <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                <p className="text-sm font-semibold text-white">
                  Type Your portfolio details{' '}
                  <span className="text-xs text-slate-300 block">
                    12 August 2025
                  </span>
                </p>
                <div className="rounded-full bg-white p-1.5 text-lg text-blue-500">
                  <FiMenu />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end col-3 --> */}
        </div>
      </div>
    </section>
  );
};

export default About;
