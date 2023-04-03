import { FetchState } from "./fetchTypes";
import { DisplayState } from "./displayTypes";
import { DataState } from "./dataTypes";
import { GameState } from "./gameTypes";
import { ModifiersState } from "./modifierTypes";
import { VariablesState } from "./variablesTypes";
import { DataAction } from "./dataTypes";
import { FetchAction } from "./fetchTypes";
import { DisplayAction } from "./displayTypes";
import { GameAction } from "./gameTypes";
import { ModifiersAction } from "./modifierTypes";
import { VariablesAction } from "./variablesTypes";

export interface Country {
  area: number;
  capital: string[];
  cca3: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  independent: boolean;
  landlocked: boolean;
  languages: { [key: string]: string };
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: string };
  };
  population: number;
  region: string;
  subregion: string;
  translations: { [key: string]: any };
}

export interface RootState {
  fetchState: FetchState;
  gameState: GameState;
  gameDisplay: DisplayState;
  gameData: DataState;
  gameModifiers: ModifiersState;
  gameVariables: VariablesState;
}

export type AppAction =
  | DataAction
  | FetchAction
  | DisplayAction
  | GameAction
  | ModifiersAction
  | VariablesAction;

// Create a general dispatch type
export type AppDispatch = (action: AppAction) => void;

// export interface DisplayState {
//   displayedCountry: Country | null;
//   displayedOptions: Country[] | null;
//   displayedModifiers: Modifier[] | null;
// }

// export type DisplayAction =
//   | { type: "INITIALISE_STATE"; payload: { gameDisplay: RootState } }
//   | { type: "RESET" }
//   | { type: "SET_DISPLAYED_COUNTRY"; payload: Country }
//   | { type: "SET_DISPLAYED_OPTIONS"; payload: string[] }
//   | { type: "SET_DISPLAYED_MODIFIERS"; payload: Modifier[] };

// export interface DataState {
//   availableCountries: Country[] | null;
//   availableRegions: string[] | null;
//   unavailableCountries: Country[] | null;
//   unavailableRegions: string[] | null;
// }

// export type DataAction =
//   | { type: "INITIALISE_STATE"; payload: { gameData: RootState } }
//   | {
//       type: "INITIALISE_SUBSTATE";
//       payload: { substate: string; data: DataState };
//     }
//   | { type: "RESET" }
//   | { type: "SET_AVAILABLE_REGIONS"; payload: string[] }
//   | { type: "SET_UNAVAILABLE_REGIONS"; payload: string[] }
//   | { type: "SET_AVAILABLE_COUNTRIES"; payload: Country[] }
//   | { type: "SET_UNAVAILABLE_COUNTRIES"; payload: Country[] };

// export interface FetchState {
//   result: Country[] | null;
//   error: string | null;
//   loading: boolean | null;
// }

// export type FetchAction =
//   | { type: "SET_FETCH_RESULT"; payload: Country[] }
//   | { type: "SET_ERRORS"; payload: string } // Replace 'any' with a more specific type if needed
//   | { type: "SET_LOADING"; payload: boolean };

// export interface GameState {
//   level: number;
//   score: number;
//   progressBarWidth: number;
//   // level: number | null;
//   // score: number | null;
//   // progressBarWidth: number | null;
// }

// export type GameAction =
//   | { type: "INITIALISE_STATE"; payload: { gameState: RootState } }
//   | { type: "RESET" }
//   | { type: "SET_LEVEL"; payload: number }
//   | { type: "SET_SCORE"; payload: number }
//   | { type: "SET_PROGRESS_BAR"; payload: number };

// export interface Modifier {
//   name: string;
//   description: string;
//   multiplier: number;
//   url: string;
//   reducer: string;
//   apply?: (input: any) => any;
//   payload?: (state: any) => any;
// }

// export type ModifiersAction =
//   | { type: "INITIALISE_STATE"; payload: { gameModifiers: RootState } }
//   | { type: "RESET" }
//   | { type: "SET_AVAILABLE_MODIFIERS"; payload: Modifier[] }
//   | { type: "ADD_APPLIED_MODIFIER"; payload: Modifier };

// export interface ModifiersState {
//   availableModifiers: Modifier[];
//   appliedModifiers: Modifier[];
// }

// export interface VariablesState {
//   multiplier: number;
//   displayedCount: number;
//   modifierInterval: number;
//   // multiplier: number | null;
//   // displayedCount: number | null;
//   // modifierInterval: number | null;
// }

// export type VariablesAction =
//   | { type: "INITIALISE_STATE"; payload: { gameVariables: RootState } }
//   | { type: "RESET" }
//   | { type: "SET_MULTIPLIER"; payload: number }
//   | { type: "SET_MULTIPLE_CHOICE_COUNT"; payload: number }
//   | { type: "SET_MODIFIER_INTERVAL"; payload: number };
