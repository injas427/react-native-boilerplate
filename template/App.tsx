/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { AppNavigator } from './src/AppNavigator';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={style.safeArea}>
      <StatusBar
        barStyle={'dark-content'}
      />
      <AppNavigator />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
