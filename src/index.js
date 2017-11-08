import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//browser router is what communicates with the history/url library
//Route is a component for conditional rendering
import { BrowserRouter, Route }from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import promise from 'redux-promise';

//decide which middleware to apply, with this method from redux
//decided to use redux-promise
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
