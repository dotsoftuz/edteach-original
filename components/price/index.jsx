import React from 'react';

const PriceCard = (props) => {
  let { degree, price, description, text1, text2, text3, text4, text5, link } =
    props;
  return (
    <div className="sm:min-h-[530px] xl:min-h-[500px] sm:relative rounded-lg shadow-lg p-5">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl  lg:text-3xl font-semibold text-[#333333]">
          {degree}
        </h3>
        <span className="flex items-center text-2xl pt-5 md:text-3xl  lg:text-4xl">
          <svg
            className="block translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 22 22"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
            <path d="M12 3v3m0 12v3" />
          </svg>
          {price}/ <b className="font-medium  lg:text-3xl">oy</b>
        </span>
        <p className="text-[17px] pt-7 pb-5 text-[#3a3b3b] tracking-wide ">
          {description}
        </p>
        <div
          className={
            text1
              ? 'flex gap-3 items-center pt-3 md:pt-4 sm:ml-4 lg:ml-0 xl:ml-12 mr-auto'
              : 'hidden'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon bg-[#393B3D] text-[white] min-w-[23px] rounded-full"
            height="22px"
            viewBox="0 0 512 512"
          >
            <title>Checkmark Circle</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="32"
              d="M352 176L217.6 336 160 272"
            />
          </svg>
          <p className="text-[16px]"> {text1}</p>
        </div>
        <div
          className={
            text2
              ? 'flex gap-3 items-center pt-3 md:pt-4 sm:ml-4 lg:ml-0 xl:ml-12 mr-auto'
              : 'hidden'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon bg-[#393B3D] text-[white] min-w-[23px] rounded-full"
            height="22px"
            viewBox="0 0 512 512"
          >
            <title>Checkmark Circle</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="32"
              d="M352 176L217.6 336 160 272"
            />
          </svg>
          <p className="text-[16px]"> {text2}</p>
        </div>
        <div
          className={
            text3
              ? 'flex gap-3 items-center pt-3 md:pt-4 sm:ml-4 lg:ml-0 xl:ml-12 mr-auto'
              : 'hidden'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon bg-[#393B3D] text-[white] min-w-[23px] rounded-full"
            height="22px"
            viewBox="0 0 512 512"
          >
            <title>Checkmark Circle</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="32"
              d="M352 176L217.6 336 160 272"
            />
          </svg>
          <p className="text-[16px]"> {text3}</p>
        </div>
        <div
          className={
            text4
              ? 'flex gap-3 items-center pt-3 md:pt-4 sm:ml-4 lg:ml-0 xl:ml-12 mr-auto'
              : 'hidden'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon bg-[#393B3D] text-[white] min-w-[23px] rounded-full"
            height="22px"
            viewBox="0 0 512 512"
          >
            <title>Checkmark Circle</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="32"
              d="M352 176L217.6 336 160 272"
            />
          </svg>
          <p className="text-[16px]"> {text4}</p>
        </div>
        <div
          className={
            text5
              ? 'flex gap-3 items-center pt-3 md:pt-4 sm:ml-4 lg:ml-0 xl:ml-12 mr-auto'
              : 'hidden'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon bg-[#393B3D] text-[white] min-w-[23px] rounded-full"
            height="22px"
            viewBox="0 0 512 512"
          >
            <title>Checkmark Circle</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="32"
              d="M352 176L217.6 336 160 272"
            />
          </svg>
          <p className="text-[16px]"> {text5}</p>
        </div>
        <a href={link}>
          <button className="sm:text-[18px] sm:font-[500] mt-10 rounded-md text-[white] duration-400 text-center bg-blue-500 hover:bg-blue-400 py-[10px] px-[70px] sm:py-[10px] sm:px-[90px] sm:absolute sm:bottom-5 sm:left-[15%] lg:left-5  xl:left-[19%] ">
            Tanlash
          </button>
        </a>
      </div>
    </div>
  );
};

const Price = () => {
  return (
    <div className="container mx-auto py-10" id="price">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold uppercase  text-[#333333]">
        Obuna va Narxlar
      </h2>
      <p className="text-center text-xl  sm:text-2xl pt-2 md:pt-4 lg:pt-5 text-[#333333]">
        Biz sizga maqbul keladigan eng qulay narxdagi xizmatlarni taklif qilamiz
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <PriceCard
          degree="Oddiy"
          price="1"
          description="Yakka taribdagi obuna uchun"
          text1="Savol javob"
          text2="Viktorina yaratish uchun"
          text3="Savol uchun 50 ta simvol"
          text4="Javob uchun 20 simvol"
          link="#"
        />
        <PriceCard
          degree="O'rta"
          price="8"
          description="Yakka taribdagi obuna uchun"
          text1="Savol-javoblar va viktorina yaratish"
          text2="Ko’p variantlilik, to’g’ri/noto’g’ri, bo’sh joyni to’ldirish"
          text3="Taqdimot namoyish etish"
          text4="savollar uchun 150 ta simvol, javoblar uchun 70 ta simvol"
          link="#"
        />
        <PriceCard
          degree="Maxsus"
          price="10"
          description="Korporativ obuna"
          text1="Cheklanmagan miqdordagi foydalanish"
          link="#"
        />
      </div>
    </div>
  );
};

export default Price;
