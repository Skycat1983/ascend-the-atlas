import { ReactNode } from "react";

export interface AuthContextProviderProps {
  children: ReactNode;
}

export interface AuthContextType {
  user: User | null;
  logIn: () => void;
  logOut: () => void;
}

export interface ErrorInterface {
  message: string;
}

export type User = {
  email: string;
  username: string;
};