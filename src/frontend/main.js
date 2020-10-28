import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import 'promise-polyfill/src/polyfill';

import 'normalize.css';
import './main.sass';

import LandingPage from './pages/LandingPage/LandingPage';

ReactDOM.render(<LandingPage />, document.getElementById('app'));