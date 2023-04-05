import { RootState, AppDispatch } from "../types/rootInterfaces";
import { setDisplayedOptions } from "../helpers/display/setDisplayedOptions";
import { setDisplayedCountry } from "../helpers/display/setDisplayedCountry";
import { reconfigAvailability } from "../helpers/reconfigAvailability";

export const prepNextQuestion = async (
  state: RootState,
  dispatch: AppDispatch
): Promise<void> => {
  try {
    console.log(
      "Before setDisplayedOptions:",
      state.gameDisplay.displayedOptions
    );
    const getDisplayOptions = await setDisplayedOptions(state, dispatch);
    console.log("After setDisplayedOptions:", getDisplayOptions);
    console.log(
      "Before setDisplayedCountry:",
      state.gameDisplay.displayedCountry
    );
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
    await reconfigAvailability(
      {
        ...state,
        gameDisplay: {
          ...state.gameDisplay,
          displayedCountry: getDisplayCountry,
        },
      },
      dispatch
    );
  } catch (error) {
    console.error("Error in prepNextQuestion:", error);
    // todo: handle error
  }
};
