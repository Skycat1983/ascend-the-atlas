import { createContext, useEffect, useState } from "react";
import { User } from "../types/authAndFormTypes";
import { defaultContext } from "../Utils/consts";
import {
  AuthContextProviderProps,
  AuthContextType,
} from "../types/authAndFormTypes";
import { auth } from "../config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext<AuthContextType>(defaultContext);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log("user", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errors", errorCode, errorMessage);
        // ..
      });
  };

  const logIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const loggedUser = userCredential.user;
        setUser(loggedUser);
        alert("Log in successful!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("user logged out");
        alert("You have logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkForCurrentUser = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    checkForCurrentUser();
  }, []);

  console.log("current user:", user);
  return (
    <AuthContext.Provider value={{ user, logIn, logOut, signUp }}>
      {props.children}
    </AuthContext.Provider>
  );
};
