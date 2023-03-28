import { createContext, useState } from "react";
import { User } from "../Utils/types";
import { fakeAccount } from "../Utils/consts";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState<User>(null);

  const logIn = () => {
    setUser(fakeAccount);
    console.log("user logged in");
  };

  const logOut = () => {
    setUser(null);
    console.log("user logged out");
  };

  console.log("current user:", user);
  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};
