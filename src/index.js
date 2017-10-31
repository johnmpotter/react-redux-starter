import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from './store'

import App from './App/App';

import registerServiceWorker from './utils/registerServiceWorker';

import 'semantic-ui-css/semantic.css';
import './styles/index.css';

const target = document.getElementById('root')

render(
	<Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , target
)

registerServiceWorker();
