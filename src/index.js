import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  Route,
  BrowserRouter,
  // HashRouter,
} from 'react-router-dom';
import { App } from './App';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/domlook">
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
