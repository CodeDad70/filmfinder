import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';

import filmReducer from './reducers/filmReducer'


const store = createStore(filmReducer);



ReactDOM.render(<App />, document.getElementById('root'));

