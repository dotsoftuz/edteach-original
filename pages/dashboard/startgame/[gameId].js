import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

import { BsCheckLg } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { FaUser } from 'react-icons/fa';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { AiOutlineCrown } from 'react-icons/ai';

import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

import triangle from 'public/images/triangle.svg';
import square from 'public/images/square.svg';
import circle from 'public/images/circle.svg';
import diamond from 'public/images/diamond.svg';
import { useUserContext } from 'context/userContext';
import { db } from '../../../firebase';

function GameID() {
  const router = useRouter();
  const { uid } = useUserContext();
  const [questions, setQuestions] = useState([]);
  const [players, setPlayers] = useState([]);
  const [counter, setCounter] = useState(false);
  const [questionTime, setQuestionTime] = useState(false);
  const [questionCount, setQuestionCount] = useState(3);
  const [testCounter, setTestCounter] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(10);
  const [time, setTime] = useState();
  const [showButton, setShowButton] = useState(false);
  const [singleData, setSingleData] = useState({});
  const [podium, setPodium] = useState(false);
  const [copyPin, setCopyPin] = useState(false);

  const { width, height } = useWindowSize();

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
  // start timer

  useEffect(() => {
    if (counter !== false) {
      const interval = setInterval(() => {
        if (count) {
          setCount(count - 1);
        }
        if (count === 0) {
          setQuestionTime(true);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [count, counter, questions]);

  // Animation 3s
  useEffect(() => {
    if (questionTime !== false) {
      const interval2 = setInterval(() => {
        if (questionCount) {
          setQuestionCount(questionCount - 1);
        }
        if (questionCount === 0) {
          setDisabled(true);
          setTestCounter(true);
        }
      }, 1000);

      return () => clearInterval(interval2);
    }
  }, [questionTime, questionCount]);

  //question timer

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
      const playerQuery = query(playerColl, orderBy('point', 'desc'));

      onSnapshot(playerQuery, (snapshot) =>
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
    setTestCounter(true);
    setQuestionCount(3);
    setDisabled(false);
    if (index + 1 < length) {
      setTime(singleData.questionTime + 3);
      const collectionRef = doc(db, `question`, id);
      const docSnap = await getDoc(collectionRef);
      const payload = {
        questionIndex: docSnap.data().questionIndex + 1,
        next: true,
      };

      await updateDoc(collectionRef, payload);
      setShowButton(false);
    } else {
      const collectionRef = doc(db, 'question', id);
      const payload = {
        status: 'result',
      };
      await updateDoc(collectionRef, payload);
    }
  };

  return (
    <div>
      <Head>
        <title>edTeach - O&apos;yin</title>
      </Head>
      <div className="h-screen">
        {questions.map((game, index) => {
          return (
            <div key={index}>
              {game.status === 'showingQuestion' ? (
                <>
                  <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <p
                      className={
                        count === 0 ? 'hidden' : 'visible text-5xl lg:text-7xl'
                      }
                    >
                      {count}
                    </p>
                  </div>
                  {!count && (
                    <div
                      className={
                        questionCount === 0
                          ? 'hidden'
                          : 'flex h-screen flex-col items-center justify-center'
                      }
                    >
                      <div className="flex items-center">
                        <div className="mr-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white  md:h-20 md:w-20">
                          <p className="visible text-3xl font-semibold text-white md:text-4xl md:font-bold">
                            {questionCount}
                          </p>
                        </div>
                        <div
                          className={
                            questionCount === 0
                              ? 'hidden'
                              : 'visible flex items-center space-x-1 text-5xl font-semibold lg:text-7xl'
                          }
                        >
                          {game.questionList[game.questionIndex].question}
                          <div className="ml-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white  md:h-20 md:w-20">
                            <p className="visible text-3xl font-semibold text-white md:text-4xl md:font-bold">
                              {questionCount}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mx-auto mt-5 w-full rounded bg-gray-200 md:mt-10 md:w-1/2 ">
                        <div className="shim-red h-4 w-full rounded"></div>
                      </div>
                    </div>
                  )}
                  {!disabled ? (
                    <>{null}</>
                  ) : (
                    <>
                      {podium ? (
                        <div className="flex items-center justify-center h-screen">
                          <h2>Songgi natija</h2>
                        </div>
                      ) : (
                        <div>
                          <div className="">
                            <div className="absolute top-2 right-2 z-50">
                              {showButton ? (
                                <button
                                  className="bg-blue-600 px-6 md:px-10 text-white py-2 md:py-4 rounded-lg font-medium md:font-semibold text-base md:text-x"
                                  onClick={() =>
                                    nextQuestion(
                                      game.id,
                                      game.questionList.length,
                                      game.questionIndex
                                    )
                                  }
                                >
                                  Keyingisi
                                </button>
                              ) : (
                                <button
                                  className="bg-blue-600 px-6 md:px-10 text-white py-2 md:py-4 rounded-lg font-medium md:font-semibold text-base md:text-xl"
                                  onClick={() => setTime(0)}
                                >
                                  O&apos;tkazib yuborish
                                </button>
                              )}
                            </div>
                            <div
                              className={`${
                                time === 0 ? 'hidden' : ''
                              } absolute top-1/2 left-1/2 md:left-10 z-50 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-blue-500 text-white`}
                            >
                              <p className="visible text-4xl font-semibold md:text-5xl md:font-bold text-white">
                                {time}
                              </p>
                            </div>
                            <div
                              className={`${
                                time === 0 ? '' : ''
                              } absolute top-2 ml-3 md:ml-0 md:top-1/2 md:right-10 z-50 md:transform md:-translate-y-1/2 md:w-32 md:h-32 md:rounded-full md:flex md:items-center md:justify-center`}
                            >
                              <h2 className="text-3xl font-semibold md:text-5xl md:font-bold text-gray-800">
                                {game.questionIndex + 1}/
                                {game.questionList.length}
                              </h2>
                            </div>
                          </div>

                          <div className="flex flex-col items-center space-y-4 justify-between md:justify-around h-screen">
                            <div className="px-8 py-4 mt-16 rounded-lg shadow-lg w-fit mx-auto">
                              <h1 className="text-2xl font-semibold md:text-4xl md:font-bold">
                                {game.questionList[game.questionIndex].question}
                              </h1>
                            </div>
                            <div className="grid gap-2 grid-rows-2 grid-cols-2 w-screen md:w-fit p-5">
                              {game.questionList[
                                game.questionIndex
                              ].answerList.map((item) => (
                                <div
                                  key={item.id}
                                  className={
                                    time === 0
                                      ? item.bgColor === 'red'
                                        ? item.isCorrect
                                          ? ' bg-[#e21b3c] create-blok'
                                          : ` bg-[#e21b3c] create-blok bg-opacity-60`
                                        : item.bgColor === 'blue'
                                        ? item.isCorrect
                                          ? `bg-[#1368ce] create-blok`
                                          : `bg-[#1368ce] create-blok bg-opacity-60`
                                        : item.bgColor === 'yellow'
                                        ? item.isCorrect
                                          ? `bg-[#d89e00] create-blok`
                                          : `bg-[#d89e00] create-blok bg-opacity-60`
                                        : item.bgColor === 'gren'
                                        ? item.isCorrect
                                          ? `bg-[#26890c] create-blok`
                                          : `bg-[#26890c] create-blok bg-opacity-60`
                                        : ''
                                      : item.bgColor === 'red'
                                      ? ' bg-[#e21b3c] create-blok'
                                      : item.bgColor === 'blue'
                                      ? `bg-[#1368ce] create-blok`
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
                                    } w-[15px] md:!w-[30px] leading-[100%]`}
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
                                  <div className="flex flex-grow">
                                    <p className="text-white text-xl md:text-3xl font-semibold">
                                      {item.body}
                                    </p>
                                  </div>
                                  {/* check dev */}

                                  {time === 0 && (
                                    <div className="!min-w-[45px] h-[45px] rounded-full flex justify-center items-center   ">
                                      {item.isCorrect ? (
                                        <BsCheckLg className="text-green-500 text-3xl" />
                                      ) : (
                                        <CgClose className="text-red-500 text-3xl" />
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </>
              ) : game.status === 'result' ? (

                <div className="flex flex-col justify-center h-screen">
                  <div className='hidden lg:block'>
                    <Confetti
                      width={width}
                      height={height}
                      tweenDuration={5000}
                    />
                  </div>
                  <div className="flex items-end justify-center space-x-2">
                    <div className="relative flex items-center justify-center hover:bg-opacity-80 h-24 w-20 rounded-t-xl rounded-b-lg bg-[#F9C200] md:h-36 md:w-40 lg:h-40 lg:w-48">
                      <div className="absolute top-0 left-0 flex h-10 w-full items-center justify-center rounded-t-xl bg-[#F99500]">
                        <h3 className="text-white font-semibold md:text-lg">
                          Messi
                        </h3>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold text-white">
                        3
                      </h3>
                    </div>
                    <div className="relative flex items-center justify-center hover:bg-opacity-80 h-36 w-20 rounded-lg bg-[#006ED4] md:h-56 md:w-40 lg:h-72 lg:w-48">
                      <div className="absolute -top-7 md:-top-12 left-1/2 transform -translate-x-1/2 text-2xl md:text-5xl text-[#006ED4]">
                        <AiOutlineCrown />
                      </div>
                      <div className="absolute top-0 left-0 flex h-10 w-full items-center justify-center rounded-t-xl bg-[#0060B8]">
                        <h3 className="text-white font-semibold md:text-lg">
                          Ronaldo
                        </h3>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold text-white">
                        1
                      </h3>
                    </div>
                    <div className="relative flex items-center justify-center hover:bg-opacity-80 h-28 w-20 rounded-lg bg-[#EC5858] md:h-44 md:w-40 lg:h-56 lg:w-48">
                      <div className="absolute top-0 left-0 flex h-10 w-full items-center justify-center rounded-t-xl bg-[#D93C3C]">
                        <h3 className="text-white font-semibold md:text-lg">
                          Mbabpe
                        </h3>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold text-white">
                        2
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div className="mt-14 w-full flex justify-center">
                      <table className="border w-[50%]">
                        <tr className="border-[1px] hover:bg-gray-100 active:bg-sky-200 cursor-pointer">
                          <th>№</th>
                          <th>Ismi</th>
                          <th>Ball</th>
                          <th>To`g`ri javoblar</th>
                          <th>Noto`g`ri javoblar</th>
                          <th>Savollar soni</th>
                        </tr>
                        {players.map((player, index) => {
                          return (
                            <tr key={index} className="border-[1px] hover:bg-gray-100 active:bg-sky-200 cursor-pointer">
                              <td>{index + 1}</td>
                              <td>{player.playerName}</td>
                              <td>{player.point}</td>
                              <td>{player.intPoint}</td>
                              <td>
                                {game.questionList.length - player.intPoint}
                              </td>
                              <td>{game.questionList.length}</td>
                            </tr>
                          );
                        })}
                      </table>
                    </div>
                  </div>

+
                </div>
              ) : (
                <div className="bg-blue-400 h-screen" key={game.id}>
                  <div className="bg-blue-500 w-screen py-3">
                    <div className="flex items-center space-x-5 bg-white w-fit p-3 md:p-5 rounded-lg mx-auto">
                      <div className="text-base sm:text-lg md:text-xl font-semibold">
                        O&apos;yinga qo&apos;shilish uchun: <br />
                        <a
                          href="https://edteach-original-play-game.vercel.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="font-bold cursor-pointer hover:text-blue-500"
                        >
                          www.edteach-game.uz
                        </a>{' '}
                        ga o&apos;ting!
                      </div>
                      <div>
                        <p className="px-2 text-base md:text-lg font-semibold">
                          O&apos;yinga PIN
                        </p>
                        <div
                          onClick={() =>
                            navigator.clipboard.writeText(`${game.pin}`)
                          }
                          className="relative p-2 rounded-lg duration-200 cursor-pointer select-none group"
                        >
                          <h2 className="text-3xl md:text-5xl font-bold text-gray-700">
                            {game.pin}
                          </h2>
                          <span
                            onClick={() => {
                              setCopyPin(true);
                              setInterval(() => {
                                setCopyPin(false);
                              }, 5000);
                            }}
                            className={`${
                              copyPin ? 'bg-blue-500' : 'bg-gray-500'
                            }  hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 right-0 text-lg text-white font-semibold bg-opacity-40 w-full h-full group-hover:inline-flex items-center justify-center rounded-lg`}
                          >
                            {copyPin ? 'Nusxalandi!' : 'Nusxalash!'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex items-center justify-between mx-2 md:mx-5">
                      <Link href="/dashboard">
                        <a className="flex items-center text-sm md:text-base p-2 md:p-3 bg-blue-500 hover:bg-blue-600 duration-200 text-white font-bold rounded-xl">
                          <MdOutlineKeyboardArrowLeft />
                          Chiqish
                        </a>
                      </Link>
                      <h1 className="text-2xl md:text-5xl font-bold text-white py-5 invisible">
                        EdTeach!
                      </h1>
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <button
                          className="text-sm md:text-base p-2 md:p-3 bg-blue-500 hover:bg-blue-600 duration-200 text-white font-bold rounded-xl"
                          onClick={() => sendData(game.id)}
                          disabled={players.length === 0}
                        >
                          O&apos;yinni boshlash
                        </button>
                        <div className="flex items-center space-x-1 md:space-x-2 bg-blue-500 hover:bg-blue-600 duration-200 md:mt-4 rounded-lg py-1 md:py-2 px-3 md:mb-4">
                          <FaUser className="text-white text-lg md:text-2xl" />
                          <span className="text-base md:text-xl text-white font-bold">
                            {players.length}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-0 md:p-5 h-full flex justify-center">
                      <ol className="flex items-center space-x-2 flex-wrap mx-2">
                        {players
                          .filter((item) => item.isPlay)
                          .map((item, index) => {
                            return (
                              <li
                                onClick={() => deletePlayer(item.id)}
                                className="flex items-center justify-between w-fit hover:line-through cursor-pointer bg-blue-500 hover:bg-rose-500 duration-200 text-white px-4 py-3 md:px-6 md:py-4 my-2 rounded-lg space-x-2 text-lg md:text-xl font-semibold whitespace-nowrap truncate"
                                key={item.id}
                              >
                                <p>{index + 1}</p>
                                <h1>{item.playerName}</h1>
                              </li>
                            );
                          })}
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GameID;
