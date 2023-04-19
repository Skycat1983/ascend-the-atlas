import { RootState, AppDispatch, Country } from "../types/rootInterfaces";
import { setDisplayedOptions } from "../helpers/display/setDisplayedOptions";
import { setDisplayedCountry } from "../helpers/display/setDisplayedCountry";
import { reconfigAvailability } from "../helpers/reconfigAvailability";
import { DataState } from "../types/dataTypes";

export const prepNextQuestion = async (
  state: RootState,
  dispatch: AppDispatch
): Promise<void> => {
  const { gameData } = state;
  console.log("gameData in prepNextQuestion:", gameData);

  try {
    const getDisplayOptions = await setDisplayedOptions(state, dispatch);
    const getDisplayCountry = await setDisplayedCountry(
      {
        ...state,
        gameDisplay: {
          ...state.gameDisplay,
          displayedOptions: getDisplayOptions,
        },
      },
      dispatch
    );
    console.log("After setDisplayedCountry:", getDisplayCountry);
    await reconfigAvailability<Country, DataState>({
      state: gameData,
      dispatch,
      objectToReconfig: getDisplayCountry,
      availableListKey: "availableCountries",
      unavailableListKey: "unavailableCountries",
    });
  } catch (error) {
    console.error("Error in prepNextQuestion:", error);
    // todo: handle error
  }
};
