import { Modifier } from "../types/modifierTypes";
import { ModalAction, ModalState } from "../types/modalTypes";

const initialState: ModalState = {
  isOpen: false,
  content: null,
};

export const modalReducer = (
  state: ModalState = initialState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isOpen: true,
        content: action.payload,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isOpen: false,
        content: null,
      };
    default:
      return state;
  }
};
