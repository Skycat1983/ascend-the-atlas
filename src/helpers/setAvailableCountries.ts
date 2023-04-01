export const setAvailableCountries = (
  state: any,
  dispatch: any
): Promise<void> => {
  return new Promise((resolve) => {
    const { result } = state.fetchState;
    const { availableRegions } = state.gameData;
    console.log("result, availableRegions :>> ", result, availableRegions);
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
    resolve();
  });
};
