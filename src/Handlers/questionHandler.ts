import { RootState, AppDispatch } from "../types/rootInterfaces";
import { setDisplayedOptions } from "../dispatchHelpers/display/setDisplayedOptions";
import { setDisplayedCountry } from "../dispatchHelpers/display/setDisplayedCountry";
import { reconfigAvailability } from "../dispatchHelpers/reconfigAvailability";

export const prepNextQuestion = async (
  state: RootState,
  dispatch: AppDispatch
): Promise<void> => {
  try {
    const getDisplayOptions = await setDisplayedOptions(state, dispatch);
    //! this getDisplayCountry below is not always running
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
