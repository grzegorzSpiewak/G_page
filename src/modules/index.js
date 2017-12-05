import { combineReducers } from 'redux';
import fetchPosts from './fetchPosts/reducers';
import fetchById from './fetchById/reducers';
import fetchAssets from './fetchAssets/reducers';

const rootReducer = combineReducers({
  blog: fetchPosts,
  blogPost: fetchById,
  images: fetchAssets
});

export default rootReducer;
