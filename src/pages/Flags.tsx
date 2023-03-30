import React, { useEffect, useMemo, useReducer, useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import getRndInt from "../Utils/getRndInt";
import "../App.css";
import { initialState } from "../Utils/consts";
import Modal from "../Components/Modal";
import { getProgressBarColor } from "../Utils/getProgressBarColor";

//todo: split reducer into multiple reducers. perhaps gameState, gameVariables, gameModifiers, countryData, ModalState etc

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INCREMENT_LEVEL":
      return { ...state, level: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    case "SET_MULTIPLIER":
      return { ...state, multiplier: action.payload };
    case "SET_DISPLAYED_COUNTRY":
      return { ...state, displayedCountry: action.payload };
    case "SET_MULTIPLE_CHOICE_OPTIONS":
      return { ...state, displayedOptions: action.payload };
    case "SET_MULTIPLE_CHOICE_COUNT":
      return { ...state, optionsCount: action.payload };
    case "SET_AVAILABLE_REGIONS":
      return { ...state, availableRegions: action.payload };
    case "SET_UNAVAILABLE_REGIONS":
      return { ...state, unavailableRegions: action.payload };
    case "SET_AVAILABLE_COUNTRIES":
      return { ...state, availableCountries: action.payload };
    case "SET_UNAVAILABLE_COUNTRIES":
      return { ...state, unavailableCountries: action.payload };
    case "INCREMENT_NEW_MODIFIER_INTERVAL":
      return { ...state, modifierInterval: action.payload };
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalOpen: action.payload,
        selectedModifiers: action.modifiers || [],
      };
    case "ADD_APPLIED_MODIFIER":
      return {
        ...state,
        appliedModifiers: [...state.appliedModifiers, action.payload],
      };
    case "SET_POSSIBLE_MODIFIERS":
      return { ...state, availableModifiers: action.payload };
    case "REMOVE_MODIFIER":
      const newModifiers = state.availableModifiers.filter(
        (modifier: any) => modifier !== action.payload
      );
      return { ...state, availableModifiers: newModifiers };
    case "SET_RELICS":
      return { ...state, relics: action.payload };
    case "RESET":
      return {
        // ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

function Flags() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [progressBarWidth, setProgressBarWidth] = useState("0%");
  const { result, error, loading } = useFetch<any>(
    "https://restcountries.com/v3.1/independent?status=true&fields=area,capital,cca3,flags,independent,landlocked,languages,name,population,region,subregion,timezone,translations"
  );

  useMemo(() => {
    if (result) {
      let availableCountries: any[] = [];
      // now we loop through the results and get the countries that are in the available regions
      for (let i = 0; i < result.length; i++) {
        if (state.availableRegions.includes(result[i].subregion)) {
          availableCountries.push(result[i]);
        }
      }
      let fileredCountries = availableCountries.filter(
        (country) => !state.unavailableCountries.includes(country.cca3)
      );
      console.log("filteredCountries", fileredCountries);
      dispatch({
        type: "SET_AVAILABLE_COUNTRIES",
        payload: fileredCountries,
      });
    }
  }, [result, state.availableRegions, state.unavailableCountries]);

  useEffect(() => {
    if (state.level > 1 && (state.level - 1) % state.modifierInterval === 0) {
      console.log("Event triggered");
      getNext();

      dispatch({
        type: "TOGGLE_MODAL",
        payload: true,
      });
      setProgressBarWidth("0%");
    } else {
      const progress =
        ((state.level - 1) % state.modifierInterval) / state.modifierInterval;
      setProgressBarWidth(progress * 100 + "%"); // Add the percentage sign here
      getNext();
    }
  }, [state.level, state.modifierInterval]);

  const getNext = async () => {
    if (result) {
      let availableChoices: any[] = [];
      for (let i = 0; i < state.optionsCount; i++) {
        let random = getRndInt(0, state.availableCountries.length);
        let country = state.availableCountries[random];
        // if the country is already in the unavailable countries array we will skip it
        if (country && !state.unavailableCountries.includes(country.cca3)) {
          availableChoices.push(country);
        } else {
          i--;
          continue;
        }
      }
      // apply modifiers
      availableChoices = availableChoices.map((country) => {
        return state.appliedModifiers.reduce((acc: any, modifier: any) => {
          return modifier.apply(acc);
        }, country);
      });

      dispatch({
        type: "SET_MULTIPLE_CHOICE_OPTIONS",
        payload: availableChoices,
      });

      let shownFlag = getRndInt(0, state.optionsCount - 1);
      console.log("shownFlag", shownFlag);
      dispatch({
        type: "SET_DISPLAYED_COUNTRY",
        payload: availableChoices[shownFlag],
      });
    }
  };

  useEffect(() => {
    getNext();
  }, [result, state.optionsCount]);

  const handleClick = (e: any) => {
    // correct answer given
    if (e.target.innerText === state.displayedCountry.name.common) {
      // remove the state.displayedCountry from the availableCountries array...
      dispatch({
        type: "SET_UNAVAILABLE_COUNTRIES",
        payload: [...state.unavailableCountries, state.displayedCountry.cca3],
      });
      // ...and add it to the unavailableCountries array
      dispatch({
        type: "SET_AVAILABLE_COUNTRIES",
        payload: state.availableCountries.filter(
          (country: any) => country.cca3 !== state.displayedCountry.cca3
        ),
      });
      // increase the score
      dispatch({
        type: "SET_SCORE",
        payload: (state.score + 3) * state.multiplier,
      });
      // increase the level
      dispatch({ type: "INCREMENT_LEVEL", payload: state.level + 1 });
    } else {
      // wrong answer given
      dispatch({ type: "RESET" });
      getNext();
    }
  };

  const handleModifierSelection = async (modifier: any) => {
    if (modifier.target === "state") {
      const payload =
        typeof modifier.payload === "function"
          ? modifier.payload(state)
          : modifier.payload;
      dispatch({
        type: modifier.case,
        payload: payload,
      });
    } else {
      dispatch({
        type: "TOGGLE_MODAL",
        payload: true,
      });

      dispatch({
        type: "ADD_APPLIED_MODIFIER",
        payload: modifier,
      });
    }
    dispatch({
      type: "SET_MULTIPLIER",
      payload: state.multiplier + modifier.multiplier,
    });
    dispatch({
      type: "SET_RELICS",
      payload: [...state.relics, modifier.url],
    });
    dispatch({
      type: "REMOVE_MODIFIER",
      payload: modifier,
    });
  };

  const applyModifiers = (country: any) => {
    // console.warn(country, state.appliedModifiers);
    if (state.appliedModifiers.length > 0) {
      console.log("we have modifiers for options");

      let modifiedCountry = { ...country };
      state.appliedModifiers.forEach((modifier: any) => {
        modifiedCountry = modifier.apply(modifiedCountry);
      });
      return modifiedCountry;
    } else {
      return country; // Add this line to return the original country object when there are no applied modifiers
    }
  };

  return (
    <>
      <div>
        Level: {state.level} Score: {state.score}
      </div>
      <div className="relic-container">
        {state.relics.map((relic: any, index: number) => {
          return <img src={relic} alt="relic" key={index} className="relic" />;
        })}
      </div>

      <div className="progress-bar-container">
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
      </div>

      <div className="flag-container">
        {state.displayedCountry && (
          <img
            src={state.displayedCountry.flags.png}
            alt={state.displayedCountry.name.common}
            className={`${state.displayedCountry.classname}`}
          />
        )}
      </div>

      <div className="buttons-container">
        {state.displayedCountry &&
          state.displayedOptions.map((country: any, index: number) => {
            const modifiedCountry = applyModifiers(country);
            return (
              <React.Fragment key={`${modifiedCountry.cca3}-${index}`}>
                <button className="country-button" onClick={handleClick}>
                  {modifiedCountry.name.common}
                </button>
              </React.Fragment>
            );
          })}

        <Modal
          isOpen={state.isModalOpen}
          closeModal={() => dispatch({ type: "TOGGLE_MODAL", payload: false })}
          onModifierSelection={handleModifierSelection}
          availableModifiers={state.availableModifiers}
        />
      </div>
    </>
  );
}

export default Flags;
