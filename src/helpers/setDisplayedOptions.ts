import getRndInt from "../Utils/getRndInt";

// this function will get the next set of choices to be displayed from the available countries and set them in the displayedChoices state
export const setDisplayedOptions = (
  state: any,
  dispatch: any
): Promise<any[]> => {
  return new Promise((resolve) => {
    const { availableCountries } = state.gameData;
    const { displayedCount } = state.gameVariables;
    console.log("availableCountries :>> ", availableCountries);
    console.log("displayedCount :>> ", displayedCount);

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
