import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';

import { Sidebar } from '../../components';
import { db } from '../../firebase';

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
  const questColl = collection(db, `question`);
  const [loading, setLoading] = useState(false);

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
    newInput[index].answerList[i].isCorrect = true;

    setInput(input);
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

  let data = {
    title: quizData.title,
    description: quizData.description,
    questionList: input,
  };

  const createQuest = async (e) => {
    e.preventDefault();
    try {
      await addDoc(questColl, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Sidebar>
      <div className="container mx-auto px-5">
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
              name="name"
              placeholder="Misol: Geografiya"
            />
            <div className="mt-4 mb-2 ml-2">
              <label className="font-bold">Tavsif</label>
            </div>
            <input
              className="rounded-xl w-full bg-gray-200 outline-none py-4 px-4 text-sm focus:px-6 duration-200 placeholder-gray-800 mb-5"
              type="text"
              name="description"
              placeholder="Misol: Dunyo aholisi haqida "
            />
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
                <div key={item.id}>
                  <input
                    type="checkbox"
                    onClick={() => getCorrectAnswer(index, i)}
                  />
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
