import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import {IoLocationOutline, IoCallOutline} from "react-icons/io5"
import {CiMail} from "react-icons/ci"

const Contact = () => {
  const [inputs, setInputs] = useState({});
  const form = useRef();

  const handleChange = (e) =>
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ehwyfsf',
        'template_4fnw3cw',
        form.current,
        'dqmWfjKjx0kj0b5np'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Habaringiz muvaffaqiyatli jo`natildi.');
          setInputs(() => ({}));
        },
        (error) => {
          console.log(error.text);
          toast.error('Serverda xato yuz berdi.');
        }
      );
  };
  return (
    <section id='contact' className="relative overflow-hidden py-16">
      <div className="mx-auto container">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          {/* <!-- left info--> */}
          <div className="w-full px-4 md:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="font-medium text-blue-500">Aloqaga chiqish</span>
              <h1 className="mb-3 text-2xl font-bold text-slate-700 sm:text-3xl">
                BIZ BILAN BOG'LANING
              </h1>
              <p className="text-slate-500 mb-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                inventore illo porro molestiae maxime magni natus illum commodi!
                Modi, quisquam?
              </p>
              {/* <!-- address --> */}
              <div className="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                  <div className="text-3xl">
                    <IoLocationOutline />
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-slate-700">
                    Bizning Manzilimiz
                  </h4>
                  <p className="text-base text-slate-400">
                    4236 Woodland Terrace. Sacramento. California
                  </p>
                </div>
              </div>
              {/* <!-- phone --> */}
              <div className="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                  <div className="text-3xl">
                    <IoCallOutline />
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-slate-700">
                    Telofon Raqamimiz
                  </h4>
                  <p className="text-base text-slate-400">
                    (+62)01 234 567 8912
                  </p>
                </div>
              </div>
              {/* <!-- mail --> */}
              <div className="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                  <div className="text-3xl">
                    <CiMail />
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-slate-700">
                    Elektron Pochtamiz
                  </h4>
                  <p className="text-base text-slate-400">company@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- right contact--> */}
          <div className="w-full px-4 md:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg shadow-blue-500/10 sm:p-12">
              <form action="">
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Ismingiz"
                    className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Sizning Elektron Manzilingiz"
                    className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Sizning Parolingiz"
                    className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    rows="6"
                    className="resize-none w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  ></textarea>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="w-full rounded border border-blue-300 bg-blue-500 p-3 text-white transition-all hover:bg-opacity-90"
                  >
                    Xabarni Yuborish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




    // <div Kerak
    //   id="contact"
    //   className="container mx-auto px-5 pt-14  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    // >
    //   <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold uppercase  text-[#333333]">
    //     AlOQAGA CHIQINCH
    //   </h2>
    //   {/* Message send */}
    //   <div className="pt-7">
    //     <form
    //       className="lg:w-[60%] lg:my-4 w-full mx-auto"
    //       ref={form}
    //       onSubmit={sendEmail}
    //     >
    //       <Toaster />
    //       <div className="grid gap-6 mb-6 lg:grid-cols-2">
    //         <div>
    //           <label
    //             htmlFor="first_name"
    //             className="block mb-2 text-sm font-medium text-gray-900  "
    //           >
    //             Ismizngiz
    //           </label>
    //           <input
    //             name="first_name"
    //             type="text"
    //             id="first_name"
    //             className="bg-neutral-20 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //             placeholder="Ismingiz"
    //             value={inputs.first_name || ''}
    //             onChange={handleChange}
    //             required
    //           />
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="last_name"
    //             className="block mb-2 text-sm font-medium text-gray-900 "
    //           >
    //             Familyangiz
    //           </label>
    //           <input
    //             name="last_name"
    //             type="text"
    //             id="last_name"
    //             className="bg-neutral-20 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //             placeholder="Familyangiz"
    //             value={inputs.last_name || ''}
    //             onChange={handleChange}
    //             required
    //           />
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="company"
    //             className="block mb-2 text-sm font-medium text-gray-900 "
    //           >
    //             Emailingiz
    //           </label>
    //           <input
    //             name="email"
    //             type="email"
    //             id="email"
    //             className="bg-neutral-20 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //             placeholder="email@mail.com"
    //             value={inputs.email || ''}
    //             onChange={handleChange}
    //             required
    //           />
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="phone"
    //             className="block mb-2 text-sm font-medium text-gray-900 "
    //           >
    //             Telifon Raqamingiz
    //           </label>
    //           <input
    //             name="phone_number"
    //             type="tel"
    //             id="phone"
    //             className="bg-neutral-20 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //             placeholder="91-654-42-35"
    //             value={inputs.phone_number || ''}
    //             onChange={handleChange}
    //             required
    //           />
    //         </div>
    //       </div>
    //       <div>
    //         <label
    //           htmlFor="message"
    //           className="block mb-2 text-sm font-medium text-gray-900"
    //         >
    //           Xabarizgiz
    //         </label>
    //         <textarea
    //           name="message"
    //           id="message"
    //           rows={4}
    //           className="block p-2.5 w-full text-sm outline-none  text-gray-900 bg-neutral-20 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    //           placeholder="Xabaringiz"
    //           value={inputs.message || ''}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         className="w-fit flex mt-4 items-center rounded-lg py-2 px-8 font-medium shadow-md text-sm md:text-base duration-300
    //         active:bg-opacity-80 cursor-pointer ease-in-out active:scale-95 bg-blue-500
    //         dark:bg-[#1a5cff] text-white hover:shadow-md"
    //       >
    //         Yuborish
    //       </button>
    //     </form>
    //   </div>
    // </div>
