import axios from 'axios';

export const FETCHING_POSTS = 'FETCHING_POSTS';
export const FETCHING_FAILED = 'FETCHING_POSTS_FAILED';
export const FETCHING_SUCCEED = 'FETCHING_POSTS_SUCCEED';

export function fetchPosts(isFetching, loadingStatus) {
  return (dispatch) => {
    const API_BASE_URL = 'https://cdn.contentful.com';
    const API_SPACE_ID = 'tdvhgf3w24tr';
    const CONTENT_TYPE = 'blogPost';
    const API_TOKEN = 'af6e7fc1e987c6b6259c9a4a78b4901f61767a735e817799f3b0c0a922e37f38';

    return axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=${CONTENT_TYPE}`).then((posts) => {
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
