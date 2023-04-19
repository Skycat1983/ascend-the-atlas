import { Country, RootState } from "./rootInterfaces";

export interface Modifier {
  name: string;
  rarity: number;

  description: string;
  multiplier: number;
  url: string;
  reducer: string;
  apply?: (input: any) => any;
  payload?: (state: any) => any;
}

export type ModifiersAction =
  // | { type: "INITIALISE_STATE"; payload: { gameModifiers: RootState } }
  | { type: "INITIALISE_STATE"; payload: RootState }
  | { type: "RESET" }
  | { type: "SET_AVAILABLE_MODIFIERS"; payload: Modifier[] }
  | { type: "SET_UNAVAILABLE_MODIFIERS"; payload: Modifier[] }
  | { type: "ADD_APPLIED_MODIFIER"; payload: Modifier };

export interface ModifiersState {
  availableModifiers: Modifier[];
  appliedModifiers: Modifier[];
  unavailableModifiers: Modifier[];
}

export interface ReducerStateModifier extends Modifier {
  // case: string;
  payload: (state: any) => any;
}

export interface DisplayedCountryModifier extends Modifier {
  apply: (country: Country) => any;
}

export interface MultipleChoiceModifier extends Modifier {
  apply: (country: Country) => any;
}
