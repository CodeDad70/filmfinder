import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './store.js';
import './index.css';
import App from './App';
import filmReducer from './reducers/filmReducer'




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
