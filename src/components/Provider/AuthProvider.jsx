import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {

    return signOut(auth);
  };

  const resetPassword =(email) =>{
    return sendPasswordResetEmail(auth,email)
  }

  const authInfo = {
    user,
    loader,
    createUser,
    signIn,
    logout,
    resetPassword
  };

  //   observer  user auth state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currantUser) => {
      setUser(currantUser);
      setLoader(false)
    });

    // stop observing while unmounting

    return () => {
      return unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
