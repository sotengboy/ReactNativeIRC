import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer, {initialState} from './reducers';

export default function() {
  const logger = createLogger();

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );
}
