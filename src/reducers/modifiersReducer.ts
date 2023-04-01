import { initialState } from "../Utils/consts";

export const gameModifiersReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_AVAILABLE_MODIFIERS":
      return { ...state, availableModifiers: action.payload };
    case "ADD_APPLIED_MODIFIER":
      return {
        ...state,
        appliedModifiers: [...state.appliedModifiers, action.payload],
      };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};
