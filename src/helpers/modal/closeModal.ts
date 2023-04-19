import { AppDispatch, RootState } from "../../types/rootInterfaces";

export const closeModal = (state: RootState, dispatch: AppDispatch) => {
  dispatch({ type: "CLOSE_MODAL" });
};
