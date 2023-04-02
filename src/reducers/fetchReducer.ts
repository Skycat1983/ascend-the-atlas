import { initialNullState } from "../Utils/consts";

export const fetchReducer = (state: any, action: any) => {
  switch (action.type) {
    // case "INITIALISE_STATE":
    //   return { ...action.payload.fetchState };
    // case "RESET":
    //   return { ...initialNullState.fetchState };
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
