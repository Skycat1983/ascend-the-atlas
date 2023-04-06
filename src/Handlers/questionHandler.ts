import {
  RootState,
  AppDispatch,
  DynamicReconfig,
  Country,
} from "../types/rootInterfaces";
import { setDisplayedOptions } from "../helpers/display/setDisplayedOptions";
import { setDisplayedCountry } from "../helpers/display/setDisplayedCountry";
import { reconfigAvailability } from "../helpers/reconfigAvailability";
import { DataState } from "../types/dataTypes";

export const prepNextQuestion = async (
  state: RootState,
  dispatch: AppDispatch
): Promise<void> => {
  const { gameData } = state;
  try {
    // console.log(
    //   "Before setDisplayedOptions:",
    //   state.gameDisplay.displayedOptions
    // );
    const getDisplayOptions = await setDisplayedOptions(state, dispatch);
    // console.log("After setDisplayedOptions:", getDisplayOptions);
    // console.log(
    //   "Before setDisplayedCountry:",
    //   state.gameDisplay.displayedCountry
    // );
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
    // console.log("pass");
    await reconfigAvailability<Country, DataState>({
      state: gameData,
      dispatch,
      objectToReconfig: getDisplayCountry,
      availableListKey: "availableCountries",
      unavailableListKey: "unavailableCountries",
    });

    // await reconfigAvailability(
    //   {
    //     ...state,
    //     gameDisplay: {
    //       ...state.gameDisplay,
    //       displayedCountry: getDisplayCountry,
    //     },
    //   },
    //   dispatch
    // );
  } catch (error) {
    console.error("Error in prepNextQuestion:", error);
    // todo: handle error
  }
};
