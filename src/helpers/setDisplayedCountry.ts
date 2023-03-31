import getRndInt from "../Utils/getRndInt";

// this function will get a random country from the displayed choices state. It will then dispatch an action to update the state with the chosen country
export const setDisplayedCountry = (state: any, dispatch: any) => {
  const { displayedCount } = state.gameVariables;
  const { displayedOptions } = state.gameDisplay;

  let chosenCountry = getRndInt(0, displayedCount - 1);
  console.log("shownFlag", chosenCountry);
  dispatch({
    type: "SET_DISPLAYED_COUNTRY",
    payload: displayedOptions[chosenCountry],
  });
};
