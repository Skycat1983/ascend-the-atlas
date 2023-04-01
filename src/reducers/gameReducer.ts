import { initialState } from "../Utils/consts";

export const gameStateReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_LEVEL":
      return { ...state, level: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    case "SET_PROGRESS_BAR":
      return { ...state, progressBarWidth: action.payload };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};
