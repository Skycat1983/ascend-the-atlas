import { AppDispatch, RootState } from "../../types/rootInterfaces";
import { Modifier } from "../../types/modifierTypes";

export const setModal = (
  modifiersForDisplay: Modifier[],
  state: RootState,
  dispatch: AppDispatch,
  callback: (selectedModifier: Modifier) => void
) => {
  dispatch({ type: "OPEN_MODAL", payload: modifiersForDisplay });

  // Pass the handleModalSelection function to the Modal component.
};
