import React from 'react';
import {Text, View} from 'react-native';
//Redux
import {applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import store from './store';

import CountterComponent from './CountterComponent';

const App = () => {
  return (
    <Provider store={store}>
      <CountterComponent />
    </Provider>
  );
};

export default App;
