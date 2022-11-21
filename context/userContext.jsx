import { createContext, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [registry, setRegistry] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);

  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInUser = (email, password) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const registerUser = async (email, password, fullName, coName) => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        createCategory(email, fullName, coName);
      })
      .catch(() => {
        toast.error("Foydalanuvchi topilmadi yoki noto`g`ri password");
      });

    setLoading(false);
  };

  const createCategory = async (email, fullName, coName) => {
    setLoading(true);
    try {
      const docRef = doc(db, ` users/${auth.currentUser.uid}/category`, "all");
      const docRefStorage = doc(
        db,
        `users/${auth.currentUser.uid}/storage`,
        "main"
      );
      const docUser = doc(db, users, auth.currentUser.uid);

      await setDoc(docUser, {
        fullName: fullName,

        email: email,
        coName: coName,
        address: "",
        phone: "",
   
        timestamp: new Date(),
        prefixtime: new Date().getTime(),
        payment: true,
      });
      await setDoc(docRef, {
        category: "Umumiy",
        timestamp: new Date(),
      });
      await setDoc(docRefStorage, {
        category: "Asosiy",
        timestamp: new Date(),
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
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
