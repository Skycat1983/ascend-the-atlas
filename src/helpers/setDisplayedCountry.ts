import getRndInt from "../Utils/getRndInt";
import { RootState, Country } from "../types/rootInterfaces";

// this function will get a random country from the displayed choices state. It will then dispatch an action to update the state with the chosen country
export const setDisplayedCountry = (
  state: RootState,
  dispatch: any
): Promise<Country> => {
  return new Promise((resolve) => {
    const { displayedCount } = state.gameVariables;
    const { displayedOptions } = state.gameDisplay;

    // console.warn(
    //   "displayedCount, displayedOptions :>> ",
    //   displayedCount,
    //   displayedOptions
    // );
    // console.log("state :>> ", state);

    if (!displayedOptions || displayedOptions.length === 0) {
      throw new Error("No available displayedOptions");
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
    // resolve();
    resolve(displayedOptions[chosenCountry]);
  });
};
