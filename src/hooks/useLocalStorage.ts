import { useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
  // Get data from localStorage, or use initialValue if not present
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? (JSON.parse(storedValue) as T) : initialValue;

  //   state
  const [value, setValue] = useState<T>(initial);

  // Function to update the value in state and localStorage
  const setStoredValue = (newValue: T | ((value: T) => T)) => {
    const valueToStore =
      newValue instanceof Function ? newValue(value) : newValue;
    setValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  // Function to remove the key from state and localStorage
  const removeStoredValue = () => {
    setValue(initialValue);
    localStorage.removeItem(key);
  };

  return { value, setStoredValue, removeStoredValue };
};

export default useLocalStorage;
