import { RootState } from "./rootInterfaces";

export interface VariablesState {
  multiplier: number;
  displayedCount: number;
  modifierInterval: number;
  // multiplier: number | null;
  // displayedCount: number | null;
  // modifierInterval: number | null;
}

export type VariablesAction =
  | { type: "INITIALISE_STATE"; payload: { gameVariables: RootState } }
  | { type: "RESET" }
  | { type: "SET_MULTIPLIER"; payload: number }
  | { type: "SET_MULTIPLE_CHOICE_COUNT"; payload: number }
  | { type: "SET_MODIFIER_INTERVAL"; payload: number };
