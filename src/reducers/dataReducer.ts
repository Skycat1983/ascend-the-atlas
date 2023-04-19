import { initialNullState } from "../Utils/consts";
import { DataState, DataAction } from "../types/dataTypes";

export const gameDataReducer = (state: DataState, action: DataAction) => {
  // console.log("Action:", action); // Add this line to log the action
  // console.log("Current state:", state); // Add this line to log the current state
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
      console.log("Updating unavailable regions"); // Corrected this line
      return { ...state, unavailableRegions: action.payload };
    case "SET_AVAILABLE_COUNTRIES":
      // console.log(
      //   "Updating available countries with payload: ",
      //   action.payload
      // );
      return {
        ...state,
        availableCountries: action.payload ? [...action.payload] : [],
      };
    case "SET_UNAVAILABLE_COUNTRIES":
      // console.log(
      //   "Updating unavailable countries with payload: ",
      //   action.payload
      // );
      return {
        ...state,
        unavailableCountries: action.payload ? [...action.payload] : [],
      };

    default:
      return state;
  }
};

// case "INITIALISE_STATE":
//   return {
//     ...state,
//     ...action.payload,
//   };
