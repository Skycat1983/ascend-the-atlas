import { Country, RootState } from "../types/rootInterfaces";

export const setAvailableCountries = (
  state: RootState,
  dispatch: any
): Promise<void> => {
  return new Promise((resolve) => {
    const { result } = state.fetchState;
    const { availableRegions } = state.gameData;

    if (!result || result.length === 0) {
      throw new Error("No result available");
    }

    if (!availableRegions || availableRegions.length === 0) {
      throw new Error("No available regions");
    }

    // console.log("result, availableRegions :>> ", result, availableRegions);
    let availableCountries: Country[] = [];

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
