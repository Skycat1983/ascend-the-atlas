// src/types/fetchTypes.ts
import { Country } from "./rootInterfaces";

export interface FetchState {
  result: Country[] | null;
  error: string | null;
  loading: boolean | null;
}

export type FetchAction =
  | { type: "SET_FETCH_RESULT"; payload: Country[] }
  | { type: "SET_ERRORS"; payload: string } // Replace 'any' with a more specific type if needed
  | { type: "SET_LOADING"; payload: boolean };

export interface SetFetchResultAction {
  type: "SET_FETCH_RESULT";
  payload: Country[];
}

export interface SetErrorsAction {
  type: "SET_ERRORS";
  payload: string; // Consider replacing 'any' with a more specific type if needed
}

export type ActionType = SetFetchResultAction | SetErrorsAction;
export type DispatchType = (action: ActionType) => void;
