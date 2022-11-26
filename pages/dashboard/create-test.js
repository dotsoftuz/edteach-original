import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { Sidebar } from '../../components';
import { db } from '../../firebase';
import { useUserContext } from '../../context/userContext';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// import triangle from "../../public/images/triangle.svg"
// import diamond from "../../public/images/diamond.svg"
// import circle from "../../public/images/circle.svg"
// import square from "../../public/images/square.svg"



const CreateTest = () => {
  const [input, setInput] = useState([
    {
      question: '',
      answerList: [
        { name: 'a', body: '', isCorrect: false, bgColor: "red" },
        { name: 'b', body: '', isCorrect: false, bgColor: "blue" },
        { name: 'c', body: '', isCorrect: false, bgColor: "yellow" },
        { name: 'd', body: '', isCorrect: false, bgColor: "gren" },
      ],
    },
  ]);

  const { uid } = useUserContext();
  const questColl = collection(db, `users/${uid}/question`);

  const [questionTime, setQuestionTime] = useState('');
  const [questionVisibility, setQuestionVisibility] = useState('');
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
    newInput[index].answerList.map(
      (item, key) => {
        console.log(
          key === i ? (item.isCorrect = true) : (item.isCorrect = false)
        );
        console.log(newInput);
      }

      // i === key  ? newInput[index].answerList.isCorrect = true :  newInput[index].answerList.isCorrect = false;
      // ? (newInput[index].answerList[i].isCorrect = true)
      // : (newInput[index].answerList.isCorrect = false)
    );

    setInput(newInput);
  };
  // function onChangeValue(event) {
  //   setGender(event.target.value);
  //   console.log(event.target.value);
  // }

  let addFormFields = () => {
    setInput([
      ...input,
      {
        question: '',
        answerList: [
          { name: 'a', body: '', isCorrect: false, bgColor: "red" },
          { name: 'b', body: '', isCorrect: false, bgColor: "blue" },
          { name: 'c', body: '', isCorrect: false, bgColor: "yellow" },
          { name: 'd', body: '', isCorrect: false, bgColor: "gren" },
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
    questionList: input,
    questionTime,
    date,
    prefixTime,
    questionVisibility,
  };

  const createQuest = async (e) => {
    e.preventDefault();
    try {
      await addDoc(questColl, data);
      toast.success("Test muvoffaqiyatli qo'shildi");
      setTimeout(() => {
        router.push('/dashboard/question');
      }, 2000);
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

  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => setIsToggled(!isToggled);


  return (
    <Sidebar>

      <div className="container mx-auto px-5">
        <div>
          <Toaster />
        </div>
        <div className="px-2 py-3 md:p-5 mx-auto w-full md:max-w-7xl shadow-lg my-10 md:my-16 rounded-xl bg-gray-100">
          <h2 className="text-xl font-bold uppercase mx-1 md:mx-3 text-center">
            Test yaratish
          </h2>

          <div>
            <div className="mt-4 mb-2 ml-2">
              <label className="font-bold">Sarlovha</label>
            </div>
            <input
              className="rounded-xl w-full  bg-gray-200 outline-none py-4 px-4 text-sm focus:px-6 duration-200 placeholder-gray-800"
              type="text"
              onChange={handleChange}
              value={quizData.title}
              name="title"
              placeholder="Misol: Geografiya"
            />
            <div className="mt-4 mb-2 ml-2">
              <label className="font-bold">Tavsif</label>
            </div>
            <input
              className="rounded-xl w-full bg-gray-200 outline-none py-4 px-4 text-sm focus:px-6 duration-200 placeholder-gray-800 mb-5"
              type="text"
              onChange={handleChange}
              value={quizData.description}
              name="description"
              placeholder="Misol: Dunyo aholisi haqida "
            />


          </div>
        </div>
      </div>

      <div className="form-box w-full justify-between pl-5 pt-5 flex  items-start overflow-x-hidden ">
        <form className='w-full'>
          {input.map((element, index) => (
            <div className="form pt-5 pr-7" key={index}>

              <input
                className='w-full rounded-lg h-[50px] text-[20px] p-4 outline-none bg-[#9f9f9e]  text-center placeholder:text-white'
                type="text"
                name="question"
                placeholder='Savolingizni yozing'
                value={element.question || ''}
                onChange={(e) => getValue(index, e)}
              />

              <div className='grid gap-2 grid-cols-2 pt-[260px]'>

                {element.answerList.map((item, i) => (

                  <div key={item.id} className={item.bgColor === "red" ? `bg-[#e21b3c]   create-blok` : item.bgColor === "blue" ? ` bg-[#1368ce]  create-blok` : item.bgColor === "yellow" ? `bg-[#d89e00] create-blok` : item.bgColor === "gren" ? `bg-[#26890c] create-blok` : ""} >

                    <div className='min-w-[40px] h-[40px] auto bg-black rounded-full'>
                    </div>


                    <input
                      className='w-full h-[32px] outline-none rounded-lg bg-[rgb(0_0_0_/_10%)] text-white text-[20px] pl-[10px]'
                      type="text"
                      value={item.body || ''}
                      name={'body'}
                      onChange={(e) => getValue2(index, i, e)}
                    />

                    {/* check dev */}
                    <div
                      className={
                        !item.isCorrect
                          ? '!min-w-[45px] h-[45px] rounded-full border-4 border-white bg-transparent flex justify-center items-center hover:bg-[#66bf39]'
                          : '!min-w-[45px] h-[45px] rounded-full border-4 border-white bg-[#66bf39] flex justify-center items-center hover:bg-[#66bf39]'
                      }
                      onClick={() => getCorrectAnswer(index, i)}
                    >
                      <svg className={item.isCorrect ? "text-white block" : " hidden"} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>

                    </div>

                  </div>
                ))}

              </div>
              {index ? (
                <button
                  type="button"
                  className="btn-danger btn-sm mt-2 "
                  onClick={() => removeFormFields(index)}
                >
                  Remove
                </button>
              ) : null}
            </div>
          ))}

        </form>

        <div className={`${!isToggled ? '-mr-[12.555rem]' : 'ml-0'} flex flex-col min-w-[200px] h-screen items-center p-3 relative bg-slate-200 duration-300`}>

          <div
            onClick={handleClick}
            className={`
                ${!isToggled
                ? '-left-5 rounded-l-lg'
                : 'left-0  rounded-r-lg'
              }
                  absolute  px-0.5 py-3 bg-gray-300 hidden md:block text-[#161925] cursor-pointer top-[50%]`}
          >
            {isToggled ? <IoIosArrowForward /> : <IoIosArrowBack />}
          </div>

          <div className='flex flex-col items-start w-full'>
            <label className='text-[16px] pb-2 text-gray-700'>Savol ko`rinishi: </label>
            <select onChange={handleChangeVisibilty} className="w-full text-[16px]  border:text-[204_204_204] py-[0.3rem] px-[0.2rem] rounded-[0.3rem] mb-4 !outline-1 outline-indigo-400 border-[1px] border-[gray] bg-[#fff]">
              {visibility.map((item) => {
                return (
                  <option key={item.id} value={item.value}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className='flex flex-col items-start w-full'>
            <label className='text-[16px] pb-2 text-gray-700'>Vaqt chegarasi </label>
            <select onChange={handleChangetime} className="w-full text-[16px]  border:text-[204_204_204] py-[0.3rem] px-[0.2rem] rounded-[0.3rem] mb-4 !outline-1 outline-indigo-400 border-[1px] border-[gray] bg-[#fff]">
              {time.map((item) => {
                return (
                  <option key={item.id} value={item.value}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>



          <button
            className="btn text-sm btn-info m-2 bg-[#1a5cff] text-white rounded-lg py-2 px-8 mx-2 cursor-pointer w-full"
            type="button"
            onClick={() => addFormFields()}
          >
            {' '}
            Savol qo'shish
          </button>
          <button
            className="w-full rounded-lg py-2 px-8 mx-2 cursor-pointer active:scale-95
              shadow-md text-sm duration-300 border hover:bg-[#1a5cff]   active:bg-opacity-80
              ease-in-out md:text-sm text-black bg-white hover:text-white mt-2"
            onClick={createQuest}
          >
            Jo'natish
          </button>
        </div>

      </div>


    </Sidebar>
  );
};

export default CreateTest;
