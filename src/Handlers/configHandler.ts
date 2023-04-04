export const configHandler = (state: any, dispatch: any): Promise<void> => {
  return new Promise((resolve) => {
    const { displayedCountry } = state.gameDisplay;
    const { availableCountries, unavailableCountries } = state.gameData;

    if (!displayedCountry) {
      throw new Error("No displayed country in configHandler");
    }

    if (!availableCountries || availableCountries.length === 0) {
      throw new Error("No available countries in configHandler");
    }

    // remove the displayed country from the available countries
    const newAvailableCountries = availableCountries.filter(
      (country: any) => country.name !== displayedCountry.name
    );
    // console.log("newAvailableCountries :>> ", newAvailableCountries);

    // add the displayed country to the unavailable countries
    const newUnavailableCountries = [...unavailableCountries, displayedCountry];
    // console.log("newUnavailableCountries :>> ", newUnavailableCountries);

    // dispatch action to update the state

    dispatch({
      type: "SET_AVAILABLE_COUNTRIES",
      payload: newAvailableCountries,
    });
    dispatch({
      type: "SET_UNAVAILABLE_COUNTRIES",
      payload: newUnavailableCountries,
    });
    resolve();
  });
};
