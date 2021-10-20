import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => setCounter(counter + 1);
  const handleDisClick = () => setCounter(counter - 1);

  return { counter, handleClick, handleDisClick };
};
