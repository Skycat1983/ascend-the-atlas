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

export type AppAction =
  | DataAction
  | FetchAction
  | DisplayAction
  | GameAction
  | ModifiersAction
  | VariablesAction
  | ModalAction;

export type AppDispatch = (action: AppAction) => void;
