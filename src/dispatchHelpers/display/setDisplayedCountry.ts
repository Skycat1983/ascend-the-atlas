import getRndInt from "../../Utils/getRndInt";
import { RootState, Country } from "../../types/rootInterfaces";
import { DisplayAction } from "../../types/displayTypes";

// this function will get a random country from the displayed choices state. It will then dispatch an action to update the state with the chosen country
export const setDisplayedCountry = (
  state: RootState,
  dispatch: (action: DisplayAction) => void
): Promise<Country> => {
  return new Promise((resolve, reject) => {
    try {
      const { displayedCount } = state.gameVariables;
      const { displayedOptions } = state.gameDisplay;

      console.warn(displayedOptions, displayedCount);

      if (!displayedOptions || displayedOptions.length === 0) {
        throw new Error("No available displayedOptions in setDisplayedCountry");
      }

      if (!displayedCount || displayedCount === 0) {
        throw new Error(
          "displayedCount is 0 or does not exist in setDisplayedCountry"
        );
      }

      if (displayedOptions.length !== displayedCount) {
        throw new Error(
          "displayedOptions.length !== displayedCount in setDisplayedCountry"
        );
      }

      let chosenCountry = getRndInt(0, displayedCount - 1);
      console.log(
        "displayedOptions[chosenCountry] :>> ",
        displayedOptions[chosenCountry]
      );
      dispatch({
        type: "SET_DISPLAYED_COUNTRY",
        payload: displayedOptions[chosenCountry],
      });
      resolve(displayedOptions[chosenCountry]);
    } catch (error) {
      reject(error);
    }
  });
};
