import { useEffect, useReducer, useState } from "react";
// import "@total-typescript/ts-reset";
import "../App.css";
import { testState, initialNullState, defaultFetch } from "../utils/consts";
import rootReducer from "../reducers/rootReducer";
import { setFetch, setAvailableCountries } from "../helpers";
import ProgressBar from "../Components/ProgressBar/ProgressBar";
import { RootState } from "../types/rootInterfaces";
import { handleClick } from "../handlers/handleClick";
import { questionHandler } from "../handlers/questionHandler";
import MultipleChoices from "../Components/MultipleChoices/MultipleChoices";
import Flag from "../Components/Flag/Flag";
import Countdown from "../Components/Countdown/Countdown";
import Modal from "../Components/Modal/Modal";
import { closeModal } from "../helpers/modal/closeModal";
import ScoreLevel from "../Components/Score&Level/ScoreLevel";
import { handleModifierSelection } from "../handlers/modalHandler";
import {
  handleCallback,
  toggleCountdown,
  signalTimerReset,
} from "../handlers/timerHandlers";

function FlagGame() {
  // the reducer state with all its deconstructed values below
  const [state, dispatch] = useReducer(
    rootReducer,
    initialNullState as RootState
  );
  const [gameReady, setGameReady] = useState(false);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [reset, setReset] = useState(false);
  const {
    gameState,
    gameDisplay,
    gameData,
    gameModifiers,
    gameVariables,
    fetchState,
  } = state;
  const { result, errors, loading } = fetchState;
  const { isOpen, content } = state.modalState;
  const { level, score, progressBarWidth } = gameState;
  const { displayedCountry, displayedOptions, displayedModifiers } =
    gameDisplay;
  const { multiplier, displayedCount, modifierInterval, timer } = gameVariables;
  const { availableCountries, availableRegions } = gameData;
  const { availableModifiers, appliedModifiers } = gameModifiers;
  // todo: modal

  // fetch data fron API
  useEffect(() => {
    const init = async () => {
      try {
        await setFetch(defaultFetch, dispatch);
        console.log("Data fetched successfully");
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
        console.log("Countries calibrated");
      };
      calibrate();
    }
    return () => {
      setGameReady(false);
      console.log("Game set to ready");
    };
  }, [availableRegions]);

  useEffect(() => {
    if (availableCountries && availableCountries.length > 0) {
      setGameReady(true);
    }
  }, [availableCountries]);

  useEffect(() => {
    if (gameReady && availableCountries && availableCountries.length > 0) {
      questionHandler(state, dispatch);
      console.log("Preparing next question");
    }
  }, [gameReady]);

  useEffect(() => {
    console.warn("Updated state", gameData, gameDisplay, gameModifiers);
  }, [state]);

  return (
    <>
      <div>
        <Countdown
          timer={timer}
          isCountingDown={isCountingDown}
          cb={handleCallback}
          reset={reset}
        />
        <button
          onClick={() => toggleCountdown(isCountingDown, setIsCountingDown)}
        >
          {isCountingDown ? "STOP" : "START"}
        </button>
        <button onClick={() => signalTimerReset}>RESET</button>
      </div>
      {progressBarWidth && (
        <ProgressBar progressBarWidth={progressBarWidth}></ProgressBar>
      )}
      <ScoreLevel score={score} level={level} />

      {displayedCountry && <Flag displayedCountry={displayedCountry}></Flag>}

      {displayedOptions && displayedOptions.length > 0 && (
        <MultipleChoices
          displayedOptions={displayedOptions}
          handleClick={(event) =>
            handleClick(
              event,
              state,
              dispatch,
              level,
              modifierInterval,
              timer,
              () => signalTimerReset(reset, setReset, setIsCountingDown) // Passing a function that calls signalTimerReset
            )
          }
        ></MultipleChoices>
      )}
      {isOpen && content && (
        <Modal
          modifiers={content}
          closeModal={() => closeModal(state, dispatch)}
          onModifierSelection={(selectedModifier) =>
            handleModifierSelection(selectedModifier, state, dispatch)
          }
        />
      )}
    </>
  );
}

export default FlagGame;
