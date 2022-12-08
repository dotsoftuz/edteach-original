import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Images
import img1 from 'public/images/milliy_horijiy.png';
import img2 from 'public/images/online.png';
import img3 from 'public/images/homework.png';
import img4 from 'public/images/zoom.png';
import img5 from 'public/images/listen.jpg';
import img6 from 'public/images/machine.webp';
import Image from 'next/image';

import { Sidebar, Breadcrumb } from 'components';

function UseFul() {
  const [activeDialog, setActiveDialog] = useState(false);

  const dialog = () => {
    setActiveDialog(true);
  };

  const CloseDialog = () => {
    setActiveDialog(false);
  };

  return (
    <>
      <Head>
        <title>edTeach - Foydali sahifa</title>
      </Head>
      <Sidebar>
        <Breadcrumb
          page="Asosiy sahifa"
          page2="Foydali Havolalar"
          link="/dashboard"
          active
        />
        <div className="container mx-auto">
          <ul className="container my-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 justify-items-center w-full md:w-fit px-5 md:px-0 ">
            <li
              onClick={dialog}
              className="snap-center cursor-pointer w-full  rounded-3xl transition-all"
            >
              <div className="relative flex-shrink-0 w-full">
                <div className="absolute w-full h-full inset-0 image-fulled">
                  <Image src={img1} alt="project images" />
                </div>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
                <div className="relative h-64 md:h-96 w-full py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
                  <div>
                    <h2 className="mt-0 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      Milliy va xorijiy segmentdagi ilmiy bazalar
                    </h2>
                  </div>
                </div>
              </div>
            </li>

            <li className="snap-center w-full  rounded-3xl cursor-not-allowed">
              <div className="relative flex-shrink-0 w-full transition-all">
                <div className="absolute w-full h-full inset-0 image-fulled">
                  <Image src={img2} alt="project images" />
                </div>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
                <div className="relative h-64 md:h-96 w-full py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
                  <div>
                    <h2 className="mt-0 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      Onlayn videoaloqa
                    </h2>
                    <p className="text-sm font-semibold md:text-lg  text-green-500">
                      Tez orada qo`shiladi
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className="container my-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 justify-items-center w-full md:w-fit px-5 md:px-0">
            <li className="snap-center w-full  rounded-3xl cursor-not-allowed transition-all">
              <div className="relative flex-shrink-0 w-full">
                <div className="absolute w-full h-full inset-0 image-fulled">
                  <Image src={img3} alt="project images" />
                </div>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
                <div className="relative h-64 md:h-96 w-full py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
                  <div>
                    <h2 className="mt-0 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      Uyga topshiriq
                    </h2>
                    <p className="text-sm font-semibold md:text-lg  text-green-500">
                      Tez orada qo`shiladi
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li className="snap-center w-full  rounded-3xl cursor-not-allowed transition-all">
              <div className="relative flex-shrink-0 w-full">
                <div className="absolute w-full h-full inset-0 image-fulled">
                  <Image src={img4} alt="project images" />
                </div>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
                <div className="relative h-64 md:h-96 w-full py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
                  <div>
                    <h2 className="mt-0 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      Taqdimot namoyish etish
                    </h2>
                    <p className="text-sm font-semibold md:text-lg  text-green-500">
                      Tez orada qo`shiladi
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div
            className={
              activeDialog
                ? 'fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center z-50 '
                : 'hidden'
            }
          >
            <div className="relative w-[90%] md:w-[80%] h-auto bg-gray-200 shadow-lg rounded-xl space-y-2 py-3 px-3 md:p-5">
              <div className="mr-10 sm:mr-0 flex items-center !text-black md:justify-end bg-gray-200 md:ml-0 ml-5   rounded-t-2xl p-0 md:py-4 md:px-6">
                <svg
                  onClick={CloseDialog}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="cursor-pointer font-bold w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <ul className="pb-10 grid grid-cols-1 md:grid-cols-2 md:px-0">
                <Link href="/dashboard/links">
                  <li className="snap-center cursor-pointer w-full rounded-2xl px-2 sm:mt-0 mt-5">
                    <div className="relative flex-shrink-0 w-full">
                      <div className="absolute w-full h-full inset-0 image-fulled">
                        <Image src={img5} alt="project images" />
                      </div>
                      <div className='absolute inset-0 bg-[rgba(0,_0,_0,_.5)] rounded-3xl'></div>
                      <div className="relative h-64 md:h-96  py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
                        <div>
                          <h2 className="mt-0 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                            Xorijiy ilmiy <br className='hidden md:block'/> texnik-bazalar
                          </h2>
                        </div>
                      </div>
                    </div>
                  </li>
                </Link>
                <li className="snap-center w-[100%] rounded-2xl px-2 sm:mt-0 mt-5 cursor-not-allowed">
                  <div className="relative flex-shrink-0 w-full">
                    <div className="absolute w-full h-full inset-0 image-fulled">
                      <Image src={img6} alt="project images" />
                    </div>
                    <div className='absolute inset-0 bg-[rgba(0,_0,_0,_.5)] rounded-3xl'></div>
                    <div className="relative h-64 md:h-96  py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
                      <div>
                        <h2 className="mt-0 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                          Milliy kontentdagi ilmiy <br className='hidden xl:block'/> faoliyatiga doir bazalar
                        </h2>
                        <p className="text-sm font-semibold md:text-lg  text-green-500">
                          Tez orada qo`shiladi
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default UseFul;
