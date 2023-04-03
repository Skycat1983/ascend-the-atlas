import { RootState } from "./rootInterfaces";

export interface GameState {
  level: number;
  score: number;
  progressBarWidth: number;
  // level: number | null;
  // score: number | null;
  // progressBarWidth: number | null;
}

export type GameAction =
  | { type: "INITIALISE_STATE"; payload: { gameState: RootState } }
  | { type: "RESET" }
  | { type: "SET_LEVEL"; payload: number }
  | { type: "SET_SCORE"; payload: number }
  | { type: "SET_PROGRESS_BAR"; payload: number };
