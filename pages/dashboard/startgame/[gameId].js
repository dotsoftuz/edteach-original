import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { BsTrash } from 'react-icons/bs';

import triangle from '../../../public/images/triangle.svg';
import square from '../../../public/images/square.svg';
import circle from '../../../public/images/circle.svg';
import diamond from '../../../public/images/diamond.svg';

import { Sidebar } from 'components';
import { useUserContext } from 'context/userContext';
import { db } from '../../../firebase';
import Image from 'next/image';

function GameID() {
  const router = useRouter();
  const { uid } = useUserContext();
  const [questions, setQuestions] = useState([]);
  const [players, setPlayers] = useState([]);
  const [counter, setCounter] = useState(false);

  const [testCount, setTestCount] = useState(30);
  const [testCounter, setTestCounter] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(10);
  const [time, setTime] = useState(15);
  const [showButton, setShowButton] = useState(false);
  const [testId, setTestId] = useState(0);
  // const [nexQuestion, setNexQuestion] = useState(false);

  const deletePlayer = (id) => {
    const { gameId } = router.query;
    const playerColl = doc(db, `question/${gameId}/players`, id);
    const payload = {
      isPlay: false,
    };
    updateDoc(playerColl, payload);
  };

  const sendData = async (id) => {
    const collectionRef = doc(db, `question`, id);
    const payload = {
      status: 'showingQuestion',
    };

    await updateDoc(collectionRef, payload).then(() => {
      setCounter(true);
      setTestCount(+questions.map((item) => item.questionTime));
    });
  };

  useEffect(() => {
    if (counter !== false) {
      const interval = setInterval(() => {
        if (count) {
          setCount(count - 1);
        }
        if (count === 0) {
          setDisabled(true);
          setTestCounter(true);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [count, counter, questions]);

  useEffect(() => {
    if (testCounter !== false) {
      const interval1 = setInterval(() => {
        if (time) {
          setTime(time - 1);
        }
        if (time === 0) {
          setShowButton(true);
        }
      }, 1000);

      return () => clearInterval(interval1);
    }
  }, [testCounter, time]);

  useEffect(() => {
    const fetchData = async () => {
      const { gameId } = router.query;
      const questColl = collection(db, `question`);
      const queryColl = query(questColl, where('id', '==', `${gameId}`));
      onSnapshot(queryColl, (snapshot) =>
        setQuestions(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      );

      const playerColl = collection(db, `question/${gameId}/players`);

      onSnapshot(playerColl, (snapshot) =>
        setPlayers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
    };
    fetchData();
  }, [uid, router]);
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

  const nextQuestion = () => {
    setTime(15);
    setTestId(testId + 1);
    setShowButton(false);
  };

  console.log(questions);

  return (
    <Sidebar>
      <div className="flex items-center justify-center h-screen">
        {questions.map((game, index) => {
          return (
            <>
              {game.status === 'showingQuestion' ? (
                <h1>
                  <p className={count === 0 ? 'hidden' : 'visible text-5xl'}>
                    {count}
                  </p>
                  {!disabled ? (
                    ''
                  ) : (
                    <div className="flex">
                      <p className={time === 0 ? 'hidden' : 'visible text-5xl'}>
                        {time}
                      </p>
                      <div>

                      <h1>{game.questionList[testId].question}</h1>

                    {/* <ul >
                      <li>{game.questionList[testId].answerList.map((item) => )}</li>
                    </ul> */}


                    <div className="grid gap-2 grid-cols-2 pt-[230px]">
              {game.questionList[testId].answerList.map((item) =>(
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
              <div>{item.body}</div>
                      {/* check dev */}
                      <div
                        className={
                          !item.isCorrect
                            ? '!min-w-[45px] h-[45px] rounded-full border-4 border-white bg-transparent flex justify-center items-center hover:bg-[#66bf39] hover:cursor-pointer'
                            : '!min-w-[45px] h-[45px] rounded-full border-4 border-white bg-[#66bf39] flex justify-center items-center hover:bg-[#66bf39] hover:cursor-pointer'
                        }

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
                      {showButton && (
                        <button onClick={nextQuestion}>Next</button>
                      )}
                    </div>
                  )}
                </h1>
              ) : (
                <div
                  key={game.id}
                  className="w-[100%] md:[90%] xl:w-[40%] bg-gray-200 p-4 md:p-8 rounded-2xl"
                >
                  <h1 className="text-center text-xl font-semibold uppercase">
                    Kutish rejimida
                  </h1>
                  <h2 className="text-center text-lg my-2 font-semibold">
                    PIN <span className="text-purple-500">{game.pin}</span>
                  </h2>
                  <div className="w-full bg-gray-100 h-[300px] md:h-[350px] p-4 text-center text-base font-semibold rounded-2xl">
                    <div className="relative overflow-y-scroll overflow-x-hidden scrollbar-hide h-full block w-full ">
                      <h1 className="absolute top-0 left-0 right-0">
                        Ishtorkchilar ro`yhati
                      </h1>
                      <div className="p-0 md:p-5 h-full">
                        <ol>
                          {players
                            .filter((item) => item.isPlay)
                            .map((item, index) => {
                              return (
                                <li
                                  className="flex items-center justify-between bg-gray-200 px-4 py-3 my-2 rounded-lg"
                                  key={item.id}
                                >
                                  <p className="text-lg font-semibold">
                                    {index + 1}
                                  </p>
                                  <h1 className="ml-0 xl:ml-5">
                                    {item.playerName}
                                  </h1>
                                  <button onClick={() => deletePlayer(item.id)}>
                                    <BsTrash className="text-lg text-red-500" />
                                  </button>
                                </li>
                              );
                            })}
                        </ol>
                        {players.length === 0 && (
                          <h1 className="flex items-center justify-center h-full -mt-5 text-red-500 font-semibold text-lg">
                            Hali ishtorkchilar yo`q
                          </h1>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    className="px-3 py-3 bg-emerald-400 text-white font-bold rounded-xl mt-4"
                    onClick={() => sendData(game.id)}
                  >
                    O`yinni boshlash
                  </button>
                </div>
              )}
            </>
          );
        })}
      </div>
    </Sidebar>
  );
}

export default GameID;
