import React, { useState, useEffect } from "react";
import { Country } from "../../types/rootInterfaces";
import "./Flag.css";

interface FlagProps {
  displayedCountry: Country;
}

const Flag: React.FC<FlagProps> = ({ displayedCountry }) => {
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [prevCountry, setPrevCountry] = useState<Country | null>(null);
  const [flipping, setFlipping] = useState(true);

  // useEffect runs when props changes
  useEffect(() => {
    if (currentCountry) {
      setPrevCountry(currentCountry);
      return () => {
        setTimeout(() => {
          setCurrentCountry(displayedCountry);
          setFlipping(true);
        }, 500);
      };
    }
    setCurrentCountry(displayedCountry);
    setFlipping(true);
    return () => {
      setTimeout(() => {
        setFlipping(false);
      }, 500);
    };
    // // if no country is displayed, then we are at startup, and we set the current country to the displayed country...
    // if (!currentCountry) {
    //   console.log("if if");
    //   setCurrentCountry(displayedCountry);
    //   // ...and setFlipping to true to trigger the animation
    //   setFlipping(true);
    // } else {
    //   console.log("in else");
    //   // when the displayed country changes, we set the flipping to false
    //   setTimeout(() => {
    //     // setFlipping(false);
    //   }, 500);
    // }
  }, [displayedCountry]);

  // we can achieve the desired effect by

  return (
    <div className="flag-container">
      {currentCountry && (
        <img
          key={currentCountry.cca3}
          src={currentCountry.flags.png}
          alt={currentCountry.name.common}
          className={`flag-image ${flipping ? "invisible" : ""}`}
          // onAnimationEnd={handleAnimationEnd}
        />
      )
        ? !prevCountry
        : prevCountry && (
            <img
              key={prevCountry.cca3}
              src={prevCountry.flags.png}
              alt={prevCountry.name.common}
              className={`flag-image ${flipping ? "" : "flip"}`}
              // onAnimationEnd={handleAnimationEnd}
            />
          )}
      {/* {prevCountry && (
        <img
          key={prevCountry.cca3}
          src={prevCountry.flags.png}
          alt={prevCountry.name.common}
          className={`flag-image ${flipping ? "" : "flip"}`}
          // onAnimationEnd={handleAnimationEnd}
        />
      )} */}
    </div>
  );
};

export default Flag;

//* can be used to flip flag early
//   setCurrentCountry(displayedCountry);
//   setFlipping(false);
//   return () => {
//     setTimeout(() => {
//       setFlipping(true);
//     }, 500);
//   };
// }, [displayedCountry]);

//! className={`${displayedCountry.classname}`}
