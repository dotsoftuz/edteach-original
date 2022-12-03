import React from 'react';

const PriceCard = (props) => {
  let { degree, price, blueBox, description1, description2, text1, text2, text3, text4, link } = props;
  return (
    // <div className="sm:min-h-[530px] xl:min-h-[500px] sm:relative rounded-lg shadow-lg p-5">
    //   <div className="flex flex-col items-center">
    //     <h3 className="text-2xl  lg:text-3xl font-semibold text-[#333333]">
    //       {degree}
    //     </h3>
    //     <span className="flex items-center text-2xl pt-5 md:text-3xl  lg:text-4xl">
    //       <svg
    //         className="block translate-x-1"
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="40"
    //         height="40"
    //         viewBox="0 0 22 22"
    //         strokeWidth="1"
    //         stroke="currentColor"
    //         fill="none"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //         <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
    //         <path d="M12 3v3m0 12v3" />
    //       </svg>
    //       {price}/ <b className="font-medium  lg:text-3xl">oy</b>
    //     </span>
    //     <p className="text-[17px] pt-7 pb-5 text-[#3a3b3b] tracking-wide ">
    //       {description}
    //     </p>
    //     <div
    //       className={
    //         text1
    //           ? 'flex gap-3 items-center pt-3 md:pt-4 sm:ml-4 lg:ml-0 xl:ml-12 mr-auto'
    //           : 'hidden'
    //       }
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="ionicon bg-[#393B3D] text-[white] min-w-[23px] rounded-full"
    //         height="22px"
    //         viewBox="0 0 512 512"
    //       >
    //         <title>Checkmark Circle</title>
    //         <path
    //           d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    //           fill="none"
    //           strokeWidth="32"
    //         />
    //         <path
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="32"
    //           d="M352 176L217.6 336 160 272"
    //         />
    //       </svg>
    //       <p className="text-[16px]"> {text1}</p>
    //     </div>
    //     <div
    //       className={
    //         text2
    //           ? 'flex gap-3 items-center pt-3 md:pt-4 sm:ml-4 lg:ml-0 xl:ml-12 mr-auto'
    //           : 'hidden'
    //       }
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="ionicon bg-[#393B3D] text-[white] min-w-[23px] rounded-full"
    //         height="22px"
    //         viewBox="0 0 512 512"
    //       >
    //         <title>Checkmark Circle</title>
    //         <path
    //           d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    //           fill="none"
    //           strokeWidth="32"
    //         />
    //         <path
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="32"
    //           d="M352 176L217.6 336 160 272"
    //         />
    //       </svg>
    //       <p className="text-[16px]"> {text2}</p>
    //     </div>
    //     <div
    //       className={
    //         text3
    //           ? 'flex gap-3 items-center pt-3 md:pt-4 sm:ml-4 lg:ml-0 xl:ml-12 mr-auto'
    //           : 'hidden'
    //       }
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="ionicon bg-[#393B3D] text-[white] min-w-[23px] rounded-full"
    //         height="22px"
    //         viewBox="0 0 512 512"
    //       >
    //         <title>Checkmark Circle</title>
    //         <path
    //           d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    //           fill="none"
    //           strokeWidth="32"
    //         />
    //         <path
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="32"
    //           d="M352 176L217.6 336 160 272"
    //         />
    //       </svg>
    //       <p className="text-[16px]"> {text3}</p>
    //     </div>
    //     <div
    //       className={
    //         text4
    //           ? 'flex gap-3 items-center pt-3 md:pt-4 sm:ml-4 lg:ml-0 xl:ml-12 mr-auto'
    //           : 'hidden'
    //       }
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="ionicon bg-[#393B3D] text-[white] min-w-[23px] rounded-full"
    //         height="22px"
    //         viewBox="0 0 512 512"
    //       >
    //         <title>Checkmark Circle</title>
    //         <path
    //           d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    //           fill="none"
    //           strokeWidth="32"
    //         />
    //         <path
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="32"
    //           d="M352 176L217.6 336 160 272"
    //         />
    //       </svg>
    //       <p className="text-[16px]"> {text4}</p>
    //     </div>
    //     <div
    //       className={
    //         text5
    //           ? 'flex gap-3 items-center pt-3 md:pt-4 sm:ml-4 lg:ml-0 xl:ml-12 mr-auto'
    //           : 'hidden'
    //       }
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="ionicon bg-[#393B3D] text-[white] min-w-[23px] rounded-full"
    //         height="22px"
    //         viewBox="0 0 512 512"
    //       >
    //         <title>Checkmark Circle</title>
    //         <path
    //           d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    //           fill="none"
    //           strokeWidth="32"
    //         />
    //         <path
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="32"
    //           d="M352 176L217.6 336 160 272"
    //         />
    //       </svg>
    //       <p className="text-[16px]"> {text5}</p>
    //     </div>
    //     <a href={link}>
    //       <button className="sm:text-[18px] sm:font-[500] mt-10 rounded-md text-[white] duration-400 text-center bg-blue-500 hover:bg-blue-400 py-[10px] px-[70px] sm:py-[10px] sm:px-[90px] sm:absolute sm:bottom-5 sm:left-[15%] lg:left-5  xl:left-[19%] ">
    //         Tanlash
    //       </button>
    //     </a>
    //   </div>
    // </div>
    <div className={`${blueBox === "blue" ? "bg-blue-600" : ""} relative flex flex-col p-8 bg-white rounded-lg border-[1px] shadow-[5px_5px_5px_rgb(147_197_253_/_0.1)]`}>
      <div className="flex-1">
        <h3 className={`${blueBox === "blue" ? "!text-white" : ""} text-xl font-semibold text-neutral-600`}>{degree}</h3>
        <p className="flex items-baseline mt-4 text-neutral-600">
          <span className={`${blueBox === "blue" ? "!text-white" : ""} text-5xl font-extrabold tracking-tight`}>${price}</span>
          <span className={`${blueBox === "blue" ? "!text-white" : ""} ml-1 text-xl font-semibold`}>/month</span>
        </p>
        <p className={`${blueBox === "blue" ? "!text-white" : ""} mt-6 text-gray-500`}>{description1}</p>
        {/* <!-- Feature list --> */}
        <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
          <span className={`${blueBox === "blue" ? "!text-white" : ""} text-lg font-semibold text-neutral-600`}>{description2}</span>

          <li className={text1 ? "flex" : "hidden"}>
            <div className={`${blueBox === "blue" ? "!bg-white" : ""} inline-flex items-center min-w-[1.5rem] w-[1.5rem] h-6 bg-blue-600 rounded-xl`}>
              <svg className={`${blueBox === "blue" ? "!text-blue-600" : ""} flex-shrink-0 w-4 h-4 mx-auto text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className={`${blueBox === "blue" ? "!text-white" : ""} ml-3 text-neutral-600`}>{text1}</span>
          </li>

          <li className={text2 ? "flex" : "hidden"}>
            <div className={`${blueBox === "blue" ? "!bg-white" : ""} inline-flex items-center min-w-[1.5rem] w-[1.5rem] h-6 bg-blue-600 rounded-xl`}>
              <svg className={`${blueBox === "blue" ? "!text-blue-600" : ""} flex-shrink-0 w-4 h-4 mx-auto text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className={`${blueBox === "blue" ? "!text-white" : ""} ml-3 text-neutral-600`}>{text2}</span>
          </li>

          <li className={text3 ? "flex" : "hidden"}>
            <div className={`${blueBox === "blue" ? "!bg-white" : ""} inline-flex items-center min-w-[1.5rem] w-[1.5rem] h-6 bg-blue-600 rounded-xl`}>
              <svg className={`${blueBox === "blue" ? "!text-blue-600" : ""} flex-shrink-0 w-4 h-4 mx-auto text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className={`${blueBox === "blue" ? "!text-white" : ""} ml-3 text-neutral-600`}>{text3}</span>
          </li>

          <li className={text4 ? "flex" : "hidden"}>
            <div className={`${blueBox === "blue" ? "!bg-white" : ""} inline-flex items-center min-w-[1.5rem] w-[1.5rem] h-6 bg-blue-600 rounded-xl`}>
              <svg className={`${blueBox === "blue" ? "!text-blue-600" : ""} flex-shrink-0 w-4 h-4 mx-auto text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className={`${blueBox === "blue" ? "!text-white" : ""} ml-3 text-neutral-600`}>{text4}</span>
          </li>

        </ul>
      </div>
      <div className="mt-6 rounded-lg outline-none">
        <a href={link} className="w-full items-center block px-10 py-3.5 text-base font-medium text-center  text-blue-600 hover:bg-blue-500  hover:text-white transition duration-500 ease-in-out transform border-[2px]  border-white shadow-md rounded-xl  focus:border-gray-500 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Tanlash </a>
      </div>
    </div>
  );
};

const Price = () => {
  return (
    <section className='pt-16'>
      <div className="relative items-center container mx-auto ">
        {/* <!-- heading text --> */}
        <div className="mb-5 sm:mb-10">
          <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">Obuna va Narxlar</h1>
          <p className='mx-auto max-w-2 mt-2 text-slate-500'>Biz sizga maqbul keladigan eng qulay narxdagi xizmatlarni taklif qilamiz</p>
        </div>
        <div>
          <div className="relative space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl">
            <PriceCard
              degree="Oddiy"
              price="1"
              description1="Yakka taribdagi obuna uchun"
              description2="Nimalar kiradi?"
              text1="Savol javob"
              text2="Viktorina yaratish uchun"
              text3="Savol uchun 50 ta simvol"
              text4="Javob uchun 20 simvol"
              link="#"
            />
            <PriceCard
              blueBox="blue"
              degree="O'rta"
              price="8"
              description1="Yakka taribdagi obuna uchun"
              description2="Nimalar kiradi?"
              text1="Savol-javoblar va viktorina yaratish"
              text2="Ko’p variantlilik, to’g’ri/noto’g’ri, bo’sh joyni to’ldirish"
              text3="Taqdimot namoyish etish"
              text4="savollar uchun 150 ta simvol, javoblar uchun 70 ta simvol"
              link="#"
            />
            <PriceCard
              degree="Maxsus"
              price="10"
              description1="Korporativ obuna"
              description2="Nimalar kiradi?"
              text1="Cheklanmagan miqdordagi foydalanish"
              link="#"
            />

            {/* <div className="relative flex flex-col p-8 bg-blue-600 rounded-2xl">
              <div className="relative flex-1">
                <h3 className="text-xl font-semibold text-white">Startup</h3>

                <p className="flex items-baseline mt-4 text-white">
                  <span className="text-5xl font-extrabold tracking-tight">$32</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-white text-solitud">A plan that scales with your rapidly growing business.</p>

                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                  <span className="text-lg font-semibold text-white">What's included?</span>

                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Up to 10 credit cards</span>
                  </li>

                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Up to 10,000 credits</span>
                  </li>

                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Less tacky wallet </span>
                  </li>

                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Profile and portafolio</span>
                  </li>

                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Support</span>
                  </li>
                </ul>
              </div>
              <div className="z-50 mt-6 rounded-lg">
                <a href="/pricing" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get started </a>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
