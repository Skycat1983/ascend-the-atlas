import { initialState } from "../Utils/consts";

export const gameDisplayReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_DISPLAYED_COUNTRY":
      return { ...state, displayedCountry: action.payload };
    case "SET_DISPLAYED_OPTIONS":
      return { ...state, displayedOptions: action.payload };
    case "SET_DISPLAYED_MODIFIERS":
      return { ...state, displayedModifiers: action.payload };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};
