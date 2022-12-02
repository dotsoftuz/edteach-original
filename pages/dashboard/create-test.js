import { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

import { useUserContext } from 'context/userContext';
import { db } from '../../firebase';
import { Breadcrumb } from 'components';

import triangle from 'public/images/triangle.svg';
import square from 'public/images/square.svg';
import circle from 'public/images/circle.svg';
import diamond from 'public/images/diamond.svg';
import { BsTrash } from 'react-icons/bs';

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

  console.log(input);

  const { uid } = useUserContext();
  const questColl = collection(db, `question`);

  const [questionTime, setQuestionTime] = useState(30);
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
      value: 30,
    },
    {
      name: '1 daqiqa',
      value: 60,
    },
    {
      name: '3 daqiqa',
      value: 180,
    },
    {
      name: '5 daqiqa',
      value: 350,
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
    playerId: [],
  };

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
    <div className="lg:flex lg:!overflow-hidden w-full h-screen pt-14 relative">
      <div>
        <Toaster />
      </div>
      {/* createTest top blok */}
      <div className="fixed lg:absolute top-0 left-0 w-full z-20 bg-white ">
        <div className="px-2 py-3 md:px-5 w-full  shadow-[0px_0px_5px_#80838b]  ">
          <div className="flex items-center  gap-2 sm:gap-20 justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <label
                  className="absolute top-0 left-0 w-full h-full flex items-center pl-[10px] duration-200 text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-full group-focus-within:pl-0"
                  htmlFor="label"
                >
                  Sarlovha
                </label>
                <input
                  id="label"
                  className="rounded-md w-[100%] sm:w-[15rem] md:w-[20rem] bg-gray-200 outline-none py-2 px-4 text-sm"
                  type="text"
                  onChange={handleChange}
                  value={quizData.title}
                  name="title"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                className="w-full rounded-lg py-2 px-2 sm:px-8 cursor-pointer active:scale-95
                shadow-md text-sm duration-300 border bg-white hover:bg-gray-100  active:bg-opacity-80
                ease-in-out md:text-sm text-[#1a5cff]"
                onClick={() => router.push('/dashboard/profile')}
              >
                Chiqish
              </button>
              <button
                className="w-full rounded-lg py-2 px-2 sm:px-8 cursor-pointer active:scale-95
               shadow-md text-sm duration-300 border bg-[#1a5cff] hover:bg-[#0d51fd]  active:bg-opacity-80
               ease-in-out md:text-sm text-white"
                onClick={createQuest}
              >
                Jo&apos;natish
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* createTest left blok */}
      <div className="sticky top-0 left-0 bg-white   lg:min-w-[13rem] pt-4 flex flex-col  overflow-hidden  h-full   z-10">
        <div className="flex flex-col items-center overflow-y-auto w-full max-h-full overflow-x-hidden">
          {input.map((item, key) => {
            return (
              <>
                <div
                  className={`${
                    testId === key ? 'bg-gray-200' : ''
                  } relative w-full  mb-2 pt-2 pb-2 text-sm font-semibold text-gray-800`}
                  onClick={() => setTestId(key)}
                >
                  <h3 className="px-4">{key + 1} - Test</h3>
                  <div className="m-3">
                    {key > 0 && (
                      <button
                        type="button"
                        className="cursor-pointer text-lg hover:bg-red-200 hover:text-red-500 p-2 rounded-full absolute top-1 right-1"
                        onClick={() => removeFormFields(testId)}
                      >
                        <BsTrash />
                      </button>
                    )}
                    <h2 className="text-center mb-2 font-medium w-[12rem] py-1 absolute top-6 left-1/2 transform -translate-x-1/2 overflow-hidden truncate">
                      {item.question}
                    </h2>
                    <div
                      onClick={() => setTestId(key)}
                      className={`${
                        testId === key ? 'ring-gray-700' : 'ring-transparent'
                      } bg-white ring-2 hover:ring-gray-700 rounded-md p-2 w-full mt-8 h-20 grid grid-cols-2 grid-rows-2 gap-1 cursor-pointer`}
                    >
                      {item.answerList.map((answer, index) => (
                        <div
                          key={index}
                          className="relative border-2 rounded-md p-1"
                        >
                          {answer.isCorrect && (
                            <div className="w-2 h-2 bg-green-500 rounded-full absolute top-2 right-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <br />
        </div>
        <div className="w-full px-4 mb-6">
          <button
            className="btn text-sm btn-info  w-full bg-[#1a5cff] text-white rounded-lg py-2 px-3  cursor-pointer"
            type="button"
            onClick={() => addFormFields()}
          >
            Savol qo`shish
          </button>
        </div>
      </div>
      {/* createTest center blok */}
      <div className="form-box p-5 w-full min-h-full lg:pr-10 overflow-hidden bg-slate-100">
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
            <div className="grid gap-2 sm:grid-cols-2 pt-[120px] xl:pt-[200px] w-fit mx-auto">
              {!input[testId]
                ? ''
                : input[testId].answerList.map((item, i) => (
                    <div
                      key={item.id}
                      className={
                        item.bgColor === 'red'
                          ? ` bg-[#e21b3c]  create-blok`
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
          !isToggled ? '-mr-[12.450rem]' : '!mr-0 '
        } relative  h-full duration-300 lg:!min-w-[200px] lg:w-[200px]  bg-white`}
      >
        <div
          onClick={handleClick}
          className="absolute  px-1 py-3.5 -left-6 rounded-l-lg hidden md:block bg-white text-[#161925] cursor-pointer top-[100px]"
        >
          {isToggled ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </div>
        <div className="flex flex-col  h-full w-full shadow-lg items-center p-3 pt-7">
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
              Vaqt chegarasi
            </label>
            <select
              onChange={handleChangetime}
              className="w-full text-[16px] border:text-[204_204_204] py-[0.3rem] px-[0.2rem] rounded-[0.3rem] mb-4 !outline-1 outline-indigo-400 border-[1px] border-[gray] 
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

          <div className="w-full">
            <label className="font-bold text-lg text-gray-500">Tavsif</label>

            <textarea
              className="w-[100%] border-gray-300 border-[1px] outline-none py-2 px-2 text-sm  duration-200 placeholder-gray-800"
              placeholder="Misol: Dunyo aholisi haqida "
              name="description"
              value={quizData.description}
              onChange={handleChange}
              cols="30"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTest;
