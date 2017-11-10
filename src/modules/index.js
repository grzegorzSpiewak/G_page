import { combineReducers } from 'redux';
import testReducer from './test/reducers';
import fetchReducer from './posts/reducers';

const rootReducer = combineReducers({
  testing: testReducer,
  blog: fetchReducer
});

export default rootReducer;
