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

export interface FetchState {
  result: Country[] | null;
  error: any | null;
  loading: boolean | null;
}

export interface GameState {
  level: number | null;
  score: number | null;
  progressBarWidth: number | null;
}

export interface GameDisplay {
  displayedCountry: Country | null;
  displayedOptions: Country[] | null;
  displayedModifiers: any[] | null;
}

export interface GameData {
  availableCountries: Country[] | null;
  availableRegions: any[] | null;
  unavailableCountries: Country[] | null;
  unavailableRegions: any[] | null;
}

export interface GameModifiers {
  availableModifiers: any[] | null;
  appliedModifiers: any[] | null;
}

export interface GameVariables {
  multiplier: number | null;
  displayedCount: number | null;
  modifierInterval: number | null;
}

export interface RootState {
  fetchState: FetchState;
  gameState: GameState;
  gameDisplay: GameDisplay;
  gameData: GameData;
  gameModifiers: GameModifiers;
  gameVariables: GameVariables;
}

export interface ReducerState {
  fetchState: FetchState;
  gameState: GameState;
  gameVariables: GameVariables;
  gameModifiers: GameModifiers;
  gameDisplay: GameDisplay;
  gameData: GameData;
}
