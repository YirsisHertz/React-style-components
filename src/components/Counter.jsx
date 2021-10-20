import { useCounter } from "../hooks/useCounter";
import { CounterButton } from "../styled-components/Counter/CounterButton";
import { ConterContainer } from "../styled-components/Counter/CounterContainer";
import { ConterValue } from "../styled-components/Counter/CounterValue";

const Counter = () => {
  const { counter, handleClick, handleDisClick } = useCounter(50);

  return (
    <ConterContainer>
      <ConterValue>Counter: {counter}</ConterValue>
      <CounterButton onClick={handleClick}>+1</CounterButton>
      <CounterButton onClick={handleDisClick}>-1</CounterButton>
    </ConterContainer>
  );
};

export default Counter;
