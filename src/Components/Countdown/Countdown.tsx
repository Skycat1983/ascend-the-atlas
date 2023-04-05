// Countdown.tsx

import React, { useEffect, useState } from "react";

interface CountdownProps {
  timer: number;
  isCountingDown: boolean;
  cb: (num: number) => void;
  reset: boolean;
}

const Countdown: React.FC<CountdownProps> = ({
  timer,
  isCountingDown,
  cb,
  reset,
}) => {
  const [countdownValue, setCountdownValue] = useState(timer);
  const [displayValue, setDisplayValue] = useState<string | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isCountingDown === true && !intervalId) {
      const id = setInterval(() => {
        setCountdownValue((prevValue) => prevValue - 0.01);
      }, 10);
      setIntervalId(id);
      if (displayValue) {
        setCountdownValue(parseFloat(displayValue));
        setDisplayValue(null);
      }
    } else if (isCountingDown === false) {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
        setDisplayValue(countdownValue.toFixed(2));
        cb(countdownValue);
      }
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isCountingDown]);

  useEffect(() => {
    setCountdownValue(timer);
    setDisplayValue(null);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [reset]);

  useEffect(() => {
    if (countdownValue <= 0 && intervalId) {
      clearInterval(intervalId);
      setCountdownValue(0);
    }
  }, [countdownValue, intervalId]);

  return <div>{!displayValue ? countdownValue.toFixed(2) : displayValue}</div>;
};

export default Countdown;
