import React, { useEffect, useMemo, useReducer, useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import "../App.css";
import { initialState, defaultFetch } from "../Utils/consts";
import Modal from "../Components/Modal";
import { getProgressBarColor } from "../Utils/getProgressBarColor";
import { gameStateReducer } from "../reducers/gameReducer";
import { gameVariablesReducer } from "../reducers/variablesReducer";
import { gameModifiersReducer } from "../reducers/modifiersReducer";
import { gameDisplayReducer } from "../reducers/displayReducer";
import { gameDataReducer } from "../reducers/dataReducer";
import { fetchReducer } from "../reducers/fetchReducer";
import { setData } from "../helpers/setData";
import { setAvailableCountries } from "../helpers/setAvailableCountries";
import { setDataAvailability } from "../helpers/setDataAvailability";
import { shiftDataAvailability } from "../helpers/shiftDataAvailability";
import { setDisplayedOptions } from "../helpers/setDisplayedOptions";
import { setDisplayedCountry } from "../helpers/setDisplayedCountry";
import ProgressBar from "../Components/ProgressBar/ProgressBar";
import { useRef } from "react";

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
  fetchState: fetchReducer,
  gameState: gameStateReducer,
  gameVariables: gameVariablesReducer,
  gameModifiers: gameModifiersReducer,
  gameDisplay: gameDisplayReducer,
  gameData: gameDataReducer,
});

function Flags() {
  // the reducer state with all its deconstructed values below
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const [isBoolean, setIsBoolean] = useState(false);
  const {
    gameState,
    gameDisplay,
    gameData,
    gameModifiers,
    gameVariables,
    fetchState,
  } = state;
  const { result, error, loading } = fetchState;
  const { level, score, progressBarWidth } = gameState;
  const { displayedCountry, displayedOptions, displayedModifiers } =
    gameDisplay;
  const { multiplier, displayedCount, modifierInterval } = gameVariables;
  const {
    availableCountries,
    availableRegions,
    unavailableCountries,
    unavailableRegions,
  } = gameData;
  const { availableModifiers, appliedModifiers } = gameModifiers;
  // todo: modal

  useEffect(() => {
    setData(defaultFetch, dispatch);
  }, []);

  useEffect(() => {
    if (result && result.length > 0) {
      const next = async () => {
        await setAvailableCountries(state, dispatch);
        await setDisplayedOptions(state, dispatch);
        await setDisplayedCountry(state, dispatch);
        await shiftDataAvailability(displayedCountry, dispatch);

        await console.warn(
          // "fetchstate :>> ",
          // state.fetchState,
          "gamestate :>> ",
          state.gameState,
          "gamedisplay :>> ",
          state.gameDisplay,
          "gamedata :>> ",
          state.gameData
          // "gamemodifiers :>> ",
          // state.gameModifiers,
          // "gamevariables :>> ",
          // state.gameVariables
        );
      };
      next();
    }
  }, [result]);

  // useEffect(() => {
  //   const reconfig = async () => {
  //     if (result && result.length > 0) {
  //       await setAvailableCountries(state, dispatch);
  //     }
  //   };
  //   reconfig();
  // }, [availableRegions]);

  // console.log("state :>> ", state);

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
// const [progressBarWidth, setProgressBarWidth] = useState("0%");
// const { result, error, loading } = useFetch<any>(defaultFetch);

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
