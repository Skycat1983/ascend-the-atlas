import { FetchAction, FetchState } from "../types/fetchTypes";

export const fetchReducer = (state: FetchState, action: FetchAction) => {
  switch (action.type) {
    case "SET_FETCH_RESULT":
      return { ...state, result: action.payload };
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

// case "INITIALISE_STATE":
//   return { ...action.payload.fetchState };
// case "RESET":
//   return { ...initialNullState.fetchState };
