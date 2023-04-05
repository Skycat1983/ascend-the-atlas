import { AppDispatch } from "../../types/rootInterfaces";

export const setProgressBar = (
  level: number,
  modifierInterval: number,
  dispatch: AppDispatch
) => {
  const progress = ((level - 1) % modifierInterval) / modifierInterval;
  dispatch({
    type: "SET_PROGRESS_BAR",
    payload: progress,
  });
};
