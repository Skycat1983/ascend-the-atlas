import { AppDispatch } from "../../types/rootInterfaces";

export const setScore = (
  increment: number,
  multiplier: number,
  total: number,
  dispatch: AppDispatch
) => {
  let calcNewScore = (total + increment) * multiplier;
  dispatch({
    type: "SET_SCORE",
    payload: calcNewScore,
  });
};
