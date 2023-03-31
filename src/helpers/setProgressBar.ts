export const setProgressBar = (state: any, dispatch: any) => {
  const { level } = state.gameState;
  const { modifierInterval } = state.gameVariable;
  const progress = ((level - 1) % modifierInterval) / modifierInterval;
  dispatch({
    type: "SET_PROGRESS_BAR",
    payload: progress,
  });
};
