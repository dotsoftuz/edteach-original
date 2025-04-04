import { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { toast } from 'react-toastify';
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from 'firebase/firestore';

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [questionsPublic, setQuestionsPublic] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [registry, setRegistry] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);
  const [uid, setUid] = useState();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    const questColl = collection(db, `question`);
    const q = query(questColl, where('uid', '==', `${uid}`));
    onSnapshot(q, (snapshot) =>
      setQuestions(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    const questCollPublic = collection(db, `question`);
    const q1 = query(
      questCollPublic,
      where('questionVisibility', '==', `public`)
    );
    onSnapshot(q1, (snapshot) =>
      setQuestionsPublic(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    );
  }, [uid]);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, async (res) => {
      if (res) {
        setUser(res);
        const getUid = async () => {
          setUid(auth.currentUser.uid);
          setUserEmail(auth.currentUser.email);
          setUserName(auth.currentUser.displayName);
        };
        getUid();
      } else {
        setUser(null);
      }
      setError('');
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInUser = async (email, password) => {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const registerUser = async (email, password, fullName) => {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: fullName,
        });
        createCategory(email, fullName);
      })
      .catch(() => {
        toast.error('Foydalanuvchi topilmadi yoki noto`g`ri password');
      });

    setLoading(false);
  };

  const createCategory = async (email, fullName) => {
    setLoading(true);
    try {
      const docUser = doc(db, `users`, auth.currentUser.uid);

      await setDoc(docUser, {
        fullName: fullName,
        email: email,
        timestamp: new Date(),
        prefixtime: new Date().getTime(),
      });

      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      await delay(1000);
      window.location.reload(false);
    } catch (error) {
      toast.error("Ma'lumot saqlanmadi");
    }
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    setLoading(true);

    sendPasswordResetEmail(auth, email)
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  function addLeadingzero(d) {
    return d < 10 ? '0' + d : d;
  }

  function getUsertime(t) {
    let Y = t.getUTCFullYear();
    let M = addLeadingzero(t.getMonth() + 1);
    let D = addLeadingzero(t.getDate());
    return ` ${D}/${M}/${Y}`;
  }


  const contextValue = {
    user,
    loading,
    error,
    signInUser,
    logoutUser,
    forgotPassword,
    registerUser,
    setRegistry,
    registry,
    setLoading,
    setPasswordReset,
    passwordReset,
    uid,
    userName,
    userEmail,
    questions,
    questionsPublic,
    getUsertime
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
