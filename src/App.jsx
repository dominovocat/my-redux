import { useState } from "react";
import { connect } from "react-redux";

function App(store) {
  const [counter, setCounter] = useState({});

  const actionIncrement = () => {
    setCounter((s) => s + 1);
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

const mapStateToProps=(store)=>{
  return {counter:store.counter};
}

// HOC
const withStore=connect(mapStateToProps);

export default withStore(App);
