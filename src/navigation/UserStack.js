import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from '../screens/index';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
};

export default UserStack;
