import { combineReducers } from 'redux';
import page from './page';
import auth from './auth';
import pricing from './pricing-table';

export default combineReducers({
  page,
  auth,
  pricing,
});
