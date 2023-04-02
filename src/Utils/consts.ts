import * as from from "./types";

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
} from "../Modifiers/perksAndPenalties";

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

export const initialNullState = {
  fetchState: {
    result: null,
    error: null,
    loading: null,
  },
  gameState: {
    level: null,
    score: null,
    progressBarWidth: null,
  },
  gameDisplay: {
    displayedCountry: null,
    displayedOptions: null,
    displayedModifiers: null,
  },
  gameData: {
    availableCountries: null,
    availableRegions: null,
    unavailableCountries: null,
    unavailableRegions: null,
  },
  gameModifiers: {
    availableModifiers: null,
    appliedModifiers: null,
  },
  gameVariables: {
    multiplier: null,
    displayedCount: null,
    modifierInterval: null,
  },
};

export const testState = {
  gameVariables: {
    multiplier: 1,
    displayedCount: 2,
    modifierInterval: 2,
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
    progressBarWidth: null,
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
