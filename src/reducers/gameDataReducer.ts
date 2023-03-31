import { initialState } from "../Utils/consts";

export const gameDataReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_FETCH_RESULT":
      return { ...state, fetchResult: action.payload };
    case "SET_AVAILABLE_REGIONS":
      return { ...state, availableRegions: action.payload };
    case "SET_UNAVAILABLE_REGIONS":
      return { ...state, unavailableRegions: action.payload };
    case "SET_AVAILABLE_COUNTRIES":
      return { ...state, availableCountries: action.payload };
    case "SET_UNAVAILABLE_COUNTRIES":
      return { ...state, unavailableCountries: action.payload };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};
