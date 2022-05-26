import { connect } from "react-redux";
import RegisterForm from "./components/RegisterForm";
import Tasks from './components/Tasks';

function App(props) {
  return (
    <div className="App">
      {/* <Tasks/> */}
      <RegisterForm />
    </div>
  );
}

const mapStateToProps = (store) => {
  return { counter: store.counter };
};

const withStore = connect(mapStateToProps, undefined);

export default withStore(App);
