import axios from 'axios';

export const FETCHING_POSTS = 'FETCHING_POSTS';
export const FETCHING_FAILED = 'FETCHING_POSTS_FAILED';
export const FETCHING_SUCCEED = 'FETCHING_POSTS_SUCCEED';

export function fetchPosts(isFetching, loadingStatus) {
  return (dispatch) => {
    const API_BASE_URL = 'https://cdn.contentful.com';
    const API_SPACE_ID = 'yt7ejrbys4un';
    const API_TOKEN = 'e6ac9ba40b7d85a7dc37df88fb407f74a759a7f026ca27d01d09696e054cb5e3';

    return axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}`).then((data) => {
      dispatch({
        type: FETCHING_POSTS,
        isFetching
      });
      dispatch({
        type: FETCHING_SUCCEED,
        posts: data,
        isFetching,
        loadingStatus
      });
    }).catch((error) => {
      dispatch({
        type: FETCHING_FAILED,
        loadingStatus,
        error: console.log(error)
      });
    });
  };
}
