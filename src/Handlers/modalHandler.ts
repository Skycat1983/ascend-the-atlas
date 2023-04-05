import {
  upsideDownFlagModifier,
  sidewaysFlagModifier,
  colourlessFlagModifier,
  mirrorHorizontalModifier,
  mirrorVerticalModifier,
  flagDescription,
  differentLanguageNameModifier,
  mixUpLettersModifier,
  showCapitalCityInsteadModifier,
  addAll,
  addOneOption,
  minusOneOption,
  addCaribbean,
  addSouthAmerica,
  addSouthernAfrica,
  addWesternAfrica,
  addMelanesia,
  addPolynesia,
  addWesternAsia,
  addSouthernAsia,
  addCentralAmerica,
  addSoutheastAsia,
  addNorthernAfrica,
  addEasternAfrica,
  addMiddleAfrica,
  addEasternAsia,
  addMicronesia,
  addCentralAsia,
} from "../modifiers/penalties";
import { getRandomWeighted } from "../helpers/modifiers/getRandomWeighted";
import { Modifier } from "../types/modifierTypes";
import { setModal } from "../helpers/modal/setModal";
import { AppDispatch, RootState } from "../types/rootInterfaces";

export const handleModifierSelection = (
  selectedModifier: Modifier,
  dispatch: AppDispatch
) => {
  // Apply the selected modifier and perform other necessary actions.
  // After that, close the modal.
  dispatch({ type: "CLOSE_MODAL" });
};

export const modalHandler = async (state: RootState, dispatch: AppDispatch) => {
  const { level } = state.gameState;
  const { modifierInterval } = state.gameVariables;
  const { availableModifiers } = state.gameModifiers;

  if (level % modifierInterval === 0) {
    console.warn(
      "eligibility for penalty confirmed. availableModifiers:",
      availableModifiers
    );
    const modifiersForDisplay = await getRandomWeighted(availableModifiers, 3);
    setModal(modifiersForDisplay, dispatch);
    console.warn("modifiersForDisplay", modifiersForDisplay);
  }
};
