import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//browser router is what communicates with the history/url library
//Route is a component for conditional rendering
import { BrowserRouter, Route }from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render(){return <div> Hello!</div>}
}

class Goodbye extends React.Component {
  render(){return <div> Goodbye!</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/Hello" component={Hello}/>
        <Route path="/Goodbye" component={Goodbye}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
