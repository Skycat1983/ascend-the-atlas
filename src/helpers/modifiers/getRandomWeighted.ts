import { Modifier } from "../../types/modifierTypes";

function weightedRandomSelection(modifiers: Modifier[]) {
  const totalWeight = modifiers.reduce(
    (sum, modifier) => sum + modifier.rarity,
    0
  );
  const randomValue = Math.random() * totalWeight;

  let weightSum = 0;
  for (const modifier of modifiers) {
    weightSum += modifier.rarity;
    if (randomValue <= weightSum) {
      return modifier;
    }
  }
}

export const getRandomWeighted = async (
  availableModifiers: Modifier[],
  modifierCount: number
) => {
  const pickedModifiers = [];

  if (!availableModifiers || availableModifiers.length === 0) {
    throw new Error("No available modifiers in getRandomWeighted");
  }

  for (let i = 0; i < modifierCount; i++) {
    const selectedModifier = weightedRandomSelection(
      availableModifiers
    ) as Modifier;

    // Remove the selected modifier from the availableModifiers to avoid duplicates
    availableModifiers.splice(availableModifiers.indexOf(selectedModifier), 1);

    pickedModifiers.push(selectedModifier);
  }
  // console.log("pickedModifiers>>>", pickedModifiers);
  return pickedModifiers;
};
