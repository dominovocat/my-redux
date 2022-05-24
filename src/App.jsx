import { useState } from "react";
import { increaseReducer, initialState } from "./store/reducer";

function App() {
  const [counter, setCounter] = useState(initialState);

  const actionIncrement = () => {
    setCounter(increaseReducer);
  };
  const actionDecrement = () => {
    setCounter((s) => s - 1);
  };
  return (
    <div>
      Counter:{counter}
      <div>
        <button onClick={actionIncrement}>+</button>
        <button onClick={actionDecrement}>-</button>
      </div>
    </div>
  );
}

export default App;
