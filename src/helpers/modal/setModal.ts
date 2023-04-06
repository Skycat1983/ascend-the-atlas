import { AppDispatch } from "../../types/rootInterfaces";
import { Modifier } from "../../types/modifierTypes";

export const setModal = (
  modifiersForDisplay: Modifier[],
  dispatch: AppDispatch,
  handleModalSelection: (selectedModifier: Modifier) => void
) => {
  dispatch({ type: "OPEN_MODAL", payload: modifiersForDisplay });

  // Pass the handleModalSelection function to the Modal component.
};

// export const setModal = (
//   modifiersForDisplay: Modifier[],
//   dispatch: AppDispatch,
//   handleModalSelection: (selectedModifier: Modifier) => void
// ) => {
//   dispatch({ type: "OPEN_MODAL", payload: modifiersForDisplay });

//   // Pass the handleModalSelection function to the Modal component.
// };

//!

// export const setModal = (modifiers: Modifier[], dispatch: AppDispatch) => {
//   dispatch({ type: "OPEN_MODAL", payload: modifiers });
// };
