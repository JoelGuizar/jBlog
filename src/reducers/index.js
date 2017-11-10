import { combineReducers } from 'redux';
//creates form action creators for us, so we just need the reducer
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

//must be assigned as form
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
