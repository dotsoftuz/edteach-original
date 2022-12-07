import { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { useUserContext } from 'context/userContext';
import { db } from '../../firebase';
import triangle from 'public/images/triangle.svg';
import logo from 'public/images/logo.svg';
import square from 'public/images/square.svg';
import circle from 'public/images/circle.svg';
import diamond from 'public/images/diamond.svg';
import { BsTrash, BsPlusLg } from 'react-icons/bs';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { WiTime12 } from 'react-icons/wi';

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
    next: false,
  };

  const createQuest = async (e) => {
    e.preventDefault();
    try {
      if (!data.title) {
        toast.error("Testga sarlovha qo'ying");
      } else if (!data.description) {
        toast.error('Testga tavsif kiriting');
      } else {
        await addDoc(questColl, data);
        toast.success('Muvoffaqiyatli');
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
        <div className="px-2 py-3 md:px-5 w-full border-b-2">
          <div className="flex items-center  gap-2 sm:gap-20 justify-between">
            <div className="flex items-center space-x-4 gap-1">
              <div className="w-[9rem] hidden lg:block leading-[100%] cursor-pointer">
                <Link href="/dashboard">
                  <Image src={logo} />
                </Link>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                className="w-full rounded-lg p-2 sm:px-8 active:scale-95 text-sm duration-300 bg-rose-500 hover:bg-rose-600 active:bg-opacity-80
                ease-in-out md:text-sm text-white font-semibold"
                onClick={() => router.push('/dashboard/profile')}
              >
                Chiqish
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* createTest left blok */}
      <div className="lg:sticky lg:top-0 left-0 shadow-md bg-white justify-between lg:justify-start lg:items-start items-center  w-full lg:min-w-[13rem] lg:w-[13rem] lg:pt-4 lg:pb-0 py-2 flex lg:flex-col  overflow-hidden bottom-0  fixed  lg:h-full lg:z-10  z-[1000]">
        <div className="flex lg:flex-col items-center lg:overflow-y-auto lg:overflow-x-hidden overflow-x-auto overflow-y-hidden  w-full max-h-full ">
          {input.map((item, key) => {
            return (
              <>
                <div
                  className={`${
                    testId === key ? 'bg-[#eaf4fc]' : ''
                  } relative min-w-[7rem] lg:w-full lg:h-auto h-full lg:mb-2  pt-2 pb-2 text-sm font-semibold text-gray-800`}
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
                    <h2 className="text-center hidden lg:block lg:mb-2 font-medium w-[6rem] lg:w-[12rem] py-1 leading-[100%] absolute top-6 left-1/2 transform -translate-x-1/2 overflow-hidden truncate">
                      {item.question}
                    </h2>
                    <div
                      onClick={() => setTestId(key)}
                      className={`${
                        testId === key ? 'ring-gray-700' : 'ring-transparent'
                      } bg-white ring-2 hover:ring-gray-700 rounded-md p-2 w-full mt-2 lg:mt-8 h-14 lg:h-20 grid grid-cols-2 grid-rows-2 gap-1 cursor-pointer`}
                    >
                      {item.answerList.map((answer, index) => (
                        <div
                          key={index}
                          className="relative border-2 rounded-md p-1"
                        >
                          {answer.isCorrect && (
                            <div className="w-2 h-2 bg-green-500 rounded-full absolute lg:top-2 top-[0.1] right-2" />
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
        <div className="lg:w-full px-6  lg:mb-6">
          <button
            className="text-sm w-12 h-12 lg:h-auto flex shadow-[rgb(0_0_0_/_25%)_0px_-4px_inset]  justify-center items-center lg:w-full bg-[#1a5cff] text-white rounded-lg py-3  px-3  cursor-pointer"
            type="button"
            onClick={() => addFormFields()}
          >
            <span className="lg:block hidden"> Savol qo`shish</span>{' '}
            <span className="lg:hidden text-lg">
              <BsPlusLg />
            </span>
          </button>
        </div>
      </div>
      {/* createTest center blok */}
      <div className="form-box p-5 w-full min-h-full lg:pr-10 overflow-hidden bg-[#F2F2F1]">
        <form className="w-full min-h-full">
          <div className="form min-h-full flex flex-col justify-between pt-5">
            <input
              className="w-full rounded-lg h-[50px] text-[20px] p-4 outline-none bg-white shadow-md text-center placeholder:text-gray-700"
              type="text"
              name="question"
              placeholder="Savolingizni kiriting"
              value={!input[testId] ? '' : input[testId].question}
              onChange={(e) => getValue(testId, e)}
            />
            <div className="grid gap-2 sm:grid-cols-2 pt-[120px] xl:pt-[200px] w-full mx-auto">
              {!input[testId]
                ? ''
                : input[testId].answerList.map((item, i) => (
                    <div
                      key={item.id}
                      className={
                        item.bgColor === 'red'
                          ? ` bg-[#e21b3c] create-blokTwo`
                          : item.bgColor === 'blue'
                          ? `bg-[#1368ce] create-blokTwo`
                          : item.bgColor === 'yellow'
                          ? `bg-[#FFA217] create-blokTwo`
                          : item.bgColor === 'gren'
                          ? `bg-[#26890c] create-blokTwo`
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
                        className="w-full outline-none rounded-lg bg-[rgb(0_0_0_/_10%)] text-white text-[20px] pl-[10px]"
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
          !isToggled ? 'lg:-mr-[12.450rem] xl:-mr-[16.830rem]' : '!mr-0 '
        } relative  h-full duration-300 lg:!min-w-[200px] lg:w-[200px] xl:!min-w-[270px] xl:w-[270px] shadow-md  bg-white`}
      >
        <div
          onClick={handleClick}
          className="absolute  px-1 py-3.5 -left-6 rounded-l-lg hidden md:block bg-white text-[#161925] cursor-pointer top-[100px]"
        >
          {isToggled ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </div>
        <div className="flex flex-col  h-full w-full shadow-lg items-center p-3 pt-7">
          <div className="flex flex-col items-start w-full">
            <label className="font-normal text-base mt-1 md:text-lg text-gray-700">
              Savol ko`rinishi:{' '}
            </label>
            <select
              onChange={handleChangeVisibilty}
              className="w-full text-base border:text-[204_204_204] p-2 rounded-[0.3rem] mb-4 !outline-1 border border-gray-400 
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
            <label className="font-normal text-base md:text-lg text-gray-700">
              Vaqt chegarasi
            </label>
            <select
              onChange={handleChangetime}
              className="w-full text-base border:text-[204_204_204] p-2 rounded-[0.3rem] mb-4 !outline-1 border border-gray-400 
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
            <label className="font-normal text-base mt-1 md:text-lg text-gray-700">
              Sarlovha
            </label>
            <input
              id="label"
              className="w-full text-base border:text-[204_204_204] p-2 rounded-[0.3rem] mb-4 !outline-1 border border-gray-400 
              bg-[#fff]"
              type="text"
              onChange={handleChange}
              placeholder="Sarlavha"
              value={quizData.title}
              name="title"
            />

            <label className="font-normal text-base mt-1 md:text-lg text-gray-700">
              Tavsif
            </label>

            <textarea
              className="w-full text-base border:text-[204_204_204] p-2 rounded-[0.3rem] mb-4 !outline-1 border border-gray-400 
              bg-[#fff]"
              placeholder="Misol: Dunyo aholisi haqida "
              name="description"
              value={quizData.description}
              onChange={handleChange}
              cols="30"
              rows="3"
            ></textarea>
            <button
              className="text-sm w-12 h-12 lg:h-auto flex shadow-[rgb(0_0_0_/_25%)_0px_-4px_inset]  justify-center items-center lg:w-full bg-[#1a5cff] text-white rounded-lg py-3  px-3  cursor-pointer"
              onClick={createQuest}
            >
              Saqlash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTest;
