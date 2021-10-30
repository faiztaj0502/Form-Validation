import { createStore, combineReducers } from "redux";
import { userReducer } from "./userReducer"
export const configStore = () => {
  const myStore = createStore(
    combineReducers({
      userReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};