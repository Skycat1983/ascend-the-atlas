import { useEffect, useReducer, useState } from "react";
import "@total-typescript/ts-reset";
import "../App.css";
import { testState, initialNullState, defaultFetch } from "../Utils/consts";
import rootReducer from "../reducers/rootReducer";
import {
  setFetch,
  setAvailableCountries,
  setDataAvailability,
  reconfigAvailability,
  setDisplayedOptions,
  setDisplayedCountry,
} from "../helpers";
import ProgressBar from "../Components/ProgressBar/ProgressBar";
import { RootState } from "../types/rootInterfaces";
import { answerHandler } from "../handlers/answerHandler";
import { prepNextQuestion } from "../handlers/questionHandler";
import MultipleChoices from "../Components/MultipleChoices/MultipleChoices";
import Flag from "../Components/Flag/Flag";
import {
  handleModifierSelection,
  modalHandler,
} from "../handlers/modalHandler";
import Countdown from "../Components/Countdown/Countdown";
import Modal from "../Components/Modal/Modal";
import ScoreLevel from "../Components/Score&Level/ScoreLevel";

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
      modalHandler(state, dispatch);
    } else {
      console.log("invalid answer ");
      // dispatch({ type: "INITIALISE_STATE", payload: testState });
      setButtonText("RESTART");
    }
    dispatch({ type: "SET_TIMER_INTERVAL", payload: timer });
    signalTimerReset();
    prepNextQuestion(state, dispatch);
  };

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

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
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
      {progressBarWidth && (
        <ProgressBar progressBarWidth={progressBarWidth}></ProgressBar>
      )}
      <ScoreLevel score={score} level={level} />

      {displayedCountry && <Flag displayedCountry={displayedCountry}></Flag>}

      {displayedOptions && displayedOptions.length > 0 && (
        <MultipleChoices
          displayedOptions={displayedOptions}
          handleClick={handleClick}
        ></MultipleChoices>
      )}
      {isOpen && content && (
        <Modal
          modifiers={content}
          closeModal={closeModal}
          onModifierSelection={(selectedModifier) =>
            handleModifierSelection(selectedModifier, dispatch)
          }
        />
      )}
    </>
  );
}

export default FlagGame;
