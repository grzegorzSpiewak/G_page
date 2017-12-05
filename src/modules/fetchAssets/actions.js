import axios from 'axios';

export const FETCHING_POST_ASSETS = 'FETCHING_POST_ASSETS';
export const FETCHING_POST_ASSETS_FAILED = 'FETCHING_POST_ASSETS_FAILED';
export const FETCHING_POST_ASSETS_SUCCEED = 'FETCHING_POST_ASSETS_SUCCEED';

export function fetchAssets(id, imageLoaded) {
  return (dispatch) => {
    const API_BASE_URL = 'https://cdn.contentful.com';
    const API_SPACE_ID = '4zropqmutkhn';
    const API_TOKEN = '8e6547228fd9ed66b394f43dfe252643dcad664194987a34bd8a7f72a86a42c0';

    return axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`).then((images) => {
      dispatch({
        type: FETCHING_POST_ASSETS,
        imageLoaded
      });
      dispatch({
        type: FETCHING_POST_ASSETS_SUCCEED,
        images,
        imageLoaded
      });
    }).catch((error) => {
      dispatch({
        type: FETCHING_POST_ASSETS_FAILED,
        error,
        imageLoaded
      });
    });
  };
}
