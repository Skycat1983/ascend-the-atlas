import { Country, RootState } from "../../types/rootInterfaces";
import { DataAction } from "../../types/dataTypes";

export const setAvailableCountries = (
  state: RootState,
  dispatch: (action: DataAction) => void
): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const { result } = state.fetchState;
      const { availableRegions } = state.gameData;

      if (!result || result.length === 0) {
        throw new Error("No result available");
      }

      if (!availableRegions || availableRegions.length === 0) {
        throw new Error("No regions available");
      }

      let availableCountries: Country[] = [];

      for (let i = 0; i < result.length; i++) {
        if (availableRegions.includes(result[i].subregion)) {
          availableCountries.push(result[i]);
        }
      }

      console.log(
        "Dispatching SET_AVAILABLE_COUNTRIES from setAvailableCountries"
      ); // Add this line
      dispatch({
        type: "SET_AVAILABLE_COUNTRIES",
        payload: availableCountries,
      });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
