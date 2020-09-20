import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import { GlobalStyle } from './style'
import { IconfontGlobal } from './statics/iconfont/iconfont'
import App from './App';

ReactDOM.render(
  <div>
    <App />
    <GlobalStyle/>
    <IconfontGlobal></IconfontGlobal>
  </div>,
  document.getElementById('root')
);
