import getRndInt from "../Utils/getRndInt";
import { Country, RootState } from "../types/rootInterfaces";

// this function will get the next set of choices to be displayed from the available countries and set them in the displayedChoices state
export const setDisplayedOptions = (
  state: RootState,
  dispatch: any
): Promise<Country[]> => {
  return new Promise((resolve) => {
    const { availableCountries } = state.gameData;
    const { displayedCount } = state.gameVariables;

    // console.log("availableCountries :>> ", availableCountries);
    // console.log("displayedCount :>> ", displayedCount);

    if (!availableCountries || availableCountries.length === 0) {
      throw new Error("No available countries");
    }

    let displayedOptions: any[] = [];
    for (let i = 0; i < displayedCount; i++) {
      let random = getRndInt(0, availableCountries.length);
      let country = availableCountries[random];
      displayedOptions.push(country);
    }

    console.log(
      "displayedOptions in set displayedOptions:>> ",
      displayedOptions
    );

    // Dispatch action to update the state
    dispatch({
      type: "SET_DISPLAYED_OPTIONS",
      payload: displayedOptions,
    });
    resolve(displayedOptions);
    // resolve();
  });
};

// const {
//   gameVariables: { displayedCount },
//   gameData: { availableCountries, unavailableCountries },
// } = state;
