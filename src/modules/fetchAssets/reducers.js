import { FETCHING_POST_ASSETS, FETCHING_POST_ASSETS_FAILED, FETCHING_POST_ASSETS_SUCCEED } from './actions';

const INITIAL_STATE = {
  images: {},
  imageLoaded: ''
};

function getAssets(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_POST_ASSETS:
    return { ...state, imageLoaded: 'START' };
  case FETCHING_POST_ASSETS_SUCCEED:
    return { ...state, images: action.images.data, imageLoaded: 'SUCCES' };
  case FETCHING_POST_ASSETS_FAILED:
    return { ...state, imageLoaded: 'FAILED' };
  default:
    return state;
  }
}

export default getAssets;
