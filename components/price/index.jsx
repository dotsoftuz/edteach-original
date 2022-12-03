import React from 'react';

const PriceCard = (props) => {
  let {
    degree,
    price,
    description1,
    description2,
    text1,
    text2,
    text3,
    text4,
    link,
  } = props;
  return (
    <div className="relative flex flex-col p-8 bg-white rounded-lg border-[1px] shadow-[5px_5px_5px_rgb(147_197_253_/_0.1)]">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-neutral-600">{degree}</h3>
        <p className="flex items-baseline mt-4 text-neutral-600">
          <span className="text-5xl font-extrabold tracking-tight">
            ${price}
          </span>
          <span className="ml-1 text-xl font-semibold">/month</span>
        </p>
        <p className="mt-6 text-gray-500">{description1}</p>
        {/* <!-- Feature list --> */}
        <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
          <span className="text-lg font-semibold text-neutral-600">
            {description2}
          </span>
          <li className={text1 ? 'flex' : 'hidden'}>
            <div className="inline-flex items-center min-w-[1.5rem] w-[1.5rem] h-6 bg-blue-600 rounded-xl">
              <svg
                className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <span className="ml-3 text-neutral-600">{text1}</span>
          </li>
          <li className={text2 ? 'flex' : 'hidden'}>
            <div className="inline-flex items-center min-w-[1.5rem] w-[1.5rem] h-6 bg-blue-600 rounded-xl">
              <svg
                className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <span className="ml-3 text-neutral-600">{text2}</span>
          </li>
          <li className={text3 ? 'flex' : 'hidden'}>
            <div className="inline-flex items-center min-w-[1.5rem] w-[1.5rem] h-6 bg-blue-600 rounded-xl">
              <svg
                className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <span className="ml-3 text-neutral-600">{text3}</span>
          </li>
          <li className={text4 ? 'flex' : 'hidden'}>
            <div className="inline-flex items-center min-w-[1.5rem] w-[1.5rem] h-6 bg-blue-600 rounded-xl">
              <svg
                className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <span className="ml-3 text-neutral-600">{text4}</span>
          </li>
        </ul>
      </div>
      <div className="mt-6 rounded-lg outline-none">
        <a
          href={link}
          className="w-full items-center block px-10 py-3.5 text-base font-medium text-center  text-blue-600 hover:bg-blue-500  hover:text-white transition duration-500 ease-in-out transform border-[2px]  border-white shadow-md rounded-xl  focus:border-gray-500 focus:ring-offset-2 focus:ring-gray-500 bg-white"
        >
          {' '}
          Tanlash{' '}
        </a>
      </div>
    </div>
  );
};

const Price = () => {
  return (
    <section>
      <div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div>
          <div className="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Up to 10 credit cards</span>
                  </li>

                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Up to 10,000 credits</span>
                  </li>

                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Less tacky wallet </span>
                  </li>

                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-white">Profile and portafolio</span>
                  </li>

                  <li className="flex">
                    <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
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
