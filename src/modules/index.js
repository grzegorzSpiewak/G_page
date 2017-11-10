import { combineReducers } from 'redux';
import testReducer from './test/reducers';
import fetchBlogPostsReducer from './posts/reducers';

const rootReducer = combineReducers({
  testing: testReducer,
  blog: fetchBlogPostsReducer
});

export default rootReducer;
