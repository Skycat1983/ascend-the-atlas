import { getRandomWeighted } from "../helpers/modifiers/getRandomWeighted";
import { Modifier, ModifiersState } from "../types/modifierTypes";
import { setModal } from "../helpers/modal/setModal";
import { AppDispatch, RootState } from "../types/rootInterfaces";
import { reconfigAvailability } from "../helpers";

export const handleModifierSelection = async (
  selectedModifier: Modifier,
  state: RootState,
  dispatch: AppDispatch
) => {
  // Dispatches an action to add the selected modifier to the applied modifiers list in the state.
  dispatch({ type: "ADD_APPLIED_MODIFIER", payload: selectedModifier });
  // Dispatches an action to close the modal.
  dispatch({ type: "CLOSE_MODAL" });

  // Call reconfigAvailability here
  await reconfigAvailability<Modifier, ModifiersState>({
    state: state.gameModifiers,
    dispatch,
    objectToReconfig: selectedModifier,
    availableListKey: "availableModifiers",
    unavailableListKey: "unavailableModifiers",
  });
};

export const modalHandler = async (
  state: RootState,
  dispatch: AppDispatch
): Promise<Modifier> => {
  // ... (rest of the code)

  // Extracts the availableModifiers from the state.
  const { availableModifiers } = state.gameModifiers;
  // Gets a random set of 3 modifiers based on their weights.
  const modifiersForDisplay = await getRandomWeighted(availableModifiers, 3);

  // Returns a new promise and passes the handleModalSelection function as a callback.
  return new Promise((resolve) => {
    // Sets the modal with the modifiersForDisplay and the callback function.
    setModal(
      modifiersForDisplay,
      state,
      dispatch,
      (selectedModifier: Modifier) => {
        // Call the handleModifierSelection function
        handleModifierSelection(selectedModifier, state, dispatch);

        // Resolves the promise with the selected modifier.
        resolve(selectedModifier);
      }
    );
  });
};
