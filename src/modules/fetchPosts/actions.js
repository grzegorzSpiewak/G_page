import axios from 'axios';

export const FETCHING_POSTS = 'FETCHING_POSTS';
export const FETCHING_FAILED = 'FETCHING_POSTS_FAILED';
export const FETCHING_SUCCEED = 'FETCHING_POSTS_SUCCEED';

export function fetchPosts(isFetching, loadingStatus) {
  return (dispatch) => {
    const API_BASE_URL = 'https://cdn.contentful.com';
    const API_SPACE_ID = '4zropqmutkhn';
    const CONTENT_TYPE = 'blog';
    const API_TOKEN = '8e6547228fd9ed66b394f43dfe252643dcad664194987a34bd8a7f72a86a42c0';

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
