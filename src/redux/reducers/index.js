import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import kursus from './kursus';
import kursusSaya from './kursus-saya';
import kelas from './kelas';
import header from './header';
import kelasSaya from './kelas-saya';
import cart from './cart';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    kursus,
    kursusSaya,
    kelas,
    header,
    kelasSaya,
    cart,
  });

export default createRootReducer;
