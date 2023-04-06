// src/types/dataTypes.ts
import { Country, RootState } from "./rootInterfaces";

export interface DataState {
  availableCountries: Country[] | null;
  availableRegions: string[] | null;
  unavailableCountries: Country[] | null;
  unavailableRegions: string[] | null;
}

export type DataAction =
  // | { type: "INITIALISE_STATE"; payload: { gameData: RootState } }
  | { type: "INITIALISE_STATE"; payload: RootState }
  | {
      type: "INITIALISE_SUBSTATE";
      payload: { substate: string; data: DataState };
    }
  | { type: "RESET" }
  | { type: "SET_AVAILABLE_REGIONS"; payload: string[] }
  | { type: "SET_UNAVAILABLE_REGIONS"; payload: string[] }
  | { type: "SET_AVAILABLE_COUNTRIES"; payload: Country[] }
  | { type: "SET_UNAVAILABLE_COUNTRIES"; payload: Country[] };

// type ArrayKeys<T> = {
//   [K in keyof T]: T[K] extends any[] ? K : never;
// }[keyof T];

// type DataStateArrayKeys = ArrayKeys<DataState>;
