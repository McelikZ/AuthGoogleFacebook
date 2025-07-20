import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginPage, SignUpPage, ForgotPasswordPage } from '../screens/index'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='LoginPage' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
