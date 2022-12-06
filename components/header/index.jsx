import header from '/public/images/header.svg';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <section className="relative bg-white py-16 lg:pt-5">
      <div className="mx-auto container">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-6/12 xl:w-5/12">
            <h1 className="text-slate-800 mb-10  text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
              <span className=" inline-block">Raqamli ta&apos;lim </span>
              <span className="inline-block"> kelajak poydevori</span>
            </h1>
            <Link href="#">
              <button className="w-full rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 sm:w-auto">
                Ko&apos;proq malumot
              </button>
            </Link>
            <Link href="/dashboard">
              <button className="mt-4 box-border w-full rounded-md border border-blue-500/20 px-8 py-2.5 font-semibold text-blue-500 shadow-md shadow-blue-500/10 duration-200  sm:ml-4 sm:mt-0 sm:w-auto ">
                Ro&apos;yhatdan o&apos;ting
              </button>
            </Link>
          </div>
          <div className="hidden px-4 xl:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <div className="max-w-full lg:ml-auto ">
                  <Image src={header} />
                  <div>
                    <div className="absolute top-5 left-10 md:top-10 md:left-20 bg-blue-200 rotate-12 w-8 h-8 md:w-10 md:h-10 rounded-lg shadow-blue-400 shadow-sm flex items-center justify-center text-xl text-blue-600 font-semibold animate-wiggle1">
                      1
                    </div>
                    <div className="absolute top-10 left-32 md:top-16 md:left-56 bg-rose-200 w-8 h-8 md:w-10 md:h-10 rounded-lg shadow-rose-400 shadow-sm flex items-center justify-center text-rose-600 text-xl font-semibold animate-wiggle2">
                      2
                    </div>
                    <div className="absolute top-28 left-28 md:top-28 md:left-40 bg-yellow-200 w-8 h-8 md:w-10 md:h-10 rounded-lg shadow-yellow-400 shadow-sm flex items-center justify-center text-yellow-600 text-xl font-semibold animate-wiggle3">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
