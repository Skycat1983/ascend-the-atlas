import { getRandomWeighted } from "../helpers/modifiers/getRandomWeighted";
import { Modifier } from "../types/modifierTypes";
import { setModal } from "../helpers/modal/setModal";
import { AppDispatch, RootState } from "../types/rootInterfaces";

// This function is called when the user selects a modifier in the modal.
// It takes the selected modifier and the dispatch function as arguments.
export const handleModifierSelection = (
  selectedModifier: Modifier,
  dispatch: AppDispatch
) => {
  // Dispatches an action to add the selected modifier to the applied modifiers list in the state.
  dispatch({ type: "ADD_APPLIED_MODIFIER", payload: selectedModifier });
  // Dispatches an action to close the modal.
  dispatch({ type: "CLOSE_MODAL" });
};

// This function is responsible for handling the modifier selection modal.
// It takes the current state and the dispatch function as arguments.
export const modalHandler = async (
  state: RootState,
  dispatch: AppDispatch
): Promise<Modifier> => {
  // Extracts the availableModifiers from the state.
  const { availableModifiers } = state.gameModifiers;
  // Gets a random set of 3 modifiers based on their weights.
  const modifiersForDisplay = await getRandomWeighted(availableModifiers, 3);

  // Returns a new promise and passes the handleModalSelection function as a callback.
  return new Promise((resolve) => {
    // Sets the modal with the modifiersForDisplay and the callback function.
    setModal(modifiersForDisplay, dispatch, (selectedModifier: Modifier) => {
      // Resolves the promise with the selected modifier.
      resolve(selectedModifier);
    });
  });
};
