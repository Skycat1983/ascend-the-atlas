export const setDataAvailability = (state: any, dispatch: any) => {
  // here we loop through the state.avaiableRegions and set the state.availableCountries
  let availableCountries: any[] = [];

  console.log("state in data availability", state);
  dispatch({
    type: "RESET",
    payload: state,
  });
};
