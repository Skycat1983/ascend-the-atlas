import { Modifier } from "./modifierTypes";

export interface ModalState {
  isOpen: boolean;
  content: Modifier[] | null;
}

export type ModalAction =
  | { type: "OPEN_MODAL"; payload: Modifier[] }
  | { type: "CLOSE_MODAL" };
