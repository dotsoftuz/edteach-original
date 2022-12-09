import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { IoLocationOutline, IoCallOutline } from "react-icons/io5"
import { CiMail } from "react-icons/ci"

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
        <div>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </div>
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          {/* <!-- left info--> */}
          <div className="w-full px-4 md:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h1 className="mb-3 text-2xl font-bold text-slate-700 sm:text-3xl">
                Biz bilan bog&apos;laning
              </h1>

              {/* <!-- address --> */}
              <div className="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                  <div className="text-3xl">
                    <IoLocationOutline />
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-slate-700">
                    Bizning manzil
                  </h4>
                  <p className="text-base text-slate-400">
                    130100 Jizzax viloyati, Jizzax shahri, Sharof Rashidov ko`chasi 4-uy.
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
                    Telefon raqam
                  </h4>
                  <p className="text-base text-slate-400">
                    (+998) 99-555-26-85
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
                    Elektron pochta
                  </h4>
                  <p className="text-base text-slate-400">argos.16.01@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- right contact--> */}
          <div className="w-full px-4 md:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg shadow-blue-500/10 sm:p-12">
              <form onSubmit={sendEmail} ref={form}>
                <div className="mb-6">
                  <input
                    type="text"
                    name="first_name"

                    id="first_name"
                    value={inputs.first_name || ''}
                    onChange={handleChange}
                    placeholder="Ismingiz"
                    className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    id='email'
                    onChange={handleChange}
                    value={inputs.email || ''}
                    placeholder="Sizning Elektron Manzilingiz"

                    className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    name="phone_number"
                    type="tel"
                    id="phone"
                    value={inputs.phone_number || ''}
                    onChange={handleChange}
                    placeholder="Telefon raqamingiz"
                    className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    onChange={handleChange}
                    name="message"
                    id="message"
                    value={inputs.message || ''}
                    placeholder="Xabaringiz"
                    rows="6"
                    className="resize-none w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  ></textarea>
                </div>
                <div>
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



