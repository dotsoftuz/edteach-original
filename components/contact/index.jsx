import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

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
        "service_ehwyfsf",
        "template_4fnw3cw",
        form.current,
        "dqmWfjKjx0kj0b5np"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Habaringiz muvaffaqiyatli jo`natildi.");
          setInputs(() => ({}));
        },
        (error) => {
          console.log(error.text);
          toast.error("Serverda xato yuz berdi.");
        }
      );
  };
  return (
    <div className="container mx-auto px-5   sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      {/* Message send */}
      <div className="">
        <form
          className="lg:w-[60%] lg:my-4 w-full mx-auto"
          ref={form}
          onSubmit={sendEmail}
        >
          <Toaster />
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900  "
              >
                Ismizngiz
              </label>
              <input
                name="first_name"
                type="text"
                id="first_name"
                className="bg-neutral-20 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ismingiz"
                value={inputs.first_name || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Familyangiz
              </label>
              <input
                name="last_name"
                type="text"
                id="last_name"
                className="bg-neutral-20 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Familyangiz"
                value={inputs.last_name || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Emailingiz
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-neutral-20 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="email@mail.com"
                value={inputs.email || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Telifon Raqamingiz
              </label>
              <input
                name="phone_number"
                type="tel"
                id="phone"
                className="bg-neutral-20 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="91-654-42-35"
                value={inputs.phone_number || ""}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Xabarizgiz
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm outline-none  text-gray-900 bg-neutral-20 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Xabaringiz"
              value={inputs.message || ""}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="mx-auto mt-4 cursor-pointer rounded-lg  py-3 px-8
                         text-xs md:text-sm font-medium bg-green-400 hover:bg-green-500 text-[white]  shadow-md  shadow-cyan-500/50
                         duration-500 ease-in-out active:scale-95 active:bg-opacity-80"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
