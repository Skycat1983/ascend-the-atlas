export const handleCallback = (remainingTime: number) => {
  console.log("Remaining time:", remainingTime);
};

export const toggleCountdown = (
  isCountingDown: boolean,
  setIsCountingDown: (value: boolean) => void
) => {
  setIsCountingDown(!isCountingDown);
};

export const signalTimerReset = (
  reset: boolean,
  setReset: (value: boolean) => void,
  setIsCountingDown: (value: boolean) => void
) => {
  setReset(!reset);
  setIsCountingDown(false);
};
