import axios from 'axios';

export const FETCHING_POST_BY_ID = 'FETCHING_POST_BY_ID';
export const FETCHING_POST_FAILED = 'FETCHING_POST_FAILED';
export const FETCHING_POST_SUCCEED = 'FETCHING_POST_SUCCEED';

export function fetchById(id, isFetching, loadingStatus) {
  return (dispatch) => {
    const API_BASE_URL = 'https://cdn.contentful.com';
    const API_SPACE_ID = '4zropqmutkhn';
    const API_TOKEN = '8e6547228fd9ed66b394f43dfe252643dcad664194987a34bd8a7f72a86a42c0';

    return axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${id}?access_token=${API_TOKEN}`).then((post) => {
      dispatch({
        type: FETCHING_POST_BY_ID,
        isFetching
      });
      dispatch({
        type: FETCHING_POST_SUCCEED,
        post,
        isFetching,
        loadingStatus
      });
    }).catch((error) => {
      dispatch({
        type: FETCHING_POST_FAILED,
        loadingStatus,
        error
      });
    });
  };
}
