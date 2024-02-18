import { useState } from "react";

const useToggle = (
  initialState: boolean = false
): [boolean, (value: unknown) => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = (value: unknown): void => {
    setState((prevState) => (typeof value == "boolean" ? value : !prevState));
  };

  return [state, toggle];
};

export default useToggle;
