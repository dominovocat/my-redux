import { connect } from "react-redux";
import {incrementAction,decreaseAction,resetAction} from './store/actions/actionCreators';

function App (props) {
  console.log(props);

  const actionIncrement = () => {
    props.dispatch(incrementAction());
  }

  const actionDecrement = () => {
    props.dispatch(decreaseAction());
  }

  const actionReset = () => {
    props.dispatch(resetAction());
  }

  return (
    <div>
      Counter: {props.counter.score}
      <div>
        <button onClick={actionDecrement}>-</button>
        <button onClick={actionIncrement}>+</button>
        <button onClick={actionReset}>Reset</button>
      </div>
    </div>
  )
}


const mapStateToProps = (store) => {
  console.log(store);
  return { counter: store.counter };
}

// HOC
const withStore = connect(mapStateToProps);

export default withStore(App);