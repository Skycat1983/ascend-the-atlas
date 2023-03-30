import { initialState } from "../Utils/consts";

export const gameVariablesReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_MULTIPLIER":
      return { ...state, multiplier: action.payload };
    case "SET_MULTIPLE_CHOICE_COUNT":
      return { ...state, optionsCount: action.payload };
    case "SET_MODIFIER_INTERVAL":
      return { ...state, modifierInterval: action.payload };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};
