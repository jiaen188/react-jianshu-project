import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import { GlobalStyle } from './style'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);
