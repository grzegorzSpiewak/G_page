import axios from 'axios';
import { API_BASE_URL, API_SPACE_ID, API_TOKEN, CONTENT_TYPE } from 'config/client';

export const FETCHING_POSTS = 'FETCHING_POSTS';
export const FETCHING_FAILED = 'FETCHING_POSTS_FAILED';
export const FETCHING_SUCCEED = 'FETCHING_POSTS_SUCCEED';

export function fetchPosts(isFetching, loadingStatus) {
  return (dispatch) => {
    return axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=${CONTENT_TYPE}&order=sys.createdAt`).then((posts) => {
      dispatch({
        type: FETCHING_POSTS,
        isFetching
      });
      dispatch({
        type: FETCHING_SUCCEED,
        posts,
        isFetching,
        loadingStatus
      });
    }).catch((error) => {
      dispatch({
        type: FETCHING_FAILED,
        loadingStatus,
        error
      });
    });
  };
}
