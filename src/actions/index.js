import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts`
const API_KEY = '?key=JOELJOELJOEL'


export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/${API_KEY}`)
  return {
    type: FETCH_POSTS,
    //redux promise middleware will automatically resolve this payload
    //before it hits the reducer
    payload: request
  };
}

export function createPost(values) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)

  return {
    type: CREATE_POST,
    payload: request
  }
}
