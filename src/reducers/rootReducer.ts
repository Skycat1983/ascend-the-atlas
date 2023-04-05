import {
  gameStateReducer,
  gameVariablesReducer,
  gameModifiersReducer,
  gameDisplayReducer,
  gameDataReducer,
  fetchReducer,
  modalReducer,
} from "../reducers";
import { RootState } from "../types/rootInterfaces";

// this takes an object of reducers and returns a reducer that can call and handle each of them
function combineReducers(reducers: any) {
  return (state: any, action: any) => {
    const nextState: any = {};
    for (const key in reducers) {
      nextState[key] = reducers[key](state[key], action);
    }
    return nextState as RootState;
  };
}

// this is the root reducer that will be passed to the useReducer hook
const rootReducer = combineReducers({
  fetchState: fetchReducer,
  modalState: modalReducer,
  gameState: gameStateReducer,
  gameVariables: gameVariablesReducer,
  gameModifiers: gameModifiersReducer,
  gameDisplay: gameDisplayReducer,
  gameData: gameDataReducer,
});

export default rootReducer;
