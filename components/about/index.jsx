import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import { IoBriefcaseSharp } from 'react-icons/io5';
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {AiOutlineCodeSandbox} from "react-icons/ai"
import about from 'public/images/about.svg';

const About = () => {
  return (
    <section className="py-16">
      <div className="mx-auto container">
        <div className="md:flex md:justify-between md:gap-6">
          <div className="md:w-6/12">
            {/* <!-- heading text --> */}
            <div className="mb-5 sm:mb-10">
              <span className="font-medium text-blue-500">About Us</span>
              <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
                Creative Marketing agency
              </h1>
            </div>
            <p className="text-slate-500 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              corporis delectus commodi suscipit dolores? Laudantium natus
              consectetur maiores architecto iste?
            </p>
            <ul>
              <li className="mb-6 flex items-center">
                <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                  <IoBriefcaseSharp />
                </div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                  <AiOutlineCodeSandbox />
                </div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  Omnis unde nam quia harum voluptatum itaque iste nostrum amet
                  vero.
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                  <MdOutlineMarkEmailUnread />
                </div>
                <p className="ml-4 max-w-md font-medium text-slate-600">
                  Id quos et quidem perspiciatis similique! Rerum, natus
                  temporibus.
                </p>
              </li>
            </ul>
            <button className="w-full rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 md:w-max">
              Get Started
            </button>
          </div>
          {/* <!-- about img --> */}
          <div className="mt-8 flex justify-center md:mt-0 md:w-5/12">
            <div className="max-h-[500px] about-Img md:max-h-max">
              <Image src={about} alt="about img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
