import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';

export default combineReducers({
  header: HeaderReducer,
  home: homeReducer,
})