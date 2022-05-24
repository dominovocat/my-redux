import {useState} from 'react';


function App() {
  const [counter,setCounter]=useState(0);

  const actionIncrement=()=>{
    setCounter(s=>s+1);
  }
  const actionDecrement=()=>{
    setCounter(s=>s-1);
  }
  return (
    <div>
      Counter:{counter}
      <div>
        <button onClick={actionIncrement}>+</button>
        <button onClick={actionDecrement}>-</button>
      </div>
    </div>
  )
}

export default App;
