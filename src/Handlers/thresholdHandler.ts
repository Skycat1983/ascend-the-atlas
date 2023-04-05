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
} from "../Modifiers/penalties";
import { getRandomWeighted } from "../helpers/modifiers/getRandomWeighted";
import { Modifier } from "../types/modifierTypes";

export const thresholdHandler = async (state: any, dispatch: any) => {
  const { level } = state.gameState;
  const { modifierInterval } = state.gameVariables;
  const { availableModifiers } = state.gameModifiers;

  if (level % modifierInterval === 0) {
    console.warn(
      "eligibility for penalty confirmed. availableModifiers:",
      availableModifiers
    );
    let modifiersForDisplay = await getRandomWeighted(availableModifiers, 3);
    console.warn("modifiersForDisplay", modifiersForDisplay);
  }
};
