import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import kursus from './kursus';
import kursusSaya from './kursus-saya';
import kelas from './kelas';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    kursus,
    kursusSaya,
    kelas,
  });

export default createRootReducer;
