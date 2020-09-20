import React from 'react';
import { Provider } from 'react-redux'
import store from './store'

import Header from './common/header'

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
    </Provider>
  );
}

export default App;
