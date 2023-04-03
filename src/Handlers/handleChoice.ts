import { GameAction, GameState } from "../types/gameTypes";
import { AppDispatch, Country, RootState } from "../types/rootInterfaces";
import { VariablesState } from "../types/variablesTypes";
import { testState, initialNullState, defaultFetch } from "../Utils/consts";

export const handleChoice = (
  e: any,
  state: RootState,
  dispatch: AppDispatch
) => {
  const { displayedCountry } = state.gameDisplay;
  const { level, score } = state.gameState;
  const { multiplier } = state.gameVariables;
  if (!displayedCountry) {
    throw new Error("No displayed country");
  }
  if (e.target.innerText === displayedCountry.name.common) {
    let calcNewScore = (score + 3) * multiplier;
    dispatch({
      type: "SET_SCORE",
      payload: calcNewScore,
    });
    dispatch({ type: "SET_LEVEL", payload: level + 1 });
  } else {
    dispatch({ type: "INITIALISE_STATE", payload: testState });
  }
};
