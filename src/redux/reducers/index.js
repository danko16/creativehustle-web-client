import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import kursusSaya from './kursus-saya';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    kursusSaya,
  });

export default createRootReducer;
