import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { Children, createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
const [isLoading , setIsLoading]=useState(true)
  const googleProvider = new GoogleAuthProvider();
  const signWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signUpWithEmail = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);

  };
  const signInWithEmail = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setIsLoading(false)
    return signOut(auth);
  };
  const updateInfo =(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    isLoading,
    signWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    updateInfo,
    logOut,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
