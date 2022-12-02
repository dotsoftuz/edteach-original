import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import none from '../../public/images/about-img1.jpg';

const Feature = () => {
  return (
    <section className="pb-16">
      <div className="mx-auto container">
        {/* <!-- heading text --> */}
        <div className="mb-5 sm:mb-10">
          <span className="font-medium text-blue-500">Our Features</span>
          <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
            Provide Our Features
          </h1>
        </div>
        {/* <!-- features Image --> */}
        <div className="md:flex md:justify-between md:gap-6 xl:gap-10">
          <div className="mb-5 max-h-[600px] overflow-hidden rounded-lg md:mb-0 md:w-5/12">
            <div className="h-full scale-125 sm:w-full sm:object-cover">
              <Image src={none} alt="features Image" />
            </div>
          </div>
          <div className="md:w-7/12">
            <div className="mb-16 flex flex-col">
              <p className="mb-3 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                explicabo perferendis voluptatibus sunt enim officiis.
              </p>

              <p className="mb-10 text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                laudantium, cum, quaerat nulla possimus magni odio ullam ratione
                vitae id fuga aliquam sed molestiae? Voluptas.
              </p>

              <button className="w-full rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 md:w-max">
                Get Started
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                <div className="mb-3 w-16">
                  <Image src={none} alt="" />
                </div>
                <h3 className="text-lg font-bold text-slate-600">Web Design</h3>
                <Link href="#">
                  <a className="text-sm text-blue-500">Learn more</a>
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                <div className="mb-3 w-16">
                  <Image src={none} alt="" />
                </div>
                <h3 className="text-lg font-bold text-slate-600">Automation</h3>
                <Link href="#">
                  <a className="text-sm text-blue-500">Learn more</a>
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                <div className="mb-3 w-16">
                  <Image src={none} alt="" />
                </div>
                <h3 className="text-lg font-bold text-slate-600">
                  Infographics
                </h3>
                <Link href="#">
                  <a className="text-sm text-blue-500">Learn more</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
