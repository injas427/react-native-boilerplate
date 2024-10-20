import React from 'react';
import { Text, View } from 'react-native';

export const testF = () => {
  const x = 5;

  if (x < 5) { return; }
  return false;
};

export const Home = () => <View>
  <Text>Home</Text>
</View>;
