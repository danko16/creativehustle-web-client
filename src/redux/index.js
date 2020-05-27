/* eslint-disable no-undef*/
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { saveState, loadState } from '../utils/localStorage';
import rootReducer from './reducers';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
