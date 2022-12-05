import header from '/public/images/header.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <section className="relative bg-white py-16 lg:pt-[100px]">
      <div className="mx-auto container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12">
            <h1 className="text-slate-800 mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
              <span className='text-blue-600'>Ed Teach </span><br />
              <span className=" inline-block">Raqamli ta&apos;lim </span>
              <span className="inline-block"> kelajak poydevori.</span>
            </h1>
            <p className="text-slate-500 mb-8 max-w-[480px] text-base">
              Agar javobingiz ha bo&apos;lsa hoziroq bepul ro&apos;yhatdan
              o&apos;ting va bilimingizni sinab ko&apos;ring. Barchasi bepul!
            </p>
            <button className="w-full rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 sm:w-auto">
              Ko&apos;proq malumot
            </button>
            <button className="mt-4 box-border w-full rounded-md border border-blue-500/20 px-8 py-2.5 font-semibold text-blue-500 shadow-md shadow-blue-500/10 duration-200  sm:ml-4 sm:mt-0 sm:w-auto ">
              Ro&apos;yhatdan o&apos;ting
            </button>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <div className="max-w-full lg:ml-auto lg:translate-y-[-70px]">
                  <Image src={header} />
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
