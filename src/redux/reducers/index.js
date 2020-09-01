import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import kursus from './kursus';
import kursusSaya from './kursus-saya';
import webinar from './webinar';
import header from './header';
import webinarSaya from './webinar-saya';
import cart from './cart';
import invoice from './invoice';
import mentor from './mentor';

const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    auth,
    kursus,
    kursusSaya,
    webinar,
    header,
    webinarSaya,
    cart,
    invoice,
    mentor,
  });
};

export default createRootReducer;
