import { FETCHING_POST_BY_ID, FETCHING_POST_FAILED, FETCHING_POST_SUCCEED } from './actions';

const INITIAL_STATE = {
  post: {},
  isFetching: false,
  loadingStatus: ''
};

function blogPostsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_POST_BY_ID:
    return { ...state, isFetching: true };
  case FETCHING_POST_SUCCEED:
    return { ...state, post: action.post.data, isFetching: false, loadingStatus: 'SUCCES' };
  case FETCHING_POST_FAILED:
    return { ...state, loadingStatus: 'FAILED' };
  default:
    return state;
  }
}

export default blogPostsReducer;
