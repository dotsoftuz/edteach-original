import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../../firebase';

function Tests() {
  const router = useRouter();
  const { id, tests } = router.query;

  const [questions, setQuestions] = useState([]);

  const questColl = collection(db, `question`);

  useEffect(() => {
    onSnapshot(questColl, (snapshot) =>
      setQuestions(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);

  return (
    <div>
      {questions.map((item, key) => {
        const answers = item.questionList.map((item2) => item2.question);
        return (
          <>
            <p>{item.id === tests ? answers : ''}</p>
          </>
        );
      })}
    </div>
  );
}

export default Tests;
