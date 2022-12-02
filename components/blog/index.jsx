import React from "react";
import Link from "next/link";
import Image from 'next/image';
import none from '../../public/images/about-img1.jpg';

const Blog = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-8 md:px-6">
                {/* <!-- heading text --> */}
                <div className="mb-5 sm:mb-10">
                    <span className="font-medium text-blue-500">Our Blog</span>
                    <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">From Our Latest Blog</h1>
                </div>
                {/* <!-- wrapper --> */}
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                    {/* <!-- single-blog --> */}
                    <div className="w-full duration-200 hover:scale-95">
                        <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
                            <div className="w-full">
                                <Image src={none} alt="blog img" />
                            </div>
                        </div>
                        <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
                            <div className="">
                                <a href="#" className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">Services</a>
                                <a href="#" className="block pt-4 font-medium capitalize text-slate-800 hover:text-blue-500">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.</a>
                            </div>
                            <hr className="my-4 border-slate-100" />
                            <div className="flex">
                                <div className="mr-3 h-10 w-10 rounded-full object-cover">
                                    <Image src={none} alt="user img" />
                                </div>
                                <p className="text-sm font-semibold capitalize text-slate-600">Zahidul Hossain <span className="block text-xs text-slate-400">web designer</span></p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- single-blog --> */}
                    <div className="w-full duration-200 hover:scale-95">
                        <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
                            <div className="w-full">
                                <Image src={none} alt="blog img" />
                            </div>
                        </div>
                        <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
                            <div className="">
                                <Link href="#">
                                    <a className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">Services</a>
                                </Link>
                                <Link href="#">
                                    <a className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">Design</a>
                                </Link>
                                <Link href="#">
                                    <a className="block pt-4 font-medium capitalize text-slate-800 hover:text-blue-500">Dolore Placeat Ullam Architecto Deleniti Maxime Laborum</a>
                                </Link>
                            </div>
                            <hr className="my-4 border-slate-100" />
                            <div className="flex">
                                <div className="mr-3 h-10 w-10 rounded-full object-cover">
                                    <Image src={none} alt="user img" />
                                </div>
                                <p className="text-sm font-semibold capitalize text-slate-600">Zahidul Hossain <span className="block text-xs text-slate-400">web designer</span></p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- single-blog --> */}
                    <div className="w-full duration-200 hover:scale-95">
                        <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
                            <div className="w-full">
                                <Image src={none} alt="blog img" />
                            </div>
                        </div>
                        <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
                            <div className="">
                                <a href="#" className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">Website</a>
                                <a href="#" className="block pt-4 font-medium capitalize text-slate-800 hover:text-blue-500">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.</a>
                            </div>
                            <hr className="my-4 border-slate-100" />
                            <div className="flex">
                                <div className="mr-3 h-10 w-10 rounded-full object-cover">
                                    <Image src={none} alt="user img" />
                                </div>
                                <p className="text-sm font-semibold capitalize text-slate-600">Zahidul Hossain <span className="block text-xs text-slate-400">web designer</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
