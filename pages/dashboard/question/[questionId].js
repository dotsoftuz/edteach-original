import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';
import { Sidebar } from '../../../components';

function QuestionId() {
  const router = useRouter();
  const { id, questionId } = router.query;

  const [questions, setQuestions] = useState([]);

  const questColl = collection(db, `question`);

  useEffect(() => {
    onSnapshot(questColl, (snapshot) =>
      setQuestions(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);

  return (
    <Sidebar>
       <Breadcrumb
          page="Asosiy sahifa"
          page2="Umumiy Testlar"
          link="/dashboard"
          active
        />
      <div>
        {questions.map((item, key) => {
          const answers = item.questionList.map((item2) => item2.question);
          const check = item.id === questionId;
          console.log(item.questionList.map((item2) => item2));
          return (
            <>
              <div key={key} className="text-center mt-52 text-3xl   ">
                <h2>{check ? item.title : ''}</h2>

                <p>{check ? item.pin : ''} </p>
                <p>{check ? answers : ''} </p>
              </div>
            </>
          );
        })}
      </div>
    </Sidebar>
  );
}

export default QuestionId;
