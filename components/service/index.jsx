import React from 'react';
import {TbBooks} from "react-icons/tb"
import {RiVideoChatLine} from "react-icons/ri"
import {MdOutlineQuestionAnswer, MdOutlineMapsHomeWork, MdSystemUpdateAlt} from "react-icons/md"
import {HiOutlinePresentationChartBar} from "react-icons/hi"

const Service = () => {
  return (
    <section id='services' className="py-16">
      <div  className="mx-auto container">
        {/* <!-- heading text --> */}
        <div className="mb-10 text-center">
         <span className="font-medium text-blue-500">Bizning Xizmatlar</span>
          <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
            Bizning Xizmatlar
          </h1>
          <p className="mx-auto max-w-2 mt-2 text-slate-500">
           Biz sizga maqbul keladigan  qulay  xizmatlarni taklif qilamiz
          </p>
        </div>
        {/* <!-- box wrapper --> */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-8">
          <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
            <div className="text-[55px] text-blue-500 duration-200 group-hover:text-white">
              <MdOutlineQuestionAnswer />
            </div>
            <h4 className="mt-3 mb-1 text-[17px] text-center font-semibold text-slate-600 duration-200 group-hover:text-white">
             Savol-javoblar, viktorinalarni yaratish
            </h4>
          </div>
          <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
            <div className="text-[55px] text-blue-500 duration-200 group-hover:text-white">
              <TbBooks />
            </div>
            <h4 className="mt-3 mb-1 text-[17px] text-center font-semibold text-slate-600 duration-200 group-hover:text-white">
            Milliy va xorijiy segmentdagi ilmiy  bazalar  
            </h4>
          </div>
          <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
            <div className="text-[55px] text-blue-500 duration-200 group-hover:text-white">
              <RiVideoChatLine />
            </div>
            <h4 className="mt-3 mb-1 text-[17px] text-center font-semibold text-slate-600 duration-200 group-hover:text-white">
             Onlayn vedio aloqa
            </h4>
          </div>
          <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
            <div className="text-[55px] text-blue-500 duration-200 group-hover:text-white">
              <MdOutlineMapsHomeWork />
            </div>
            <h4 className="mt-3 mb-1 text-[17px] text-center font-semibold text-slate-600 duration-200 group-hover:text-white">
                Uyga topshiriq  
            </h4>
          </div>
          <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
            <div className="text-[55px] text-blue-500 duration-200 group-hover:text-white">
              <HiOutlinePresentationChartBar />
            </div>
            <h4 className="mt-3 mb-1 text-[17px] text-center font-semibold text-slate-600 duration-200 group-hover:text-white">
              Taqdimot namoyish etish 
            </h4>
          </div>
          <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
            <div className="text-[55px] text-blue-500 duration-200 group-hover:text-white">
              <MdSystemUpdateAlt />
            </div>
            <h4 className="mt-3 mb-1 text-[17px] text-center font-semibold text-slate-600 duration-200 group-hover:text-white">
              Muntazam yangilanib borish
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
