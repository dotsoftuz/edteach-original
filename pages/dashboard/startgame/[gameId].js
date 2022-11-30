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
import { Sidebar } from 'components';
import { useUserContext } from 'context/userContext';
import { db } from '../../../firebase';

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

  const nextQuestion = async (id) => {
    setTime(singleData.questionTime);
    const collectionRef = doc(db, `question`, id);
    const docSnap = await getDoc(collectionRef);
    const payload = {
      questionIndex: docSnap.data().questionIndex + 1,
    };

    await updateDoc(collectionRef, payload);
    setShowButton(false);
  };

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
                      <h1>
                        {game.questionList[game.questionIndex].question}
                        {time}
                      </h1>
                      {showButton && (
                        <button onClick={() => nextQuestion(game.id)}>
                          Next
                        </button>
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
                        <h1 className="flex items-center justify-center h-full -mt-5 text-red-500 font-semibold text-lg">
                          Hali ishtorkchilar yo`q
                        </h1>
                      </div>
                    </div>
                  </div>

                  <button
                    className="px-3 py-3 bg-emerald-400 text-white font-bold rounded-xl mt-4"
                    onClick={() => sendData(game.id)}
                  >
                    O'yinni boshlash
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
