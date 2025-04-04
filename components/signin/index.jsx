import { toast, Toast } from 'react-hot-toast';

import React, { useState, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import { useUserContext } from '../../context/userContext';


const SignIn = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, setRegistry } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) { signInUser(email, password) } else {
      toast.error('Email yoki parol xato')
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center h-[80vh]">

      <div className="mx-auto w-96 max-w-lg">
        <h1 className="text-center text-2xl font-bold text-blue-600 sm:text-3xl">
          Kirish
        </h1>
        <div>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
        >
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>

            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm border"
                placeholder="Enter email"
                ref={emailRef}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Parol
            </label>

            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm border"
                placeholder="Enter password"
                ref={psdRef}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 inline-flex items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg  bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200  px-5 py-3 text-sm font-medium text-white"
          >
            Kirish
          </button>

          <div className="text-center text-sm text-gray-500">
            <p>Hali ro&apos;yxatdan o&apos;tmadingizmi?</p>
            <p
              className="cursor-pointer hover:underline mt-1 "
              onClick={() => setRegistry(true)}
            >
              Ro&apos;yxatdan o&apos;tish
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
