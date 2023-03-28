import React from "react";

//!---- these modifiers are for the flag ----!//

export const upsideDownFlagModifier = (country: any) => {
  if (Math.random() < 1 / 5) {
    // Apply the upside-down flag effect (e.g., by flipping the image)
    console.log("Upside-down flag for", country.name.common);
  }
  return country;
};

// export const flagDescription = (country: any) => {
//   if (Math.random() < 1 / 5) {
//     const words = country.flags.alt.split(" ");
//     const censoredWords = words.map((word) =>
//       /[A-Z]/.test(word) ? "[censored]" : word
//     );
//     const censoredDescription = censoredWords.join(" ");
//     console.log("Censored flag description for", country.name.common);
//     return {
//       ...country,
//       flags: { ...country.flags, alt: censoredDescription },
//     };
//   }
//   return country;
// };

//!---- these modifiers are for the country names ----!//

// export const differentLanguageNameModifier = (country: any) => {
//   if (Math.random() < 1 / 20) {
//     const translations = country.translations;
//     const translationKeys = Object.keys(translations);
//     const randomTranslationKey =
//       translationKeys[Math.floor(Math.random() * translationKeys.length)];
//     const randomTranslation = translations[randomTranslationKey];

//     // Replace the country name with a name in a different language
//     console.log("Different language name for", country.name.common);
//     country.name.common = randomTranslation.common;
//   }
//   return country;
// };

export const differentLanguageNameModifier = {
  name: "Different Language Name",
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

// export const mixUpLettersModifier = (country: any) => {
//   if (Math.random() < 1 / 20) {
//     // Shuffle the letters of the country's name
//     console.log("Mixed up letters for", country.name.common);
//     country.name.common = shuffleString(country.name.common);
//   }
//   return country;
// };

export const mixUpLettersModifier = {
  name: "Mix Up Letters",
  apply: (country: any) => {
    if (Math.random() < 1 / 20) {
      // Shuffle the letters of the country's name
      console.log("Mixed up letters for", country.name.common);
      country.name.common = shuffleString(country.name.common);
    }
    return country;
  },
};

// export const showCapitalCityInsteadModifier = (country: any) => {
//   if (Math.random() < 1 / 20) {
//     // Replace the country name with the capital city
//     console.log(
//       "Capital city instead of country name for",
//       country.name.common
//     );
//     country.name.common = country.capital[0]; // Assuming capital is an array
//   }
//   return country;
// };

export const showCapitalCityInsteadModifier = {
  name: "Show Capital City Instead",
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
