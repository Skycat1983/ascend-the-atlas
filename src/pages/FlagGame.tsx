import React, { useEffect, useMemo, useReducer, useState } from "react";
import "@total-typescript/ts-reset";
import "../App.css";
import { testState, initialNullState, defaultFetch } from "../Utils/consts";
import {
  gameStateReducer,
  gameVariablesReducer,
  gameModifiersReducer,
  gameDisplayReducer,
  gameDataReducer,
  fetchReducer,
} from "../reducers";
import {
  setFetch,
  setAvailableCountries,
  setDataAvailability,
  reconfigAvailability,
  setDisplayedOptions,
  setDisplayedCountry,
} from "../helpers";
import ProgressBar from "../Components/ProgressBar/ProgressBar";
import { Country, RootState } from "../types/rootInterfaces";
import { answerHandler } from "../handlers/answerHandler";
import { prepNextQuestion } from "../handlers/questionHandler";
import Modal from "../Components/Modal";
import { getProgressBarColor } from "../Utils/getProgressBarColor";
import MultipleChoices from "../Components/MultipleChoices/MultipleChoices";
import Flag from "../Components/Flag/Flag";
import { thresholdHandler } from "../handlers/thresholdHandler";
import Countdown from "../Components/Countdown/Countdown";

// this takes an object of reducers and returns a reducer that can call and handle each of them
function combineReducers(reducers: any) {
  return (state: any, action: any) => {
    const nextState: any = {};
    for (const key in reducers) {
      nextState[key] = reducers[key](state[key], action);
    }
    return nextState as RootState;
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

function FlagGame() {
  // the reducer state with all its deconstructed values below
  const [state, dispatch] = useReducer(
    rootReducer,
    initialNullState as RootState
  );
  const [gameReady, setGameReady] = useState(false);
  const [buttonText, setButtonText] = useState("START");
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [reset, setReset] = useState(false);
  // const [action, setAction] = useState<"start" | "stop" | "reset">("start");
  const {
    gameState,
    gameDisplay,
    gameData,
    gameModifiers,
    gameVariables,
    fetchState,
  } = state;
  const { result, errors, loading } = fetchState;
  const { level, score, progressBarWidth } = gameState;
  const { displayedCountry, displayedOptions, displayedModifiers } =
    gameDisplay;
  const { multiplier, displayedCount, modifierInterval, timer } = gameVariables;
  const {
    availableCountries,
    availableRegions,
    unavailableCountries,
    unavailableRegions,
  } = gameData;
  const { availableModifiers, appliedModifiers } = gameModifiers;
  // todo: modal

  // fetch data fron API
  useEffect(() => {
    const init = async () => {
      try {
        await setFetch(defaultFetch, dispatch);
        dispatch({ type: "INITIALISE_STATE", payload: testState });
      } catch (error) {
        console.error("Error in setFetch:", error);
      }
    };
    init();
  }, []);

  // set available countries after initialisation, and after change of availableRegions
  useEffect(() => {
    if (result && result.length > 0) {
      const calibrate = async () => {
        await setAvailableCountries(state, dispatch);
      };
      calibrate();
    }
    return () => {
      setGameReady(false);
    };
  }, [availableRegions]);

  // signal that config is complete. //TODO: use loading state instead.
  //? maybe loading / !loading can be used for every step ?
  useEffect(() => {
    if (availableCountries && availableCountries.length > 0) {
      setGameReady(true);
    }
  }, [availableCountries]);

  useEffect(() => {
    if (gameReady && availableCountries && availableCountries.length > 0) {
      prepNextQuestion(state, dispatch);
    }
  }, [gameReady]);

  const handleClick = async (e: any) => {
    // console.warn("e.target", e.target);
    // if (e.target.value === "RESTART") {
    //   console.log("should be restartiing");
    //   dispatch({ type: "INITIALISE_STATE", payload: testState });
    // }
    // console.log("e>>>", e);
    const validAnswer = await answerHandler(e, state, dispatch);
    if (validAnswer) {
      console.log("valid answer");
      setButtonText("NEXT");
      thresholdHandler(state, dispatch);
    } else {
      console.log("invalid answer ");
      // dispatch({ type: "INITIALISE_STATE", payload: testState });
      setButtonText("RESTART");
    }
    dispatch({ type: "SET_TIMER_INTERVAL", payload: timer });
    signalTimerReset();
    prepNextQuestion(state, dispatch);
  };

  // if (
  //   availableCountries &&
  //   availableCountries.length > 0 &&
  //   (displayedCountry === null || displayedCountry === undefined)
  // ) {
  //   console.warn(
  //     "displayedCountry not showing. main page end",
  //     displayedCountry
  //   );
  // }

  const handleCallback = (remainingTime: number) => {
    console.log("Remaining time:", remainingTime);
  };

  const toggleCountdown = () => {
    setIsCountingDown(!isCountingDown);
  };

  const signalTimerReset = () => {
    setReset(!reset);
    setIsCountingDown(false);
  };

  return (
    <>
      <div>
        <Countdown
          timer={timer}
          isCountingDown={isCountingDown}
          cb={handleCallback}
          reset={reset}
        />
        <button onClick={() => toggleCountdown()}>
          {isCountingDown ? "STOP" : "START"}
        </button>
        <button onClick={signalTimerReset}>RESET</button>
      </div>
      <div>
        Level: {level} Score: {score}
      </div>
      {progressBarWidth && (
        <ProgressBar progressBarWidth={progressBarWidth}></ProgressBar>
      )}
      {displayedCountry && <Flag displayedCountry={displayedCountry}></Flag>}

      {displayedOptions && displayedOptions.length > 0 && (
        <MultipleChoices
          displayedOptions={displayedOptions}
          handleClick={handleClick}
        ></MultipleChoices>
      )}
      {/* <button value="" onClick={handleClick}>
        {buttonText}
      </button> */}
      {/* {!gameReady && <button onClick={handleClick}>NEXT</button>} */}
    </>
  );
}

export default FlagGame;

{
  /* <div className="flag-container">
        {displayedCountry && (
          <img
            key={displayedCountry.cca3}
            src={displayedCountry.flags.png}
            alt={displayedCountry.name.common}
            // className={`${displayedCountry.classname}`}
          />
        )}
      </div> */
}

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
