import { initialNullState } from "../utils/consts";
import { ModifiersAction, ModifiersState } from "../types/modifierTypes";

export const gameModifiersReducer = (
  state: ModifiersState,
  action: ModifiersAction
) => {
  switch (action.type) {
    case "INITIALISE_STATE":
      return { ...action.payload.gameModifiers };
    case "RESET":
      return { ...initialNullState.gameModifiers };
    case "SET_AVAILABLE_MODIFIERS":
      return { ...state, availableModifiers: action.payload };
    case "SET_UNAVAILABLE_MODIFIERS":
      return { ...state, unavailableModifiers: action.payload };
    case "ADD_APPLIED_MODIFIER":
      return {
        ...state,
        appliedModifiers: [...state.appliedModifiers, action.payload],
      };
    default:
      return state;
  }
};
