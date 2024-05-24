import { useState } from "react";
const useSetState = (initialState) => {
  const [state, setState] = useState(initialState);

  const setMergedState = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...(typeof newState === "function" ? newState(prevState) : newState),
    }));
  };

  return [state, setMergedState];
};

export default useSetState;
