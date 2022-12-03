import React from 'react';

const PriceCard = (props) => {
  let { degree, price, blueBox, description1, description2, text1, text2, text3, text4, link } = props;
  return (
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
    <section id='price' className='pt-16'>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
