import { AppDispatch } from "../../types/rootInterfaces";
import { Modifier } from "../../types/modifierTypes";

export const setModal = (modifiers: Modifier[], dispatch: AppDispatch) => {
  dispatch({ type: "OPEN_MODAL", payload: modifiers });
};
