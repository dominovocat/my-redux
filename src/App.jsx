import { connect } from "react-redux";

function App(props) {
  const actionIncrement = () => {
    props.dispatch({ type: "increment" });
  };
  const actionDecrement = () => {
    props.dispatch({ type: "decrement" });
  };
  return (
    <div>
      Counter:{props.counter.score}
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
connect(mapStateToProps);

export default connect(mapStateToProps)(App);
