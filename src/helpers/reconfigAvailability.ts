import { DynamicReconfig } from "../types/rootInterfaces";

// This function reconfigures the availability of an object (e.g., country, region)
// in the available and unavailable lists in the state.
// It takes a configuration object with the state, dispatch, objectToReconfig,
// availableListKey, and unavailableListKey as properties.
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

    // Filters the objectToReconfig out of the available list.
    const availableList = state[availableListKey] as T[];
    const unavailableList = state[unavailableListKey] as T[];

    console.log("Initial availableList:", availableList);
    console.log("Initial unavailableList:", unavailableList);

    console.log("Object to reconfigure:", objectToReconfig);

    const newAvailableList = availableList.filter(
      (item: T) => item !== objectToReconfig
    );
    // Adds the objectToReconfig to the unavailable list.
    const newUnavailableList = [...unavailableList, objectToReconfig];

    console.log("Updated availableList:", newAvailableList);
    console.log("Updated unavailableList:", newUnavailableList);

    console.log(
      "Dispatching actions to update available and unavailable lists"
    );
    const availableActionType = `SET_${String(availableListKey)
      .replace(/([A-Z])/g, "_$1")
      .toUpperCase()}`;
    const unavailableActionType = `SET_${String(unavailableListKey)
      .replace(/([A-Z])/g, "_$1")
      .toUpperCase()}`;

    dispatch({
      type: availableActionType,
      payload: newAvailableList,
    });
    dispatch({
      type: unavailableActionType,
      payload: newUnavailableList,
    });

    // Dispatches actions to update the available and unavailable lists in the state.
    // dispatch({
    //   type: `SET_AVAILABLE_${String(availableListKey).toUpperCase()}`,
    //   payload: newAvailableList,
    // });
    // dispatch({
    //   type: `SET_UNAVAILABLE_${String(unavailableListKey).toUpperCase()}`,
    //   payload: newUnavailableList,
    // });
    console.log("state after dispatching actions:", state);
  } catch (error) {
    console.error(error);
  }
};
