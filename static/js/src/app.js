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
import { asyncComponent } from 'react-async-component';

const history = createHistory()
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={asyncComponent({
          resolve: () => System.import('./components/AppComponent'),
          LoadingComponent:() => <div>Loading</div>,
          ErrorComponent:(error)=><div>{error.message}</div>
        })}/>
        <Route path="/home" component={asyncComponent({
          resolve: () => System.import('./home/stores/home'),
          LoadingComponent:() => <div>Loading</div>,
          ErrorComponent:(error)=><div>{error.message}</div>
        })}/>
        <Route path="/topics" component={asyncComponent({
          resolve: () => System.import('./home/stores/topics'),
          LoadingComponent:() => <div>Loading</div>,
          ErrorComponent:(error)=><div>{error.message}</div>
        })}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('container')
);
