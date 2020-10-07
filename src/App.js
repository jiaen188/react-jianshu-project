import React from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'

import Header from './common/header'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
