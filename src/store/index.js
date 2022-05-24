import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "./reducer";



export const globalReducer = combineReducers({
  counter: counterReducer,
});
export const store = createStore(globalReducer)
