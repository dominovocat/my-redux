import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "./reducer/index.js";
import { taskReducer } from "./reducer/tasks.reducer.js";
import { userReducer } from "./reducer/user.reducer.js";

export const globalReducer = combineReducers({
  counter: counterReducer,
  taskList: taskReducer,
  userData: userReducer,
});

export const store = createStore(globalReducer);
