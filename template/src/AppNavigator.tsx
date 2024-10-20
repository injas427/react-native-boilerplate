import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@screens';

const StackNavigator = createStackNavigator();

const Stack = () => <StackNavigator.Navigator>
  <StackNavigator.Screen name="Home" component={Home} />
</StackNavigator.Navigator>;

export const AppNavigator = () => <NavigationContainer >
  <Stack />
</NavigationContainer>;
