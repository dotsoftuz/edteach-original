import { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

import { useUserContext } from 'context/userContext';
import { db } from '../../firebase';
import Head from 'next/head';

import triangle from '../../public/images/triangle.svg';
import square from '../../public/images/square.svg';
import circle from '../../public/images/circle.svg';
import diamond from '../../public/images/diamond.svg';

const CreateTest = () => {
  const { userName } = useUserContext();
  const [testId, setTestId] = useState(0);

  const [input, setInput] = useState([
    {
      question: '',
      answerList: [
        {
          name: 'a',
          body: '',
          isCorrect: false,
          bgColor: 'red',
          svgIcon: 'triangle',
        },
        {
          name: 'b',
          body: '',
          isCorrect: false,
          bgColor: 'blue',
          svgIcon: 'square',
        },
        {
          name: 'c',
          body: '',
          isCorrect: false,
          bgColor: 'yellow',
          svgIcon: 'circle',
        },
        {
          name: 'd',
          body: '',
          isCorrect: false,
          bgColor: 'gren',
          svgIcon: 'diamond',
        },
      ],
    },
  ]);

  const { uid } = useUserContext();
  const questColl = collection(db, `question`);

  const [questionTime, setQuestionTime] = useState('30000');
  const [questionVisibility, setQuestionVisibility] = useState('public');

  const router = useRouter();

  let getValue = (i, e) => {
    let newInput = [...input];
    newInput[i][e.target.name] = e.target.value;
    setInput(newInput);
  };

  let getValue2 = (index, i, e) => {
    let newInput = [...input];
    newInput[index].answerList[i][e.target.name] = e.target.value;
    setInput(newInput);
  };

  const getCorrectAnswer = (index, i) => {
    let newInput = [...input];
    newInput[index].answerList.map((item, key) => {
      key === i ? (item.isCorrect = true) : (item.isCorrect = false);
    });

    setInput(newInput);
  };

  let addFormFields = () => {
    setTestId(testId + 1);
    setInput([
      ...input,
      {
        question: '',
        answerList: [
          {
            name: 'a',
            body: '',
            isCorrect: false,
            bgColor: 'red',
            svgIcon: 'triangle',
          },
          {
            name: 'b',
            body: '',
            isCorrect: false,
            bgColor: 'blue',
            svgIcon: 'square',
          },
          {
            name: 'c',
            body: '',
            isCorrect: false,
            bgColor: 'yellow',
            svgIcon: 'circle',
          },
          {
            name: 'd',
            body: '',
            isCorrect: false,
            bgColor: 'gren',
            svgIcon: 'diamond',
          },
        ],
      },
    ]);
  };

  const time = [
    {
      name: '30 soniya',
      value: 30000,
    },
    {
      name: '1 daqiqa',
      value: 60000,
    },
    {
      name: '3 daqiqa',
      value: 1800000,
    },
    {
      name: '5 daqiqa',
      value: 3500000,
    },
  ];

  const visibility = [
    {
      name: 'Ommaviy',
      value: 'public',
    },
    {
      name: 'Yashirin',
      value: 'private',
    },
  ];

  let removeFormFields = (i) => {
    let newInput = [...input];
    newInput.splice(i, 1);

    setInput(newInput);
    setTestId(testId - 1);
  };

  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    questionList: [],
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setQuizData({
      ...quizData,
      [e.target.name]: value,
    });
  };

  const handleChangetime = (e) => {
    setQuestionTime(e.target.value);
  };
  const handleChangeVisibilty = (e) => {
    setQuestionVisibility(e.target.value);
  };

  const date = new Date();
  const prefixTime = new Date().getTime();

  let data = {
    title: quizData.title,
    description: quizData.description,
    createrName: userName,
    questionList: input,
    questionTime,
    date,
    prefixTime,
    questionVisibility,
    uid,
    playerId: []
  };

  // const body = input.map((item) => item.answerList.map((item2) => item2.body));
  // const question = input.map((item) => item.question);

  // useEffect(() => {
  //   if (!data.title) {
  //     toast.error("Testga sarlovha qo'ying");
  //   } else if (!data.description) {
  //     toast.error('Testga sharh yozing');
  //   } else if (input.map((item) => item.question === '')) {
  //     toast.error('Testga savol yozing');
  //   } else {
  //     toast.success("Test muvoffaqiyatli qo'shildi");
  //   }
  // }, [input]);

  // useEffect(() => {
  //   const hello = input.map((item) =>
  //     item.answerList.map((item2) => item2.isCorrect)
  //   );
  //   console.log(hello.some((e) => e === true));
  //   console.log(hello);
  // }, [input]);

  // console.log(data);

  const createQuest = async (e) => {
    e.preventDefault();
    try {
      if (!data.title) {
        toast.error("Testga sarlovha qo'ying");
      } else if (!data.description) {
        toast.error('Testga sharh yozing');
      } else {
        await addDoc(questColl, data);
        toast.success("Test muvoffaqiyatli qo'shildi");
        setTimeout(() => {
          router.push('/dashboard/question');
        }, 2000);
      }
    } catch (error) {
      toast.error('Somthing wrong');
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };

  const [isToggled, setIsToggled] = useState(true);
  const handleClick = () => setIsToggled(!isToggled);

  return (
    <div className="lg:flex !overflow-hidden w-full h-screen pt-14 relative  over">
      <div>
        <Toaster />
      </div>
      {/* createTest top blok */}
      <div className="absolute top-0 left-0 w-full z-20 bg-white ">
        <div className="px-2 py-3 md:px-5   w-full  shadow-[0px_0px_5px_#80838b]  ">
          <div className="flex items-center gap-20 ml-12 justify-between">
            <div className="flex items-center gap-5">
              <label className="font-bold text-lg text-gray-500">
                Sarlovha
              </label>
              <input
                className="lg:min-w-[300px] border-gray-300 border-[1px] outline-none py-2 px-2 text-sm duration-200 placeholder-gray-800"
                type="text"
                onChange={handleChange}
                value={quizData.title}
                name="title"
                placeholder="Misol: Geografiya"
              />
            </div>
            <div className="flex">
              <button
                className="w-full rounded-lg py-2 px-8 mx-2 cursor-pointer active:scale-95
                shadow-md text-sm duration-300 border bg-white hover:bg-gray-100  active:bg-opacity-80
                ease-in-out md:text-sm text-[#1a5cff] mt-2"
                onClick={() => router.push('/dashboard/profile')}
              >
                Chiqish
              </button>
              <button
                className="w-full rounded-lg py-2 px-8 mx-2 cursor-pointer active:scale-95
               shadow-md text-sm duration-300 border bg-[#1a5cff] hover:bg-[#0d51fd]  active:bg-opacity-80
               ease-in-out md:text-sm text-white mt-2"
                onClick={createQuest}
              >
                Jo`natish
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* createTest left blok */}
      <div className="min-w-[12rem] p-5 pt-7 flex flex-col items-center h-0 overflow-auto overflow-x-hidden min-h-screen shadow-[0px_0px_5px_#80838b] z-10">
        {input.map((item, key) => {
          return (
            <>
              <div
                className="w-full !min-h-[7rem] bg-black mb-4  text-slate-50"
                onClick={() => setTestId(key)}
              >
                {' '}
                Question {key}{' '}
              </div>
              {key > 0 ? (
                <button
                  type="button"
                  className="btn-danger btn-sm mb-4 text-sm w-full bg-[#dc3545] text-white rounded-lg py-[6px] px-3  cursor-pointer"
                  onClick={() => removeFormFields(testId)}
                >
                  Remove
                </button>
              ) : null}
            </>
          );
        })}
        <br />
        <button
          className="btn text-sm btn-info  w-full bg-[#1a5cff] text-white rounded-lg py-2 px-3  cursor-pointer"
          type="button"
          onClick={() => addFormFields()}
        >
          {' '}
          Savol qo`shish
        </button>
      </div>
      {/* createTest center blok */}
      <div className="form-box p-5 pt-10 w-full min-h-full pr-7 flex  items-start overflow-hidden bg-slate-100">
        <form className="w-full min-h-full">
          <div className="form min-h-full flex flex-col justify-between">
            <input
              className="w-full rounded-lg h-[50px] text-[20px] p-4 outline-none bg-gray-200 shadow-[0_1px_3px_#80838b] text-center placeholder:text-gray-700"
              type="text"
              name="question"
              placeholder="Savolingizni yozing"
              value={!input[testId] ? '' : input[testId].question}
              onChange={(e) => getValue(testId, e)}
            />
            <div className="grid gap-2 grid-cols-2 pt-[230px]">
              {!input[testId]
                ? ''
                : input[testId].answerList.map((item, i) => (
                    <div
                      key={item.id}
                      className={
                        item.bgColor === 'red'
                          ? ` bg-[#e21b3c]   create-blok`
                          : item.bgColor === 'blue'
                          ? `bg-[#1368ce]  create-blok`
                          : item.bgColor === 'yellow'
                          ? `bg-[#d89e00] create-blok`
                          : item.bgColor === 'gren'
                          ? `bg-[#26890c] create-blok`
                          : ''
                      }
                    >
                      <div
                        className={`${
                          item.svgIcon === 'diamond' ? 'rotate-45' : ''
                        } !min-w-[30px] leading-[100%]`}
                      >
                        <Image
                          src={
                            item.svgIcon === 'triangle'
                              ? `${triangle.src}`
                              : item.svgIcon === 'square'
                              ? `${square.src}`
                              : item.svgIcon === 'circle'
                              ? `${circle.src}`
                              : item.svgIcon === 'diamond'
                              ? `${diamond.src}`
                              : ''
                          }
                          width="30px"
                          height="30px"
                        />
                      </div>
                      <input
                        type="text"
                        className="w-full h-[32px] outline-none rounded-lg bg-[rgb(0_0_0_/_10%)] text-white text-[20px] pl-[10px]"
                        value={item.body || ''}
                        name={'body'}
                        onChange={(e) => getValue2(testId, i, e)}
                      />
                      {/* check dev */}
                      <div
                        className={
                          !item.isCorrect
                            ? '!min-w-[45px] h-[45px] rounded-full border-4 border-white bg-transparent flex justify-center items-center hover:bg-[#66bf39] hover:cursor-pointer'
                            : '!min-w-[45px] h-[45px] rounded-full border-4 border-white bg-[#66bf39] flex justify-center items-center hover:bg-[#66bf39] hover:cursor-pointer'
                        }
                        onClick={() => getCorrectAnswer(testId, i)}
                      >
                        <svg
                          className={
                            item.isCorrect ? 'text-white block' : ' hidden'
                          }
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095        
                         72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </form>
      </div>
      {/* createTest right blok */}
      <div
        className={`${
          !isToggled ? '-mr-[16.30rem]' : 'ml-0'
        } flex flex-col min-w-[200px] h-screen shadow-[0px_0px_5px_#80838b] items-center p-3 pt-7 relative  duration-300`}
      >
        <div
          onClick={handleClick}
          className="absolute  px-1 py-3.5 -left-6 rounded-l-lg hidden md:block bg-white shadow-[rgb(0_0_0_/_15%)_-2px_0px_4px_0px] text-[#161925] cursor-pointer top-[100px]"
        >
          {isToggled ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </div>
        <div className="flex flex-col items-start w-full">
          <label className="text-[16px] pb-2 text-gray-700">
            Savol ko`rinishi:{' '}
          </label>
          <select
            onChange={handleChangeVisibilty}
            className="w-full text-[16px]  border:text-[204_204_204] py-[0.3rem] px-[0.2rem] rounded-[0.3rem] mb-4 !outline-1 outline-indigo-400 border-[1px] border-[gray] 
            bg-[#fff]"
          >
            {visibility.map((item) => {
              return (
                <option key={item.id} value={item.value}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col items-start w-full">
          <label className="text-[16px] pb-2 text-gray-700">
            Vaqt chegarasi{' '}
          </label>
          <select
            onChange={handleChangetime}
            className="w-full text-[16px]  border:text-[204_204_204] py-[0.3rem] px-[0.2rem] rounded-[0.3rem] mb-4 !outline-1 outline-indigo-400 border-[1px] border-[gray] 
             bg-[#fff]"
          >
            {time.map((item) => {
              return (
                <option key={item.id} value={item.value}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="">
          <label className="font-bold text-lg text-gray-500">Tavsif</label>

          <textarea
            className="w-[100%] border-gray-300 border-[1px] outline-none py-2 px-2 text-sm  duration-200 placeholder-gray-800"
            placeholder="Misol: Dunyo aholisi haqida "
            name="description"
            value={quizData.description}
            onChange={handleChange}
            cols="30"
            rows="10"
          ></textarea>

          {/* <input
                className="lg:min-w-[300px] border-gray-300 border-[1px] outline-none py-2 px-2 text-sm  duration-200 placeholder-gray-800"
                type="text"
                onChange={handleChange}
                value={quizData.description}
                name="description"
                placeholder="Misol: Dunyo aholisi haqida "
              /> */}
        </div>
      </div>
    </div>
  );
};

export default CreateTest;
