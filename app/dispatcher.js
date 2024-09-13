import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import createLogger from "redux-logger";

import rootReducer, { initialState } from "./reducers";

const Store = () => {
  const logger = createLogger();
  const reducer = combineReducers({
    initialState,
  });
  return configureStore({ reducer: reducer }, applyMiddleware(thunk, logger));
};
export default Store;
