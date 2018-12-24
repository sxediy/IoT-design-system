import { combineReducers } from 'redux';
import activeUIContainer from './activeUIContainer';
import auth from './auth';

export default combineReducers({
  activeUIContainer,
  auth,
});
