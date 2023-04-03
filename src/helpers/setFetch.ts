import { Country } from "../types/rootInterfaces";

interface SetFetchResultAction {
  type: "SET_FETCH_RESULT";
  payload: Country[];
}

interface SetErrorsAction {
  type: "SET_ERRORS";
  payload: any;
}
type ActionType = SetFetchResultAction | SetErrorsAction;

type DispatchType = (action: ActionType) => void;

// ": obj is FetchState {" is a type guard/predicate
function isCountryArray(obj: unknown): obj is Country[] {
  // Check if the object is an array and if every element in the array is a non-null object
  return (
    Array.isArray(obj) &&
    obj.every((item) => typeof item === "object" && item !== null)
  );
}

export const setFetch = async (url: string, dispatch: DispatchType) => {
  try {
    const response = await fetch(url);
    const results = await response.json();
    // console.log("results :>> ", results);
    // here we type check the results to remove the 'unknown' type
    if (isCountryArray(results)) {
      console.log("in dispatch");
      dispatch({
        type: "SET_FETCH_RESULT",
        payload: results,
      });
    } else {
      // throw new Error("Invalid data format");
      let error = new Error("Invalid data format");
      dispatch({
        type: "SET_ERRORS",
        payload: error,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
