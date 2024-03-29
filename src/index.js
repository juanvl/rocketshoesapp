import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import '~config/ReactotronConfig';
import Routes from '~routes';
import store from '~store';
import NavigationService from '~services/navigation';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" />
    <Routes
      ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    />
  </Provider>
);

export default App;
