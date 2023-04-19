import { FetchState, FetchAction } from "./fetchTypes";
import { DisplayState, DisplayAction } from "./displayTypes";
import { DataState, DataAction } from "./dataTypes";
import { GameState, GameAction } from "./gameTypes";
import { ModifiersState, ModifiersAction } from "./modifierTypes";
import { VariablesState, VariablesAction } from "./variablesTypes";
import { ModalState, ModalAction } from "./modalTypes";

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
  modalState: ModalState;
}

//!  T is the generic type parameter itself, while <T> is the syntax to declare or use the generic type parameter in type or function definitions and when providing concrete types.

//! When you use DynamicReconfig with a specific type, like Country, the T will be replaced by that specific type:

export type ReconfigAction<T> = {
  type: string;
  payload: T[];
};

type SubStates = DataState & ModifiersState;

// type KeyToValueType<T> = {
//   [K in keyof SubStates]: SubStates[K] extends T[] ? K : never;
// };

type KeysWithValueType<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

// type AvailableListKeys<T> = KeyToValueType<T>[keyof KeyToValueType<T>];

// export type DynamicReconfig<T, S> = {
//   state: S;
//   dispatch: (action: ReconfigAction<T>) => void;
//   objectToReconfig: T;
//   availableListKey: KeysWithValueType<S, T[]>;
//   unavailableListKey: KeysWithValueType<S, T[]>;
// };

export type DynamicReconfig<T, S> = {
  state: S;
  dispatch: (action: ReconfigAction<T>) => void;
  objectToReconfig: T;
  availableListKey: keyof S;
  unavailableListKey: keyof S;
};

export type AppAction =
  | DataAction
  | FetchAction
  | DisplayAction
  | GameAction
  | ModifiersAction
  | VariablesAction
  | ModalAction;

// | ReconfigAction<T>;

export type AppDispatch = <T = any>(
  action: AppAction | ReconfigAction<T>
) => void;
// ReconfigAction is a generic type that defines the shape of an action object.
// The action object will have a "type" property (a string) and a "payload" property,
// which is an array of the same type as the generic type T.

// KeyToValueType is a utility type that takes a generic type T and maps it
// to the keys of the RootState object.
// The mapped type checks if the value of RootState[K] is an array of type T.
// If it is, the key (K) is included in the resulting type; otherwise, it's assigned the "never" type.

// AvailableListKeys is a type that takes the resulting KeyToValueType<T> type
// and selects the keys that are not "never".
// This results in a type with only the keys of RootState where the value is an array of type T.

// DynamicReconfig is a generic type that defines the shape of the object expected by the
// reconfigAvailability function.
// It uses the generic type T to define the objectToReconfig property,
// as well as the availableListKey and unavailableListKey properties,
// which will only accept keys from RootState where the value is an array of type T.
