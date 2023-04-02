import { initialNullState } from "../Utils/consts";

export const gameStateReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INITIALISE_STATE":
      return { ...action.payload.gameState };
    case "RESET":
      return { ...initialNullState.gameState };
    case "SET_LEVEL":
      return { ...state, level: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    case "SET_PROGRESS_BAR":
      return { ...state, progressBarWidth: action.payload };
    default:
      return state;
  }
};
