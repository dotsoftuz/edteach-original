import React from 'react';
import Image from 'next/image';
// import none from '../../public/images/about-img1.jpg';
import blog1 from "public/images/blog1.jpg"
import blog2 from "public/images/blog2.jpg"
import blog3 from "public/images/blog3.jpg"

const Blog = () => {
  return (
    <section id='blog' className="py-16">
      <div className="mx-auto container">
        {/* <!-- heading text --> */}
        <div className="mb-5 sm:mb-10">
         <span className="font-medium text-blue-500">Quyidagilarni Taklif Etamiz</span>
          <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
            Quyidagilarni Taklif Etamiz
          </h1>
        </div>
        {/* <!-- wrapper --> */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {/* <!-- single-blog --> */}
          <div className="w-full duration-200 hover:scale-95">
            <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
              <div className="w-full">
                <Image src={blog3} alt="blog img" />
              </div>
            </div>
            <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
              <div className="">
                <h2 className='text-lg font-semibold pt-1'>O`zaro hamkorlik</h2>
                <p
                  className="block pt-3 font-medium capitalize text-slate-800 "
                >
                  An'anaviy hamda masofaviy ta'lim shakllarida interaktiv ta'lim metodini taklif etamiz
                </p>
              </div>
            </div>
          </div>
          {/* <!-- single-blog --> */}
          <div className="w-full duration-200 hover:scale-95">
            <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
              <div className="w-full">
                <Image src={blog2} alt="blog img" />
              </div>
            </div>
            <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
              <div className="">
                <h2 className='text-lg font-semibold pt-1'>Qiziqarli talim</h2>
                  <p className="block pt-3 font-medium capitalize text-slate-800 ">
                  Virtual ta'limda ta'lim beruvchi hamda ta'lim oluvchilar uchun o'ziga xos, interaktiv web-platforma
                  </p>
              </div>
            </div>
          </div>
          {/* <!-- single-blog --> */}
          <div className="w-full duration-200 hover:scale-95">
            <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
              <div className="w-full">
                <Image src={blog3} alt="blog img" />
              </div>
            </div>
            <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
              <div className="">
                <h2 className='text-lg font-semibold pt-1'>Kreativ baholash</h2>
                <p
                  className="block pt-3 font-medium capitalize text-slate-800 "
                >
                  Baholashning innovatsion usullaridan foydalanish orqali to'liq avtomatlashtirilgan web-platforma
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
