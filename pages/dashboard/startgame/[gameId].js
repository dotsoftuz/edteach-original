import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../../components'
import { useUserContext } from '../../../context/userContext';
import { db } from '../../../firebase';

function gameId() {
    const router = useRouter();
    const { uid } = useUserContext()
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { gameId } = router.query;
            const questColl = collection(db, `users/${uid}/question`);
            const queryColl = query(questColl, where("id", "==", `${gameId}`))
                onSnapshot(queryColl, (snapshot) =>
                setQuestions(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            );
        }
        fetchData()
    }, [uid, router]);


  return (
    <Sidebar>
        <h1>{questions.map((item) => {
            return item.pin
        })}</h1>
    </Sidebar>
  )
}

export default gameId