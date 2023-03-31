import { useEffect, useState } from "react";

function useModifiers(state: any) {
  const [modifiedState, setModifiedState] = useState(state);

  useEffect(() => {
    let newState = { ...state };

    // Apply the modifiers to the newState here
    state.gameModifiers.appliedModifiers.forEach((modifier: any) => {
      newState = modifier.apply(newState);
    });

    setModifiedState(newState);
  }, [state]);

  return modifiedState;
}

//! call it like this:
// const modifiedState = useModifiers(state);
