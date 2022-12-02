import React from "react";
import { FiMenu } from 'react-icons/fi';

const Service = () => {
    return (
        <section className="py-16">
        <div className="mx-auto max-w-7xl px-8 md:px-6">
            {/* <!-- heading text --> */}
            <div className="mb-10 text-center">
                <span className="font-medium text-blue-500">Our Services</span>
                <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">Provide Awesome Services</h1>
                <p className="mx-auto max-w-2 mt-2 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deleniti sit dolor numquam non. Et.</p>
            </div>
    
            {/* <!-- box wrapper --> */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-8">
                <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
                    <div className="text-[55px] text-blue-500 duration-200 group-hover:text-white"><FiMenu/></div>
                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">Crafted for Startups</h4>
                    <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus nihil veritatis ad. Odit, veritatis!</p>
                </div>
    
                <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
                    <div className="text-[55px] text-blue-500 duration-200 group-hover:text-white"><FiMenu/></div>
                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">Crafted for Startups</h4>
                    <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus nihil veritatis ad. Odit, veritatis!</p>
                </div>
    
                <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
                    <div className="text-[55px] text-blue-500 duration-200 group-hover:text-white"><FiMenu/></div>
                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">Speed Optimized</h4>
                    <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus nihil veritatis ad. Odit, veritatis!</p>
                </div>
    
                <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
                     <div className="text-[55px] text-blue-500 duration-200 group-hover:text-white"><FiMenu/></div>
                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">High-quality Design</h4>
                    <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus nihil veritatis ad. Odit, veritatis!</p>
                </div>
    
                <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
                     <div className="text-[55px] text-blue-500 duration-200 group-hover:text-white"><FiMenu/></div>
                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">All Essential Sections</h4>
                    <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus nihil veritatis ad. Odit, veritatis!</p>
                </div>
    
                <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
                    <div className="text-[55px] text-blue-500 duration-200 group-hover:text-white"><FiMenu/></div>
                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">Regular Updates</h4>
                    <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus nihil veritatis ad. Odit, veritatis!</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Service;
