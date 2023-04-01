import getRndInt from "../Utils/getRndInt";

// this function will get the next set of choices to be displayed from the available countries and set them in the displayedChoices state
export const setDisplayedOptions = (
  state: any,
  dispatch: any
): Promise<void> => {
  return new Promise((resolve) => {
    const { availableCountries } = state.gameData;
    const { displayedCount } = state.gameVariables;

    let displayedChoices: any[] = [];
    for (let i = 0; i < displayedCount; i++) {
      let random = getRndInt(0, availableCountries.length);
      let country = availableCountries[random];
      // if the country is already in the unavailable countries array we will skip it
      // if (country && !unavailableCountries.includes(country.cca3)) {
      displayedChoices.push(country);
      // } else {
      //   i--;
      //   continue;
      // }
    }
    console.log("displayedChoices :>> ", displayedChoices);
    // Dispatch action to update the state
    dispatch({
      type: "SET_DISPLAYED_OPTIONS",
      payload: displayedChoices,
    });
    resolve();
  });
};

// const {
//   gameVariables: { displayedCount },
//   gameData: { availableCountries, unavailableCountries },
// } = state;
