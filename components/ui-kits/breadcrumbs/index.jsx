import React from 'react';
import Link from 'next/link';

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 mt-1 text-gray-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

const Breadcrumb = (props) => {
  const { page, page2, link, active = false } = props;

  return (
    <div className="flex items-center space-x-1 md:space-x-2 pt-5 !md:pt-3 p-5 pl-7 md:pr-[2rem] lg:pr-[4rem]">
      <Link href="/">
        <a className="font-semibold">Bosh sahifa</a>
      </Link>
      <ArrowIcon />
      <Link href={link}>
        <a
          className={
            active
              ? 'text- cursor-pointer font-semibold'
              : 'text-blue-500 cursor-text font-semibold'
          }
        >
          {page}
        </a>
      </Link>
      {page2 && (
        <span className="flex items-center space-x-1 md:space-x-2">
          <ArrowIcon />
          <h3
            className={
              active
                ? 'text-blue-500 font-semibold'
                : 'text-black font-semibold'
            }
          >
            {page2}
          </h3>
        </span>
      )}
    </div>
  );
};

export default Breadcrumb;
