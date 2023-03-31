import React, { useEffect, useMemo, useReducer, useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import "../App.css";
import { initialState, defaultFetch } from "../Utils/consts";
import Modal from "../Components/Modal";
import { getProgressBarColor } from "../Utils/getProgressBarColor";
import { gameStateReducer } from "../reducers/gameStateReducer";
import { gameVariablesReducer } from "../reducers/gameVariablesReducer";
import { gameModifiersReducer } from "../reducers/gameModifiersReducer";
import { gameDisplayReducer } from "../reducers/gameDisplayReducer";
import { gameDataReducer } from "../reducers/gameDataReducer";
import { setAvailableCountries } from "../helpers/setAvailableCountries";
import { setDataAvailability } from "../helpers/setDataAvailability";
import { shiftDataAvailability } from "../helpers/shiftDataAvailability";
import { setDisplayedOptions } from "../helpers/setDisplayedOptions";
import { setDisplayedCountry } from "../helpers/setDisplayedCountry";
import ProgressBar from "../Components/ProgressBar/ProgressBar";

// this takes an object of reducers and returns a reducer that can call and handle each of them
function combineReducers(reducers: any) {
  return (state: any, action: any) => {
    const nextState: any = {};
    for (const key in reducers) {
      nextState[key] = reducers[key](state[key], action);
    }
    return nextState;
  };
}

// this is the root reducer that will be passed to the useReducer hook
const rootReducer = combineReducers({
  gameState: gameStateReducer,
  gameVariables: gameVariablesReducer,
  gameModifiers: gameModifiersReducer,
  gameDisplay: gameDisplayReducer,
  gameData: gameDataReducer,
});

function Flags() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  // const [progressBarWidth, setProgressBarWidth] = useState("0%");
  const { result, error, loading } = useFetch<any>(defaultFetch);
  const { gameState, gameDisplay, gameData, gameModifiers, gameVariables } =
    state;
  const { level, score, progressBarWidth } = gameState;
  const { displayedCountry, displayedOptions } = gameDisplay;

  useEffect(() => {
    if (result) {
      setAvailableCountries(result, state, dispatch);
      // console.log("state :>> ", state);
      setDisplayedOptions(state, dispatch);
      // console.warn("STATE", state);
      setDisplayedCountry(state, dispatch);
      // shiftDataAvailability(state, dispatch);
    }
  }, [result]);
  console.log(
    "gamestate :>> ",
    state.gameState,
    "gamedisplay :>> ",
    state.gameDisplay,
    "gamedata :>> ",
    state.gameData,
    "gamemodifiers :>> ",
    state.gameModifiers,
    "gamevariables :>> ",
    state.gameVariables
  );

  return (
    <>
      <div>
        Level: {level} Score: {score}
      </div>
      {state.gameState.progressBarWidth && (
        <ProgressBar
          progressBarWidth={progressBarWidth}
          interval={state.gameVariables.modifierInterval}
          level={level}
        ></ProgressBar>
      )}

      <div className="flag-container">
        {displayedCountry && (
          <img
            src={displayedCountry.flags.png}
            alt={displayedCountry.name.common}
            className={`${displayedCountry.classname}`}
          />
        )}
      </div>

      <div className="buttons-container">
        {displayedCountry &&
          displayedOptions.map((country: any, index: number) => {
            // const modifiedCountry = applyModifiers(country);
            return (
              <>
                <button>{displayedOptions[index].name.common}</button>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Flags;

{
  /* <div className="relic-container">
        {state.relics.map((relic: any, index: number) => {
          return <img src={relic} alt="relic" key={index} className="relic" />;
        })}
      </div> */
}

{
  /* <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: progressBarWidth,
            backgroundColor: getProgressBarColor(
              (((state.level - 1) % state.modifierInterval) /
                state.modifierInterval) *
                100
            ),
          }}
        />
      </div> */
}

{
  /* <Modal
          isOpen={state.isModalOpen}
          closeModal={() => dispatch({ type: "TOGGLE_MODAL", payload: false })}
          onModifierSelection={handleModifierSelection}
          availableModifiers={state.availableModifiers}
        /> */
}

// <React.Fragment
//   key={`${modifiedCountry.cca3}-${index}`}>
//   <button className="country-button" onClick={handleClick}>
//     {modifiedCountry.name.common}
//   </button>
// </React.Fragment>

// const initMultipleChoice = setDisplayedChoices(state, dispatch);
// const initSubject = setDisplayedCountry(state, dispatch);
// const initAvailability = shiftDataAvailability(state, dispatch);
