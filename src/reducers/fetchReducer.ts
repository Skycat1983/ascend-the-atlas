import { initialState } from "../Utils/consts";

export const fetchReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_FETCH_RESULT":
      return { ...state, result: action.payload };
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};
