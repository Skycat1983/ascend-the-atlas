import { AppDispatch, RootState } from "../types/rootInterfaces";
import { answerHandler } from "./answerHandler";
import { modalHandler } from "./modalHandler";
import { questionHandler } from "./questionHandler";
// import { signalTimerReset } from "./timerHandlers";

export const handleClick = async (
  e: any,
  state: RootState,
  dispatch: AppDispatch,
  level: number,
  modifierInterval: number,
  timer: number,
  signalTimerReset: () => void
) => {
  const validAnswer = await answerHandler(e, state, dispatch);
  if (validAnswer) {
    console.log("Valid answer");
    if (level % modifierInterval === 0) {
      await modalHandler(state, dispatch);
    }
  } else {
    console.log("invalid answer ");
  }
  dispatch({ type: "SET_TIMER_INTERVAL", payload: timer });
  signalTimerReset();
  questionHandler(state, dispatch);
};
