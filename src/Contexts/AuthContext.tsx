import { createContext, useState } from "react";
import { User } from "../Utils/types";
import { fakeAccount, defaultContext } from "../Utils/consts";
import { AuthContextProviderProps, AuthContextType } from "../Utils/types";

export const AuthContext = createContext<AuthContextType>(defaultContext);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

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
