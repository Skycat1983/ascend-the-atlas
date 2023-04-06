import { getRandomWeighted } from "../helpers/modifiers/getRandomWeighted";
import { Modifier } from "../types/modifierTypes";
import { setModal } from "../helpers/modal/setModal";
import { AppDispatch, RootState } from "../types/rootInterfaces";

export const handleModifierSelection = (
  selectedModifier: Modifier,
  dispatch: AppDispatch
) => {
  dispatch({ type: "ADD_APPLIED_MODIFIER", payload: selectedModifier });
  dispatch({ type: "CLOSE_MODAL" });
};

export const modalHandler = async (
  state: RootState,
  dispatch: AppDispatch
): Promise<Modifier> => {
  const { availableModifiers } = state.gameModifiers;
  const modifiersForDisplay = await getRandomWeighted(availableModifiers, 3);

  // Return a new promise and pass the handleModalSelection function as a callback.
  return new Promise((resolve) => {
    setModal(modifiersForDisplay, dispatch, (selectedModifier: Modifier) => {
      // Resolve the promise with the selected modifier.
      resolve(selectedModifier);
    });
  });
};

//! import {
//   upsideDownFlagModifier,
//   sidewaysFlagModifier,
//   colourlessFlagModifier,
//   mirrorHorizontalModifier,
//   mirrorVerticalModifier,
//   flagDescription,
//   differentLanguageNameModifier,
//   mixUpLettersModifier,
//   showCapitalCityInsteadModifier,
//   addAll,
//   addOneOption,
//   minusOneOption,
//   addCaribbean,
//   addSouthAmerica,
//   addSouthernAfrica,
//   addWesternAfrica,
//   addMelanesia,
//   addPolynesia,
//   addWesternAsia,
//   addSouthernAsia,
//   addCentralAmerica,
//   addSoutheastAsia,
//   addNorthernAfrica,
//   addEasternAfrica,
//   addMiddleAfrica,
//   addEasternAsia,
//   addMicronesia,
//   addCentralAsia,
// } from "../modifiers/penalties";

// export const modalHandler = async (state: RootState, dispatch: AppDispatch) => {
//   // const { level } = state.gameState;
//   const { availableModifiers } = state.gameModifiers;
//   // if (level % modifierInterval === 0) {
//   // console.warn(
//   //   "eligibility for penalty confirmed. availableModifiers:",
//   //   availableModifiers
//   // );
//   const modifiersForDisplay = await getRandomWeighted(availableModifiers, 3);
//   setModal(modifiersForDisplay, dispatch);
//   // console.warn("modifiersForDisplay", modifiersForDisplay);
//   // }
// };
