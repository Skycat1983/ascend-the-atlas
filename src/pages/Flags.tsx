import React, { useEffect, useReducer, useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import getRndInt from "../Utils/getRndInt";
import "../App.css";
import Flag from "../Components/Flag";
import Modal from "../Components/Modal";
import {
  showCapitalCityInsteadModifier,
  mixUpLettersModifier,
  differentLanguageNameModifier,
} from "../Modifiers/perksAndPenalties";

type Props = {};

const initialState = {
  level: 1,
  score: 0,
  correctAnswers: [],
  displayed: null,
  countries: [],
  optionsCount: 2,
  isModalOpen: false,
  appliedModifiers: [],
  possibleModifiers: [
    showCapitalCityInsteadModifier,
    mixUpLettersModifier,
    differentLanguageNameModifier,
  ],
};

//todo: split reducer into multiple reducers. perhaps gameState, gameVariables, gameModifiers, countryData, ModalState etc

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INCREMENT_LEVEL":
      return { ...state, level: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    case "REMOVE_ANSWERS":
      return { ...state, correctAnswers: action.payload };
    case "SET_DISPLAYED_FLAG":
      return { ...state, displayed: action.payload };
    case "SET_MULTIPLE_CHOICE_OPTIONS":
      return { ...state, countries: action.payload };
    case "SET_MULTIPLE_CHOICE_COUNT":
      return { ...state, optionsCount: action.payload };
    case "ADD_APPLIED_MODIFIER":
      return {
        ...state,
        appliedModifiers: [...state.appliedModifiers, action.payload],
      };

    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalOpen: action.payload,
        selectedModifiers: action.modifiers || [],
      };
    case "SET_SELECTED_MODIFIER":
      return { ...state, selectedModifiers: action.payload };
    case "SWITCH_MODIFIER":
      return { ...state, selectedModifiers: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function Flags({}: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { result, error, loading } = useFetch<any>(
    "https://restcountries.com/v3.1/independent?status=true"
  );

  const getNext = async () => {
    let availableChoices: any[] = [];
    const fetchCountries = async () => {
      for (let i = 0; i < state.optionsCount; i++) {
        let random = getRndInt(0, result.length);
        console.log("random in countries", random);
        let country = result[random];
        if (state.correctAnswers.includes(country.cca3)) {
          i--;
          continue;
        }
        availableChoices.push(country);
      }
    };
    await fetchCountries();
    dispatch({
      type: "SET_MULTIPLE_CHOICE_OPTIONS",
      payload: availableChoices,
    });

    let shownFlag = getRndInt(0, state.optionsCount - 1);
    console.log("shownFlag", shownFlag);
    dispatch({
      type: "SET_DISPLAYED_FLAG",
      payload: availableChoices[shownFlag],
    });
  };

  useEffect(() => {
    getNext();
  }, [result, state.optionsCount]);

  useEffect(() => {
    const eventInterval = 5;
    if (state.level > 1 && (state.level - 1) % eventInterval === 0) {
      console.log("Event triggered");
      dispatch({
        type: "TOGGLE_MODAL",
        payload: true,
      });
    } else {
      getNext();
    }
  }, [state.level]);

  const handleClick = (e: any) => {
    if (e.target.innerText === state.displayed.name.common) {
      console.log("correct");
      dispatch({
        type: "REMOVE_ANSWERS",
        payload: [...state.correctAnswers, state.displayed.cca3],
      });
      if (state.displayed.continents[0] === "Europe") {
        dispatch({ type: "SET_SCORE", payload: state.score + 4 });
      } else {
        dispatch({ type: "SET_SCORE", payload: state.score + 5 });
      }
      dispatch({ type: "INCREMENT_LEVEL", payload: state.level + 1 });
    } else {
      console.log("wrong");
      dispatch({ type: "RESET" });
    }
  };

  const handleModifierSelection = async (modifier: any) => {
    dispatch({
      type: "SET_MULTIPLE_CHOICE_COUNT",
      payload: state.optionsCount + 1,
    });
    dispatch({
      type: "TOGGLE_MODAL",
      payload: true,
    });
    dispatch({
      type: "ADD_APPLIED_MODIFIER",
      payload: modifier,
    });
  };

  const applyModifiers = (country: any) => {
    let modifiedCountry = { ...country };
    state.appliedModifiers.forEach((modifier: any) => {
      modifiedCountry = modifier.apply(modifiedCountry);
    });
    return modifiedCountry;
  };

  console.log(state.countries);
  console.log("state", state);

  return (
    <>
      <div>
        Level: {state.level} Score: {state.score}
      </div>
      <div className="flag-container">
        {state.displayed && (
          <img
            src={state.displayed.flags.png}
            alt={state.displayed.name.common}
          />
        )}
      </div>

      <div className="buttons-container">
        {state.displayed &&
          state.countries.map((country: any) => {
            const modifiedCountry = applyModifiers(country);
            return (
              <React.Fragment key={modifiedCountry.cca3}>
                <button className="country-button" onClick={handleClick}>
                  {modifiedCountry.name.common}
                </button>
              </React.Fragment>
            );
          })}
        {/* {state.displayed &&
          state.countries.map((country: any) => {
            return (
              <React.Fragment key={country.cca3}>
                <button className="country-button" onClick={handleClick}>
                  {country.name.common}
                </button>
              </React.Fragment>
            );
          })} */}
        <Modal
          isOpen={state.isModalOpen}
          closeModal={() => dispatch({ type: "TOGGLE_MODAL", payload: false })}
          onModifierSelection={handleModifierSelection}
          possibleModifiers={state.possibleModifiers}
        />
      </div>
    </>
  );
}

export default Flags;
