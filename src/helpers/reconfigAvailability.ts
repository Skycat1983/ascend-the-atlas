// we might want to shift avaialbility of country, region or modifier from available to unavailable
export const reconfigAvailability = (
  state: any,
  dispatch: any
): Promise<void> => {
  return new Promise((resolve) => {
    // this function will remove the displayed country from the available countries and add it to the unavailable countries.
    const { displayedCountry } = state.gameDisplay;
    const { availableCountries, unavailableCountries } = state.gameData;
    // console.log("displayedCountry :>> ", displayedCountry);
    // console.log("availableCountries :>> ", availableCountries);
    // console.log("unavailableCountries :>> ", unavailableCountries);

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
