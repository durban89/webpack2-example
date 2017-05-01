import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from './store';

const history = createHistory()
const store = configureStore(history);

import AppComponent from './components/AppComponent';
import home from './home/stores/home';
import topics from './home/stores/topics';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={AppComponent}/>
        <Route path="/home" component={home}/>
        <Route path="/topics" component={topics}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('container')
);
