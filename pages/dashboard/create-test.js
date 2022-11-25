import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { Sidebar } from '../../components';
import { db } from '../../firebase';

import { useUserContext } from '../../context/userContext';

const CreateTest = () => {
  const [input, setInput] = useState([
    {
      question: '',
      answerList: [
        { name: 'a', body: '', isCorrect: false },
        { name: 'b', body: '', isCorrect: false },
        { name: 'c', body: '', isCorrect: false },
        { name: 'd', body: '', isCorrect: false },
      ],
    },
  ]);

  const { uid } = useUserContext();
  const questColl = collection(db, `question`);

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
        
          key === i ? (item.isCorrect = true) : (item.isCorrect = false)
        
      }

 
    );

    setInput(newInput);
  };

  let addFormFields = () => {
    setInput([
      ...input,
      {
        question: '',
        answerList: [
          { name: 'a', body: '', isCorrect: false },
          { name: 'b', body: '', isCorrect: false },
          { name: 'c', body: '', isCorrect: false },
          { name: 'd', body: '', isCorrect: false },
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
    uid
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

  // window.onbeforeunload = (event) => {
  //   const e = event || window.event;
  //   // Cancel the event
  //   e.preventDefault();
  //   if (e) {
  //     e.returnValue = ''; // Legacy method for cross browser support
  //   }
  //   return ''; // Legacy method for cross browser support
  // };

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

            <div className="flex justify-between">
              <div>
                <label>Vaqt: </label>
                <select onChange={handleChangetime}>
                  {time.map((item) => {
                    return (
                      <option key={item.id} value={item.value}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label>Sayt ko`rinishi: </label>
                <select onChange={handleChangeVisibilty}>
                  {visibility.map((item) => {
                    return (
                      <option key={item.id} value={item.value}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-box p-5">
        <form>
          {input.map((element, index) => (
            <div className="form" key={index}>
              <label>Question{index + 1}</label>
              <input
                type="text"
                name="question"
                value={element.question || ''}
                onChange={(e) => getValue(index, e)}
              />
              {element.answerList.map((item, i) => (
                <div key={item.id} className="flex">
                  <div
                    className={
                      !item.isCorrect
                        ? 'w-10 h-10 rounded-full bg-blue-500'
                        : 'w-10 h-10 rounded-full bg-red-500'
                    }
                    onClick={() => getCorrectAnswer(index, i)}
                  ></div>

                  {/* onClick={() => getCorrectAnswer(index, i)} */}
                  {/* <input type="radio"  name="gender" checked={gender === "Female"}/> Female
      <input type="radio" value="Other" name="gendervalue="Female"" checked={gender === "Other"} /> Other */}
                  {/* <input
                    type="checkbox"
                  /> */}
                  <input
                    type="text"
                    value={item.body || ''}
                    name={'body'}
                    onChange={(e) => getValue2(index, i, e)}
                    placeholder={item.name}
                  />
                </div>
              ))}

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
          <button
            className="btn btn-info m-2"
            type="button"
            onClick={() => addFormFields()}
          >
            {' '}
            Add
          </button>
          <button
            className="w-fit rounded-lg py-3 px-8 mx-2 cursor-pointer active:scale-95
              shadow-md text-sm duration-300 border bg-[#1a5cff] active:bg-opacity-80
              ease-in-out md:text-sm text-white mt-4"
            onClick={createQuest}
          >
            Testni yaratiash
          </button>
        </form>
      </div>
    </Sidebar>
  );
};

export default CreateTest;
