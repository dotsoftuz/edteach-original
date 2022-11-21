import { addDoc, collection } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components";
import { db } from "../../firebase";

function Createtest() {
  const [input, setInput] = useState([
    {
      question: "",
      answerList: [
        { name: "a", body: "", isCorrect: false },
        { name: "b", body: "", isCorrect: false },
        { name: "c", body: "", isCorrect: false },
        { name: "d", body: "", isCorrect: false },
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
        question: "",
        answerList: [
          { name: "a", body: "", isCorrect: false },
          { name: "b", body: "", isCorrect: false },
          { name: "c", body: "", isCorrect: false },
          { name: "d", body: "", isCorrect: false },
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
    title: "",
    description: "",
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
      <div className="p-5">
        <div className="flex flex-col">
          <form>
            <label>
              Mavzu:
              <input
                type="text"
                placeholder="title"
                onChange={handleChange}
                value={quizData.title}
                name="title"
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                placeholder="description"
                onChange={handleChange}
                value={quizData.description}
                name="description"
              />
            </label>
          </form>
        </div>

        <div></div>
      </div>
      <div className="form-box p-5">
        <form>
          {input.map((element, index) => (
            <div className="form" key={index}>
              <label>Question{index + 1}</label>
              <input
                type="text"
                name="question"
                value={element.question || ""}
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
                    value={item.body || ""}
                    name={"body"}
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
            {" "}
            Add
          </button>
          <button className="btn btn-success m-2" onClick={createQuest}>
            Submit
          </button>
        </form>
      </div>
    </Sidebar>
  );
}

export default Createtest;
