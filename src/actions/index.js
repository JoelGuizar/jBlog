import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts`
const API_KEY = '?key=JOELJOELJOEL'


export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    //redux promise middleware will automatically resolve this payload
    //before it hits the reducer
    payload: request
  };
}
