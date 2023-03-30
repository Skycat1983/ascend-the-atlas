import React from "react";

//!---- these modifiers are for the flag ----!//

export const upsideDownFlagModifier = {
  name: "Southern Hemisphere",
  description: "The flag displayed has a chance to be upside down",
  multiplier: 3,
  url: "https://img.icons8.com/color/512/sun-star.png",
  target: "displayedCountry",
  apply: (country: any) => {
    const modifiedCountry = { ...country };
    if (Math.random() < 1 / 1) {
      if (!modifiedCountry.classname) {
        modifiedCountry.classname = "";
      }

      console.log("Upside-down flag for", modifiedCountry.name.common);
      let cssTag = "flag-flip";
      modifiedCountry.classname += cssTag + " ";
      console.log("modifiedCountry", modifiedCountry);
    }
    return modifiedCountry;
  },
};

export const sidewaysFlagModifier = {
  name: "Portait",
  description: "The flag displayed has a chance to be sideways",
  multiplier: 3,
  url: "https://img.icons8.com/color/512/portrait.png",
  target: "displayedCountry",
  apply: (country: any) => {
    const modifiedCountry = { ...country };
    if (Math.random() < 1 / 1) {
      if (!modifiedCountry.classname) {
        modifiedCountry.classname = "";
      }
      console.log("Upside-down flag for", modifiedCountry.name.common);
      let cssTag = "flag-rotate";
      modifiedCountry.classname += cssTag + " ";
      console.log("modifiedCountry", modifiedCountry);
    }
    return modifiedCountry;
  },
};

export const colourlessFlagModifier = {
  name: "Colourblind",
  description: "The flag displayed has a chance to have colours swapped",
  multiplier: 2,
  url: "https://img.icons8.com/color/512/glasses-case.png",
  target: "displayedCountry",
  apply: (country: any) => {
    const modifiedCountry = { ...country };
    if (Math.random() < 1 / 1) {
      if (!modifiedCountry.classname) {
        modifiedCountry.classname = "";
      }

      console.log("Upside-down flag for", modifiedCountry.name.common);
      let cssTag = "flag-greyscale";
      modifiedCountry.classname += cssTag + " ";
      console.log("modifiedCountry", modifiedCountry);
    }
    return modifiedCountry;
  },
};

export const mirrorHorizontalModifier = {
  name: "Shard Slice",
  description: "The flag displayed will be mirrored horizontally",
  multiplier: 4,
  url: "https://img.icons8.com/fluency/512/mirror.png",
  target: "displayedCountry",
  apply: (country: any) => {
    const modifiedCountry = { ...country };
    if (Math.random() < 1 / 1) {
      if (!modifiedCountry.classname) {
        modifiedCountry.classname = "";
      }

      console.log("Upside-down flag for", modifiedCountry.name.common);
      let cssTag = "mirror-horizontal";
      modifiedCountry.classname += cssTag + " ";
      console.log("modifiedCountry", modifiedCountry);
    }
    return modifiedCountry;
  },
};

export const mirrorVerticalModifier = {
  name: "Shard Slash",
  description: "The flag displayed will be mirrored vertically",
  multiplier: 4,
  url: "https://img.icons8.com/color/512/mirror.png",
  target: "displayedCountry",
  apply: (country: any) => {
    const modifiedCountry = { ...country };
    if (Math.random() < 1 / 1) {
      if (!modifiedCountry.classname) {
        modifiedCountry.classname = "";
      }

      console.log("Upside-down flag for", modifiedCountry.name.common);
      let cssTag = "mirror-vertical";
      modifiedCountry.classname += cssTag + " ";
      console.log("modifiedCountry", modifiedCountry);
    }
    return modifiedCountry;
  },
};

export const flagDescription = {
  name: "Bookworm",
  description: "The flag has a chance to be text-based",
  url: "https://img.icons8.com/external-flat-icons-pack-pongsakorn-tan/512/external-apple-back-to-school-flat-icons-pack-pongsakorn-tan.png",
  target: "displayedCountry",
  apply: (country: any) => {
    if (Math.random() < 1 / 5) {
      const words = country.flags.alt.split(" ");
      const censoredWords = words.map((word: any) =>
        /[A-Z]/.test(word) ? "[censored]" : word
      );
      const censoredDescription = censoredWords.join(" ");
      console.log("Censored flag description for", country.name.common);
      return {
        ...country,
        flags: { ...country.flags, alt: censoredDescription },
      };
    }
    return country;
  },
};

//!---- these modifiers are for the country names ----!//

export const differentLanguageNameModifier = {
  name: "Phrasebook",
  descripotion: "The country name has a chance to be in a different language",
  multiplier: 5,
  url: "https://img.icons8.com/color/512/translate-text.png",
  target: "displayedOptions",
  apply: (country: any) => {
    if (Math.random() < 1 / 20) {
      const translations = country.translations;
      const translationKeys = Object.keys(translations);
      const randomTranslationKey =
        translationKeys[Math.floor(Math.random() * translationKeys.length)];
      const randomTranslation = translations[randomTranslationKey];

      // Replace the country name with a name in a different language
      console.log("Different language name for", country.name.common);
      country.name.common = randomTranslation.common;
    }
    return country;
  },
};

function shuffleString(str: string): string {
  const arr = str.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

export const mixUpLettersModifier = {
  name: "Scrabble piece",
  description: "the country name has a chance to be mixed up",
  multiplier: 3,
  url: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-scrabble-edutainment-flaticons-lineal-color-flat-icons.png",
  target: "displayedOptions",
  apply: (country: any) => {
    if (Math.random() < 1 / 20) {
      // Shuffle the letters of the country's name
      console.log("Mixed up letters for", country.name.common);
      country.name.common = shuffleString(country.name.common);
    }
    return country;
  },
};

export const showCapitalCityInsteadModifier = {
  name: "Souvenir",
  description:
    "the country name has a chance to be replaced with the capital city",
  multiplier: 5,
  url: "https://img.icons8.com/external-prettycons-lineal-color-prettycons/512/external-souvenir-travel-prettycons-lineal-color-prettycons.png",
  target: "displayedOptions",
  apply: (country: any) => {
    if (Math.random() < 1 / 20) {
      // Replace the country name with the capital city
      console.log(
        "Capital city instead of country name for",
        country.name.common
      );
      country.name.common = country.capital[0]; // Assuming capital is an array
    }
    return country;
  },
};

//!---- these mods affect the state

export const addAll = {
  name: "Globe",
  description: "add all countries to the multiple choice options",
  multiplier: 10,
  url: "https://img.icons8.com/plasticine/512/globe-earth.png",
  target: "state",
  case: "SET_AVAILABLE_REGIONS",
  payload: (state: any) => state.unavailableRegions,
};

export const addOneOption = {
  name: "Journal",
  description: "add an extra country to the multiple choice options",
  multiplier: 3,
  url: "https://img.icons8.com/fluency/512/journal.png",
  target: "state",
  case: "SET_MULTIPLE_CHOICE_COUNT",
  payload: (state: any) => state.optionsCount + 1,
};

export const minusOneOption = {
  name: "Journal",
  description: "add an extra country to the multiple choice options",
  target: "state",
  case: "SET_MULTIPLE_CHOICE_COUNT",
  payload: (state: any) => state.optionsCount - 1,
};

const createRegionModifier = (
  name: string,
  description: string,
  // multiplier: number,
  region: string,
  url: string
  // multiplier: number
) => ({
  name,
  description,
  target: "state",

  multiplier: 3,
  case: "SET_AVAILABLE_REGIONS",
  payload: (state: any) => [...state.availableRegions, region],
});

export const addCaribbean = createRegionModifier(
  "Seashell",
  "add Caribbean countries to the multiple choice options",
  "Caribbean",
  "https://img.icons8.com/officel/512/shellfish.png"
);
export const addSouthAmerica = createRegionModifier(
  "Pan Flute",
  "add South America countries to the multiple choice options",
  "South America",
  "https://img.icons8.com/external-bearicons-outline-color-bearicons/512/external-Flute-indonesia-bearicons-outline-color-bearicons.png"
);
export const addSouthernAfrica = createRegionModifier(
  "Drum",
  "add Southern Africa countries to the multiple choice options",
  "Southern Africa",
  "https://img.icons8.com/fluency/512/tabal.png"
);
export const addWesternAfrica = createRegionModifier(
  "Kente Cloth",
  "add Western Africa countries to the multiple choice options",
  "Western Africa",
  "https://img.icons8.com/fluency/512/clothes.png"
);
export const addMelanesia = createRegionModifier(
  "Boomerang",
  "add Melanesia countries to the multiple choice options",
  "Melanesia",
  "https://img.icons8.com/color/512/boomerang.png"
);
export const addPolynesia = createRegionModifier(
  "Tiki Statue",
  "add Polynesia countries to the multiple choice options",
  "Polynesia",
  "https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-statue-museum-flaticons-flat-flat-icons.png"
);
export const addWesternAsia = createRegionModifier(
  "Oil Lamp",
  "add Western Asia countries to the multiple choice options",
  "Western Asia",
  "https://img.icons8.com/external-dreamcreateicons-outline-color-dreamcreateicons/512/external-oil-lamp-autumn-season-dreamcreateicons-outline-color-dreamcreateicons.png"
);
export const addSouthernAsia = createRegionModifier(
  "Buddha Statue",
  "add Southern Asia countries to the multiple choice options",
  "Southern Asia",
  "https://img.icons8.com/plasticine/512/buddha.png"
);
export const addCentralAmerica = createRegionModifier(
  "Obsidian",
  "add Central America countries to the multiple choice options",
  "Central America",
  "https://img.icons8.com/doodle/512/obsidian.png"
);
export const addSoutheastAsia = createRegionModifier(
  "Rice Paddle",
  "add South-Eastern Asia countries to the multiple choice options",
  "South-Eastern Asia",
  "https://img.icons8.com/color/512/rice-bowl.png"
);
export const addNorthernAfrica = createRegionModifier(
  "Pyramid",
  "add Northern Africa countries to the multiple choice options",
  "Northern Africa",
  "https://img.icons8.com/external-icongeek26-flat-icongeek26/512/external-pyramid-landmarks-icongeek26-flat-icongeek26.png"
);
export const addEasternAfrica = createRegionModifier(
  "Maasai Beads",
  "add Eastern Africa countries to the multiple choice options",
  "Eastern Africa",
  "https://img.icons8.com/external-filled-line-kendis-lasman/512/external-prayer-beads-islamic-flat-icon-filled-line-kendis-lasman.png"
);
export const addMiddleAfrica = createRegionModifier(
  "Gorilla Figurine",
  "add Middle Africa countries to the multiple choice options",
  "Middle Africa",
  "https://img.icons8.com/fluency/512/harambe-the-gorilla.png"
);
export const addEasternAsia = createRegionModifier(
  "Tea Set",
  "add Eastern Asia countries to the multiple choice options",
  "Eastern Asia",
  "https://img.icons8.com/emoji/512/hot-beverage.png"
);
export const addMicronesia = createRegionModifier(
  "Coral",
  "add Micronesia countries to the multiple choice options",
  "Micronesia",
  "https://img.icons8.com/external-icongeek26-flat-icongeek26/512/external-coral-sea-life-icongeek26-flat-icongeek26.png"
);
export const addCentralAsia = createRegionModifier(
  "Yurt Model",
  "add Central Asia countries to the multiple choice options",
  "Central Asia",
  "https://img.icons8.com/external-others-pike-picture/512/external-Yurt-house-others-pike-picture.png"
);

//----

// export const addWesternEurope = createRegionModifier(
//   "Eiffel Tower",
//   "add Western Europe countries to the multiple choice options",
//   "Western Europe"
// );

// export const addSouthernEurope = createRegionModifier(
//   "Olive Branch",
//   "add Southern Europe countries to the multiple choice options",
//   "Southern Europe"
// );

// export const addSoutheastEurope = createRegionModifier(
//   "Amphora",
//   "add Southeast Europe countries to the multiple choice options",
//   "Southeast Europe"
// );

// export const addNorthernEurope = createRegionModifier(
//   "Viking Helmet",
//   "add Northern Europe countries to the multiple choice options",
//   "Northern Europe"
// );

// export const addCentralEurope = createRegionModifier(
//   "Cuckoo Clock",
//   "add Central Europe countries to the multiple choice options",
//   "Central Europe"
// );

// export const addAustraliaNewZealand = createRegionModifier(
//   "Boomerang",
//   "add Australia and New Zealand countries to the multiple choice options",
//   "Australia and New Zealand"
// );

// export const addEasternEurope = createRegionModifier(
//   "Matryoshka Doll",
//   "add Eastern Europe countries to the multiple choice options",
//   "Eastern Europe"
// );

// export const addNorthAmerica = createRegionModifier(
//   "Statue of Liberty",
//   "add North America countries to the multiple choice options",
//   "North America"
// );
