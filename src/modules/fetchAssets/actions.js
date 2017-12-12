import axios from 'axios';
import { API_BASE_URL, API_SPACE_ID, API_TOKEN } from 'config/client';

export const FETCHING_POST_ASSETS = 'FETCHING_POST_ASSETS';
export const FETCHING_POST_ASSETS_FAILED = 'FETCHING_POST_ASSETS_FAILED';
export const FETCHING_POST_ASSETS_SUCCEED = 'FETCHING_POST_ASSETS_SUCCEED';

export function fetchAssets(id, imageLoaded) {
  return (dispatch) => {
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
