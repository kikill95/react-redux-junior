import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import main from './reducers/main';
import App from './components/App/App';
import './index.css';

let store = createStore(main);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
