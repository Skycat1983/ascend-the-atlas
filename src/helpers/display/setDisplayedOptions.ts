import getRndInt from "../../Utils/getRndInt";
import { Country, RootState } from "../../types/rootInterfaces";
import { DisplayAction } from "../../types/displayTypes";

// this function will get the next set of choices to be displayed from the available countries and set them in the displayedChoices state

export const setDisplayedOptions = (
  state: RootState,
  dispatch: (action: DisplayAction) => void
): Promise<Country[]> => {
  return new Promise((resolve, reject) => {
    // ! this function always runs to here
    try {
      const { availableCountries } = state.gameData;
      const { displayedCount } = state.gameVariables;

      if (!availableCountries || availableCountries.length === 0) {
        throw new Error("No available countries in setDisplayedOptions");
      }

      if (displayedCount > availableCountries.length) {
        throw new Error(
          "Displayed count exceeds the number of available countries in setDisplayedOptions"
        );
      }

      if (availableCountries.some((country) => country === undefined)) {
        throw new Error("Undefined values detected in setDisplayedOptions");
      }

      let displayedOptions: Country[] = [];
      let i = 0;
      // while loop prevents infinite loop
      while (i < displayedCount) {
        let random = getRndInt(0, availableCountries.length - 1);
        let country = availableCountries[random];
        // check for duplicates
        if (!displayedOptions.includes(country)) {
          displayedOptions.push(country);
          i++;
        }
      }

      // Dispatch action to update the state
      dispatch({
        type: "SET_DISPLAYED_OPTIONS",
        payload: displayedOptions,
      });
      if (displayedOptions === null || displayedOptions === undefined) {
        console.warn(
          "displayedOptions not showing in setDisplayedOptions end",
          displayedOptions
        );
      }
      resolve(displayedOptions);
    } catch (error) {
      reject(error);
    }
  });
};
