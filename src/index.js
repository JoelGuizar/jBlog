import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//browser router is what communicates with the history/url library
//Route is a component for conditional rendering
import promise from 'redux-promise';
//switch takes in collection of different routes
//will look at all the routes inside of it, and will show the first
//route that matches the url. Order routes by specificity.
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//decide which middleware to apply, with this method from redux
//decided to use redux-promise
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew}/>
          <Route path="/posts/:id" component={PostsShow}/>
          <Route path="/" component={PostsIndex} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
