import React from "react";
import { Country } from "../../types/rootInterfaces";

interface MultipleChoicesProps {
  displayedOptions: Country[];
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function MultipleChoices({
  displayedOptions,
  handleClick,
}: MultipleChoicesProps) {
  return (
    <div className="buttons-container">
      {displayedOptions &&
        displayedOptions.map((country: Country, index: number) => {
          // const modifiedCountry = applyModifiers(country);
          return (
            // <>
            <button key={country.cca3} onClick={handleClick} className="">
              {displayedOptions[index].name.common}
            </button>
            // </>
          );
        })}
    </div>
  );
}

export default MultipleChoices;
