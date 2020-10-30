import React from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import store from './store'

import Header from './common/header'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
