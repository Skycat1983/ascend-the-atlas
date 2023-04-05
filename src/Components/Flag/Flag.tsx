import React, { useState, useEffect } from "react";
import { Country } from "../../types/rootInterfaces";
import "./Flag.css";

interface FlagProps {
  displayedCountry: Country;
}

const Flag: React.FC<FlagProps> = ({ displayedCountry }) => {
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [nextCountry, setNextCountry] = useState<Country | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (!currentCountry) {
      setCurrentCountry(displayedCountry);
    } else {
      setNextCountry(displayedCountry);
      setIsFlipping(true);
    }
  }, [displayedCountry]);

  const onAnimationEnd = () => {
    if (isFlipping) {
      setCurrentCountry(nextCountry);
      setNextCountry(null);
      setIsFlipping(false);
    }
  };

  if (!displayedCountry || displayedCountry === null) {
    console.log("%cshould not see this: in FLAG component", "color: red;");
  }

  return (
    <div className="flag-container">
      {currentCountry && (
        <img
          key={currentCountry.cca3}
          src={currentCountry.flags.png}
          alt={currentCountry.name.common}
          className={`flag-image ${isFlipping ? "flip-out" : ""}`}
          onAnimationEnd={onAnimationEnd}
        />
      )}
      {nextCountry && (
        <img
          key={nextCountry.cca3}
          src={nextCountry.flags.png}
          alt={nextCountry.name.common}
          className={`flag-image ${isFlipping ? "flip-in" : "hidden"}`}
        />
      )}
    </div>
  );
};

export default Flag;

// //! className={`${displayedCountry.classname}`}
