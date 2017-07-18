/* eslint import/no-extraneous-dependencies:[0] */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';

const configureStore = (history) => {
  const historyMiddleware = routerMiddleware(history);
  const middlewares = [];
  middlewares.push(historyMiddleware);
  middlewares.push(logger);
  middlewares.push(thunk);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers(Object.assign({}, reducers, { router: routerReducer })),
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
};

export default configureStore;
