import {
  RootState,
  AppDispatch,
  DynamicReconfig,
} from "../types/rootInterfaces";

export const reconfigAvailability = async <T, S>({
  state,
  dispatch,
  objectToReconfig,
  availableListKey,
  unavailableListKey,
}: DynamicReconfig<T, S>): Promise<void> => {
  try {
    if (!state[availableListKey] || !state[unavailableListKey]) {
      throw new Error(
        `The availableListKey "${String(availableListKey)}" or "${String(
          unavailableListKey
        )}" was not found in the state object.`
      );
    }

    if (typeof objectToReconfig !== "object") {
      throw new Error(
        `The objectToReconfig "${objectToReconfig}" is not an object.`
      );
    }

    // this function should filter the object out of the available list and add it to the unavailable list

    const availableList = state[availableListKey] as T[];
    const unavailableList = state[unavailableListKey] as T[];

    const newAvailableList = availableList.filter(
      (item: T) => item !== objectToReconfig
    );

    const newUnavailableList = [...unavailableList, objectToReconfig];
    dispatch({
      type: `SET_AVAILABLE_${String(availableListKey).toUpperCase()}`,
      payload: newAvailableList,
    });
    dispatch({
      type: `SET_UNAVAILABLE_${String(unavailableListKey).toUpperCase()}`,
      payload: newUnavailableList,
    });
  } catch (error) {
    console.error(error);
  }
};

// we need to run over what <T> is doing slowly and from the beginning. in this code below, what does T mean?

// export type ReconfigAvailabilityParams<T> = {
//   state: RootState;
//   dispatch: (action: ReconfigAction<T>) => void;
//   objectToReconfig: T;
//   availableListKey: keyof RootState;
//   unavailableListKey: keyof RootState;
// };

// what about in this code too ?

//   export type ReconfigAction<T> = {
//   type: string;
//   payload: T[];
// };

//?

//!-------
// we might want to shift avaialbility of country, region or modifier from available to unavailable
// export const reconfigAvailability = (
//   state: any,
//   dispatch: any
// ): Promise<void> => {
//   return new Promise((resolve) => {
//     // this function will remove the displayed country from the available countries and add it to the unavailable countries.
//     const { displayedCountry } = state.gameDisplay;
//     const { availableCountries, unavailableCountries } = state.gameData;

//     // remove the displayed country from the available countries
//     const newAvailableCountries = availableCountries.filter(
//       (country: any) => country.name !== displayedCountry.name
//     );
//     // console.log("newAvailableCountries :>> ", newAvailableCountries);

//     // add the displayed country to the unavailable countries
//     const newUnavailableCountries = [...unavailableCountries, displayedCountry];

//     dispatch({
//       type: "SET_AVAILABLE_COUNTRIES",
//       payload: newAvailableCountries,
//     });
//     dispatch({
//       type: "SET_UNAVAILABLE_COUNTRIES",
//       payload: newUnavailableCountries,
//     });
//     resolve();
//   });
// };
