import { initialNullState } from "../Utils/consts";
import { DisplayAction, DisplayState } from "../types/displayTypes";

export const gameDisplayReducer = (
  state: DisplayState,
  action: DisplayAction
) => {
  switch (action.type) {
    case "INITIALISE_STATE":
      return { ...action.payload.gameDisplay };
    case "RESET":
      return { ...initialNullState.gameDisplay };
    case "SET_DISPLAYED_COUNTRY":
      return { ...state, displayedCountry: action.payload };
    case "SET_DISPLAYED_OPTIONS":
      return { ...state, displayedOptions: action.payload };
    case "SET_DISPLAYED_MODIFIERS":
      return { ...state, displayedModifiers: action.payload };
    default:
      return state;
  }
};
