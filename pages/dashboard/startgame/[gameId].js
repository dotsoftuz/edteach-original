import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../../components';
import { useUserContext } from '../../../context/userContext';
import { db } from '../../../firebase';

function GameID() {
  const router = useRouter();
  const { uid } = useUserContext();
  const [questions, setQuestions] = useState([]);
  const [players, setPlayers] = useState([]);

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

  return (
    <Sidebar>
      <div className="flex items-center justify-center h-screen">
        {questions.map((game, index) => {
          return (
            <div
              key={index}
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
                      {players.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center justify-between bg-gray-200 px-4 py-3 my-2 rounded-lg"
                          >
                            <p className="text-lg font-semibold">{index + 1}</p>
                            <h1 className="ml-0 xl:ml-5">{item.playerName}</h1>
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
            </div>
          );
        })}
      </div>
    </Sidebar>
  );
}

export default GameID;
