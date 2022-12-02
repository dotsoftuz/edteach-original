import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  collection,
  doc,
  getDoc,
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

import { useUserContext } from 'context/userContext';
import { db } from '../../../firebase';
import Image from 'next/image';

function GameID() {
  const router = useRouter();
  const { uid } = useUserContext();
  const [questions, setQuestions] = useState([]);
  const [players, setPlayers] = useState([]);
  const [counter, setCounter] = useState(false);

  const [testCounter, setTestCounter] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(10);

  const [time, setTime] = useState();
  const [showButton, setShowButton] = useState(false);
  const [singleData, setSingleData] = useState({});
  const [podium, setPodium] = useState(false);
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

      const docRef = doc(db, `question`, `${gameId}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSingleData(docSnap.data());
        setTime(docSnap.data().questionTime);
      }

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

  const nextQuestion = async (id, length, index) => {
    if (index + 1 < length) {
      setTime(singleData.questionTime);
      const collectionRef = doc(db, `question`, id);
      const docSnap = await getDoc(collectionRef);
      const payload = {
        questionIndex: docSnap.data().questionIndex + 1,
      };

      await updateDoc(collectionRef, payload);
      setShowButton(false);
    } else {
      setPodium(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {questions.map((game, index) => {
        return (
          <>
            {game.status === 'showingQuestion' ? (
              <>
                <p className={count === 0 ? 'hidden' : 'visible text-5xl'}>
                  {count}
                </p>
                {!disabled ? (
                  ''
                ) : (
                  <>
                    {podium ? (
                      <div>
                        <h2>Songgi natija</h2>
                      </div>
                    ) : (
                      <div className="flex justify-between">
                        <div>
                          <div
                            className={
                              time === 0
                                ? 'hidden'
                                : 'bg-gray-700 w-28 h-28 mr-10 mt-40 rounded-full justify-center items-center flex'
                            }
                          >
                            <p className="visible text-5xl text-white">
                              {time}
                            </p>
                          </div>
                          <h2>
                            {game.questionIndex + 1} /{' '}
                            {game.questionList.length}
                          </h2>
                        </div>

                        <div>
                          <div className="text-center py-5 text-white  bg-gray-600 ">
                            {game.questionList[game.questionIndex].question}
                          </div>
                          <div className="grid gap-2 grid-cols-2 pt-[230px]">
                            {game.questionList[
                              game.questionIndex
                            ].answerList.map((item) => (
                              <div
                                key={item.id}
                                className={
                                  time === 0
                                    ? item.bgColor === 'red'
                                      ? item.isCorrect
                                        ? ' bg-[#e21b3c]   create-blok'
                                        : ` bg-[#e21b3c]   create-blok opacity-60`
                                      : item.bgColor === 'blue'
                                      ? item.isCorrect
                                        ? `bg-[#1368ce]  create-blok`
                                        : `bg-[#1368ce]  create-blok opacity-60`
                                      : item.bgColor === 'yellow'
                                      ? item.isCorrect
                                        ? `bg-[#d89e00] create-blok`
                                        : `bg-[#d89e00] create-blok opacity-60`
                                      : item.bgColor === 'gren'
                                      ? item.isCorrect
                                        ? `bg-[#26890c] create-blok`
                                        : `bg-[#26890c] create-blok opacity-60`
                                      : ''
                                    : item.bgColor === 'red'
                                    ? ' bg-[#e21b3c]   create-blok'
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
                                    item.svgIcon === 'diamond'
                                      ? 'rotate-45'
                                      : ''
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
                                <div className="text-white text-3xl flex-grow">
                                  <p className="">{item.body}</p>
                                </div>
                                {/* check dev */}

                                {time === 0 && (
                                  <div className="!min-w-[45px] h-[45px] rounded-full flex justify-center items-center   ">
                                    {item.isCorrect ? (
                                      <svg
                                        className="text-white block"
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
                                    ) : (
                                      <div className="text-white">X</div>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pl-20">
                          {showButton ? (
                            <button
                              className="bg-blue-600 px-12 text-white py-5"
                              onClick={() =>
                                nextQuestion(
                                  game.id,
                                  game.questionList.length,
                                  game.questionIndex
                                )
                              }
                            >
                              Next
                            </button>
                          ) : (
                            <button
                              className="bg-blue-600 px-12 text-white py-5"
                              onClick={() => setTime(0)}
                            >
                              Skip
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
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
                  className={
                    players.length === 0
                      ? 'px-3 py-3 bg-emerald-400 text-white font-bold rounded-xl mt-4 cursor-not-allowed'
                      : 'px-3 py-3 bg-emerald-400 text-white font-bold rounded-xl mt-4 '
                  }
                  onClick={() => sendData(game.id)}
                  disabled={players.length === 0}
                >
                  O`yinni boshlash
                </button>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default GameID;
