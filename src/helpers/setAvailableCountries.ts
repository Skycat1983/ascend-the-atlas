export const setAvailableCountries = (
  result: any,
  state: any,
  dispatch: any
) => {
  const { availableRegions } = state.gameData;
  let availableCountries: any[] = [];

  for (let i = 0; i < result.length; i++) {
    if (availableRegions.includes(result[i].subregion)) {
      availableCountries.push(result[i]);
    }
  }
  // console.log("availableCountries :>> ", availableCountries);
  dispatch({
    type: "SET_AVAILABLE_COUNTRIES",
    payload: availableCountries,
  });
};
