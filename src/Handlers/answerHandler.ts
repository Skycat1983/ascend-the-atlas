import { AppDispatch, RootState } from "../types/rootInterfaces";
import { setScore } from "../dispatchHelpers/game/setScore";
import { setLevel } from "../dispatchHelpers/game/setLevel";
import { setProgressBar } from "../dispatchHelpers";

export const answerHandler = async (
  e: any,
  state: RootState,
  dispatch: AppDispatch
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    try {
      const { displayedCountry } = state.gameDisplay;
      const { level, score } = state.gameState;
      const { multiplier, modifierInterval } = state.gameVariables;
      if (!e) {
        throw new Error("No event. In handleChoice");
      }

      if (!displayedCountry) {
        throw new Error("No displayed country. In handleChoice");
      }

      if (isNaN(multiplier) || isNaN(score) || isNaN(level)) {
        throw new Error("NaN values that should be numbers. In handleChoice");
      }

      if (e.target.innerText === displayedCountry.name.common) {
        setScore(3, multiplier, score, dispatch);
        setLevel(level, dispatch);
        setProgressBar(level, modifierInterval, dispatch);

        // dispatch({
        //   type: "SET_SCORE",
        //   payload: calcNewScore,
        // });
        // dispatch({ type: "SET_LEVEL", payload: level + 1 });
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
