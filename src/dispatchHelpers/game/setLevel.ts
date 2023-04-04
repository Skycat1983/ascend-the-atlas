import { AppDispatch } from "../../types/rootInterfaces";

export const setLevel = (level: number, dispatch: AppDispatch) => {
  dispatch({ type: "SET_LEVEL", payload: level + 1 });
};
