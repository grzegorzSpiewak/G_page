import { FETCH_POSTS } from './actions';

const INITIAL_STATE = {
  posts: []
};

function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_POSTS:
    return { ...state, posts: action.data };
  default:
    return state;
  }
}

export default postReducer;
