import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // Transition to a new mode
  const transition = (newMode, replace = false) => {
    setMode(newMode);
    setHistory((prevHistory) => {
      // Create a new history array based on the replace flag
      const updatedHistory = replace ? [...prevHistory.slice(0, -1), newMode] : [...prevHistory, newMode];
      return updatedHistory;
    });
  };

  // Go back to the previous mode
  const back = () => {
    setHistory((prevHistory) => {
      if (prevHistory.length <= 1) {
        // If there's only one element in history, return it as is
        return prevHistory;
      }
      // Create a new history array without the last element
      const updatedHistory = [...prevHistory.slice(0, -1)]; //remove the top of the stack
      setMode(updatedHistory[updatedHistory.length - 1]); //index of previous mode in stack after top removed
      return updatedHistory;
    });
  };

  return { mode, transition, back };
}

