import React, { useEffect, useState } from "react";
// import "./SevenSegmentDisplay.css";
import "./SSD.css";

const SevenSegmentDisplay: React.FC = () => {
  const [displays, setDisplays] = useState({
    display1: "0",
    display2: "0",
    display3: "0",
    display4: "0",
    display5: "0",
    display6: "0",
  });

  const zeroFill = (string: string, length: number): string => {
    while (string.length < length) {
      string = "0" + string;
    }
    return string;
  };

  const setDisplaysFromTime = () => {
    const d = new Date();
    const h = zeroFill(d.getHours().toString(), 2);
    const m = zeroFill(d.getMinutes().toString(), 2);
    const s = zeroFill(d.getSeconds().toString(), 2);

    setDisplays({
      display1: h[0],
      display2: h[1],
      display3: m[0],
      display4: m[1],
      display5: s[0],
      display6: s[1],
    });
  };

  useEffect(() => {
    const timerId = setInterval(setDisplaysFromTime, 1000);
    setDisplaysFromTime();

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const renderDisplay = (id: string, value: string) => {
    const baseClass = "display-container display-size-12 display-no-";
    return (
      <div id={id} className={`${baseClass}${value}`}>
        {["a", "b", "c", "d", "e", "f", "g"].map((seg) => (
          <div key={seg} className={`segment-${seg}`}>
            <span className="segment-border"></span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div id="vertical-center">
      <div id="clock-container">
        {Object.entries(displays).map(([id, value]) =>
          renderDisplay(id, value)
        )}
      </div>
    </div>
  );
};

export default SevenSegmentDisplay;
