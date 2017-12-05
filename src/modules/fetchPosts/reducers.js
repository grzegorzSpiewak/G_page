import { FETCHING_POSTS, FETCHING_FAILED, FETCHING_SUCCEED } from './actions';

const INITIAL_STATE = {
  posts: {},
  isFetching: false,
  loadingStatus: ''
};

function blogPostsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_POSTS:
    return { ...state, isFetching: true };
  case FETCHING_SUCCEED:
    return { ...state, posts: action.posts.data.items, isFetching: false, loadingStatus: 'SUCCES' };
  case FETCHING_FAILED:
    return { ...state, loadingStatus: 'FAILED' };
  default:
    return state;
  }
}

export default blogPostsReducer;
