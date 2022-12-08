import Link from 'next/link';
import Head from 'next/head';

// Images
import img1 from 'public/images/milliy_horijiy.png';
import img2 from 'public/images/online.png';
import img3 from 'public/images/homework.png';
import img4 from 'public/images/zoom.png';
import img5 from 'public/images/foreign.jpg';

import Image from 'next/image';

import { Sidebar, Breadcrumb } from 'components';

function UseFul() {
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
          <ul className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-full md:w-fit px-5 md:px-0 ">
            <Link href="/dashboard/links">
              <li className="snap-center cursor-pointer w-full  rounded-3xl transition-all">
                <div className="relative flex-shrink-0 w-full">
                  <div className="absolute w-full h-full inset-0 image-fulled">
                    <Image src={img1} alt="project images" />
                  </div>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
                  <div className="relative h-64 md:h-96 w-full py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
                    <div>
                      <h2 className="mt-0 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                        Milliy segmentdagi ilmiy bazalar
                      </h2>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
            <li className="snap-center w-full  rounded-3xl transition-all cursor-not-allowed">
              <div className="relative flex-shrink-0 w-full">
                <div className="absolute w-full h-full inset-0 image-fulled">
                  <Image src={img5} alt="project images" />
                </div>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/30  rounded-3xl" />
                <div className="relative h-64 md:h-96 w-full py-8 px-5 md:p-8 lg:p-12 flex flex-col justify-between items-start">
                  <div>
                    <h2 className="mt-0 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      Xorijiy segmentdagi ilmiy bazalar
                    </h2>
                    <p className="text-sm font-semibold md:text-lg  text-green-500">
                      Tez orada qo`shiladi
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className=" my-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 w-full md:w-fit px-5 md:px-0">
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
        </div>
      </Sidebar>
    </>
  );
}

export default UseFul;
