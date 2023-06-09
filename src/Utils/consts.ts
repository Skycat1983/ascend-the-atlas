import * as from from "../types/authAndFormTypes";

import {
  //! FLAGS
  upsideDownFlagModifier,
  flagDescription,
  sidewaysFlagModifier,
  colourlessFlagModifier,
  //! COUNTRY NAMES
  showCapitalCityInsteadModifier,
  mixUpLettersModifier,
  differentLanguageNameModifier,
  //! STATE
  addAll,
  addOneOption,
  addCaribbean,
  addSouthAmerica,
  addSouthernAfrica,
  addWesternAfrica,
  addMelanesia,
  addPolynesia,
  addWesternAsia,
  addSouthernAsia,
  addCentralAmerica,
  addSoutheastAsia,
  addNorthernAfrica,
  addEasternAfrica,
  addMiddleAfrica,
  addEasternAsia,
  addMicronesia,
  addCentralAsia,
} from "../modifiers/penalties";
import { ReducerState } from "react";
import { RootState } from "../types/rootInterfaces";

export const defaultFetch =
  "https://restcountries.com/v3.1/independent?status=true&fields=area,capital,cca3,flags,independent,landlocked,languages,name,population,region,subregion,timezone,translations";
export const fakeAccount = {
  email: "heron@email.com",
  username: "heron",
};

export const defaultContext = {
  user: null,
  logIn: () => {},
  logOut: () => {},
  signUp: (email: string, password: string) => {},
};

export const allSubregions = [
  "Caribbean",
  "South America",
  "Southern Africa",
  "Western Africa",
  "Melanesia",
  "Polynesia",
  "Western Europe",
  "Southern Europe",
  "Western Asia",
  "Southern Asia",
  "Central America",
  "South-Eastern Asia",
  "Southeast Europe",
  "Northern Europe",
  "Northern Africa",
  "Central Europe",
  "Eastern Africa",
  "Middle Africa",
  "Australia and New Zealand",
  "Eastern Asia",
  "Eastern Europe",
  "Micronesia",
  "Central Asia",
  "North America",
];

export const initAvailableRegions = [
  "Western Europe",
  "Southern Europe",
  "Southeast Europe",
  "Northern Europe",
  "Central Europe",
  "Australia and New Zealand",
  "Eastern Europe",
  "North America",
];

export const initUnavailableRegions = [
  "Caribbean",
  "South America",
  "Southern Africa",
  "Western Africa",
  "Melanesia",
  "Polynesia",
  "Western Asia",
  "Southern Asia",
  "Central America",
  "South-Eastern Asia",
  "Northern Africa",
  "Eastern Africa",
  "Middle Africa",
  "Eastern Asia",
  "Micronesia",
  "Central Asia",
];

export const initialNullState: RootState = {
  fetchState: {
    result: null,
    errors: null,
    loading: false,
  },
  modalState: {
    isOpen: false,
    content: null,
  },

  gameState: {
    level: 1,
    score: 0,
    progressBarWidth: 0,
  },
  gameDisplay: {
    displayedCountry: null,
    displayedOptions: [],
    displayedModifiers: [],
  },
  gameData: {
    availableCountries: [],
    availableRegions: [],
    unavailableCountries: [],
    unavailableRegions: [],
  },
  gameModifiers: {
    availableModifiers: [],
    unavailableModifiers: [],
    appliedModifiers: [],
  },
  gameVariables: {
    multiplier: 1,
    displayedCount: 0,
    modifierInterval: 0,
    timer: 5,
  },
};

export const testState = {
  gameVariables: {
    multiplier: 1,
    displayedCount: 2,
    modifierInterval: 5,
    timer: 5,
  },
  gameData: {
    availableRegions: initAvailableRegions,
    unavailableRegions: initUnavailableRegions,
    availableCountries: [],
    unavailableCountries: [],
    fetchResult: null,
  },
  gameDisplay: {
    displayedCountry: null,
    displayedOptions: [],
    displayedModifiers: [],
  },
  gameModifiers: {
    appliedModifiers: [],
    unavailableModifiers: [],
    availableModifiers: [
      //! flags
      upsideDownFlagModifier,
      flagDescription,
      sidewaysFlagModifier,
      colourlessFlagModifier,
      //! options
      showCapitalCityInsteadModifier,
      mixUpLettersModifier,
      differentLanguageNameModifier,
      //! state
      addAll,
      addOneOption,
      // addCaribbean,
      // addSouthAmerica,
      // addSouthernAfrica,
      // addWesternAfrica,
      // addMelanesia,
      // addPolynesia,
      // addWesternAsia,
      // addSouthernAsia,
      // addCentralAmerica,
      // addSoutheastAsia,
      // addNorthernAfrica,
      // addEasternAfrica,
      // addMiddleAfrica,
      // addEasternAsia,
      // addMicronesia,
      // addCentralAsia,
    ],
  },
  gameState: {
    level: 1,
    score: 0,
    progressBarWidth: 0,
    // isModalOpen: false,
    // relics: [],
  },
  fetchState: {
    result: null,
    errors: null,
    loading: false,
  },
};

export const initialFormState = {
  email: "",
  password: "",
};

export const validation = {
  email: (value: string) => {
    if (!value) {
      return "Email is required";
    }
    return "";
  },
  password: (value: string) => {
    if (!value) {
      return "Password is required";
    }
    return "";
  },
};

export const onSubmit = (state: from.FormState) => {
  // signUp(state.email, state.password);
  console.log(state);
};
