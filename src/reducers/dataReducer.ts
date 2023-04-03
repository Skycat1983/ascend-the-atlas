import { initialNullState } from "../Utils/consts";
import { DataState, DataAction } from "../types/dataTypes";

export const gameDataReducer = (state: DataState, action: DataAction) => {
  switch (action.type) {
    case "INITIALISE_STATE":
      return { ...action.payload.gameData };
    case "INITIALISE_SUBSTATE":
      if (action.payload.substate === "gameData") {
        return { ...action.payload.data };
      }
      return state;
    case "RESET":
      return { ...initialNullState.gameData };
    case "SET_AVAILABLE_REGIONS":
      return { ...state, availableRegions: action.payload };
    case "SET_UNAVAILABLE_REGIONS":
      return { ...state, unavailableRegions: action.payload };
    case "SET_AVAILABLE_COUNTRIES":
      return { ...state, availableCountries: action.payload };
    case "SET_UNAVAILABLE_COUNTRIES":
      return { ...state, unavailableCountries: action.payload };
    default:
      return state;
  }
};

// case "INITIALISE_STATE":
//   return {
//     ...state,
//     ...action.payload,
//   };
