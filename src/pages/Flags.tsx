import React, { useEffect, useMemo, useReducer, useState } from "react";
import "@total-typescript/ts-reset";
import "../App.css";
import { testState, initialNullState, defaultFetch } from "../Utils/consts";
import Modal from "../Components/Modal";
import { getProgressBarColor } from "../Utils/getProgressBarColor";
import { gameStateReducer } from "../reducers/gameReducer";
import { gameVariablesReducer } from "../reducers/variablesReducer";
import { gameModifiersReducer } from "../reducers/modifiersReducer";
import { gameDisplayReducer } from "../reducers/displayReducer";
import { gameDataReducer } from "../reducers/dataReducer";
import { fetchReducer } from "../reducers/fetchReducer";
import { setFetch } from "../helpers/setFetch";
import { setAvailableCountries } from "../helpers/setAvailableCountries";
import { setDataAvailability } from "../helpers/setDataAvailability";
import { reconfigAvailability } from "../helpers/reconfigAvailability";
import { setDisplayedOptions } from "../helpers/setDisplayedOptions";
import { setDisplayedCountry } from "../helpers/setDisplayedCountry";
import ProgressBar from "../Components/ProgressBar/ProgressBar";
import { Country, RootState } from "../types/rootInterfaces";

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

function Flags() {
  // the reducer state with all its deconstructed values below
  const [state, dispatch] = useReducer(
    rootReducer,
    initialNullState as RootState
  );
  const [gameReady, setGameReady] = useState(false);
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

  // fetch data fron API
  useEffect(() => {
    const init = async () => {
      await setFetch(defaultFetch, dispatch);
      dispatch({ type: "INITIALISE_STATE", payload: testState });
    };
    init();
  }, []);

  // set available countries after initialisation, and after change of availableRegions
  useEffect(() => {
    console.log(result);
    if (result && result.length > 0) {
      const calibrate = async () => {
        await setAvailableCountries(state, dispatch);
        setGameReady(true);
      };
      calibrate();
      setGameReady(true);
    }

    return () => {
      setGameReady(false);
    };
  }, [result, availableRegions]);

  useEffect(() => {
    if (gameReady) {
      const getNext = async () => {
        const getDisplayOptions = await setDisplayedOptions(state, dispatch);
        const getDisplayCountry = await setDisplayedCountry(
          {
            ...state,
            gameDisplay: {
              ...state.gameDisplay,
              displayedOptions: getDisplayOptions,
            },
          },
          dispatch
        );
        await reconfigAvailability(
          {
            ...state,
            gameDisplay: {
              ...state.gameDisplay,
              displayedCountry: getDisplayCountry,
            },
          },
          dispatch
        );
      };
      getNext();
    }
  }, [gameReady]);

  const handleClick = (e: any) => {
    setGameReady(false);
    // correct answer given
    if (displayedCountry !== null) {
      if (e.target.innerText === displayedCountry.name.common) {
        dispatch({
          type: "SET_SCORE",
          payload: (score + 3) * multiplier,
        });
        // increase the level
        dispatch({ type: "INCREMENT_LEVEL", payload: level + 1 });
      } else {
        // wrong answer given
        dispatch({ type: "INITIALISE_STATE", payload: testState });
      }
    }
  };

  useEffect(() => {
    console.log("displayedCountry :>> ", displayedCountry);
    // console.warn(
    //   // "fetchstate :>> ",
    //   // state.fetchState,
    //   "gamestate :>> ",
    //   state.gameState,
    //   "gamedisplay :>> ",
    //   state.gameDisplay,
    //   "gamedata :>> ",
    //   state.gameData
    //   // "gamemodifiers :>> ",
    //   // state.gameModifiers,
    //   // "gamevariables :>> ",
    //   // state.gameVariables
    // );
  }, [displayedCountry]);

  return (
    <>
      <div>
        Level: {level} Score: {score}
      </div>
      {progressBarWidth && (
        <ProgressBar
          progressBarWidth={progressBarWidth}
          interval={state.gameVariables.modifierInterval}
          level={level}
        ></ProgressBar>
      )}

      <div className="flag-container">
        {displayedCountry && (
          <img
            key={displayedCountry.cca3}
            src={displayedCountry.flags.png}
            alt={displayedCountry.name.common}
            // className={`${displayedCountry.classname}`}
          />
        )}
      </div>

      <div className="buttons-container">
        {displayedOptions &&
          displayedOptions.map((country: Country, index: number) => {
            // const modifiedCountry = applyModifiers(country);
            return (
              // <>
              <button key={country.cca3} onClick={handleClick}>
                {displayedOptions[index].name.common}
              </button>
              // </>
            );
          })}
      </div>
    </>
  );
}

export default Flags;

// todo: add css image flip for new country
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
