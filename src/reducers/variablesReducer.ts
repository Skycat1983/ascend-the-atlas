import { initialNullState } from "../Utils/consts";
import { VariablesAction, VariablesState } from "../types/variablesTypes";

export const gameVariablesReducer = (
  state: VariablesState,
  action: VariablesAction
) => {
  switch (action.type) {
    case "INITIALISE_STATE":
      return { ...action.payload.gameVariables };
    case "RESET":
      return { ...initialNullState.gameVariables };
    case "SET_MULTIPLIER":
      return { ...state, multiplier: action.payload };
    case "SET_MULTIPLE_CHOICE_COUNT":
      return { ...state, displayedCount: action.payload };
    case "SET_MODIFIER_INTERVAL":
      return { ...state, modifierInterval: action.payload };
    default:
      return state;
  }
};
