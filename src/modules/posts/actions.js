import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  const API_BASE_URL = 'https://cdn.contentful.com';
  const API_SPACE_ID = 'yt7ejrbys4un';
  const API_TOKEN = 'e6ac9ba40b7d85a7dc37df88fb407f74a759a7f026ca27d01d09696e054cb5e3';
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=post`);

  return {
    type: FETCH_POSTS,
    data: request
  };
}
