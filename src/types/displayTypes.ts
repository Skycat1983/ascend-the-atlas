import { Country, RootState } from "./rootInterfaces";
import { Modifier } from "./modifierTypes";

export interface DisplayState {
  displayedCountry: Country | null;
  displayedOptions: Country[] | null;
  displayedModifiers: Modifier[] | null;
}

export type DisplayAction =
  // | { type: "INITIALISE_STATE"; payload: { gameDisplay: RootState } }
  | { type: "INITIALISE_STATE"; payload: RootState }
  | { type: "RESET" }
  | { type: "SET_DISPLAYED_COUNTRY"; payload: Country }
  | { type: "SET_DISPLAYED_OPTIONS"; payload: Country[] }
  | { type: "SET_DISPLAYED_MODIFIERS"; payload: Modifier[] };
