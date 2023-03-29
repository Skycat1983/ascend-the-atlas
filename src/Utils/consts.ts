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

export const fakeAccount = {
  email: "heron@email.com",
  username: "heron",
};

export const defaultContext = {
  user: null,
  logIn: () => {},
  logOut: () => {},
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

export const initialState = {
  level: 1,
  score: 0,
  multiplier: 1,
  displayedCountry: null,
  displayedOptions: [],
  optionsCount: 2,
  availableRegions: initAvailableRegions,
  unavailableRegions: initUnavailableRegions,
  availableCountries: [],
  unavailableCountries: [],
  isModalOpen: false,
  modifierInterval: 2,
  appliedModifiers: [],
  possibleModifiers: [
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
};

// export const initialState = {
//   level: 1,
//   score: 0,
//   correctAnswers: [],
//   displayed: null,
//   countries: [],
//   optionsCount: 2,
//   isModalOpen: false,
//   appliedModifiers: [],
//   possibleModifiers: [
//     showCapitalCityInsteadModifier,
//     mixUpLettersModifier,
//     differentLanguageNameModifier,
//   ],
// };
