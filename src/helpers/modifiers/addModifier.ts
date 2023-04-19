import { Modifier, ModifiersAction } from "../../types/modifierTypes";

export const addModifier = async (
  selectedModifier: Modifier,
  dispatch: (action: ModifiersAction) => void
) => {
  dispatch({ type: "ADD_APPLIED_MODIFIER", payload: selectedModifier });
};
