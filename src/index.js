import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//browser router is what communicates with the history/url library
//Route is a component for conditional rendering
import { BrowserRouter, Route }from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from '/components/post_index';


const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
