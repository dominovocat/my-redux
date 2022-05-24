import { useState } from "react";
import { connect } from "react-redux";

function App(store) {
  const [counter, setCounter] = useState(0);

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

const mapStateToProps = ({ counter }) => {
  return { counter };
};

// HOC
const withStore = connect(mapStateToProps);

export default withStore(App);
