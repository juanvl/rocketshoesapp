import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Cart from '~screens/Cart';
import Main from '~screens/Main';
import Header from '~components/Header';

import colors from '~styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default Routes;
