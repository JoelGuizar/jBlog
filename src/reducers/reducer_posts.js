import _ from 'lodash';
import {FETCH_POSTS} from '../actions';

export default function(state = {}, action){
  switch (action.type){
    case FETCH_POST:
    //return a new state object, with an added key via key interpolation
      return {...state, [action.payload.data.id]: action.payload.data}
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
     return state;
  }
}
