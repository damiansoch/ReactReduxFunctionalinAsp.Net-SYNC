import './bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
  cakeReducer,
  IceCreamReducer,
} from './components/Store/reducers/cakeSchopReducers';
import {
  orderCake,
  restockCakes,
  orderIcecream,
  restockIcecream,
} from './components/Store/Actions/CakeSchopActions';
import { bindActionCreators } from 'redux';

import logger from 'redux-logger';

//---------------------------------------------------
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCakes(4));
const actions = bindActionCreators(
  { orderCake, restockCakes, orderIcecream, restockIcecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderIcecream();
actions.orderCake();
actions.orderCake();
actions.orderIcecream();
actions.restockCakes(4);
actions.restockIcecream(2);

unsubscribe();

root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
