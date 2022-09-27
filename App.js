import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/core/theme';
import Toast from 'react-native-toast-message';
import 'localstorage-polyfill';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens';
import Tabs from './src/navigation/tabs';
import HomeStacks from './src/navigation/homeStacks';
import AddStacks from './src/navigation/addStacks';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={(localStorage.getItem("token") != null && localStorage.getItem("token") != "") ?
            "Dashboard" : "Tabs"} // Thay Tabs = StartScreen để đăng nhập
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Tabs" component={Tabs} />

          {/* Home Stack */}
          <Stack.Screen name="HomeStacks" component={HomeStacks} />
          {/* Add Stack */}
          <Stack.Screen name="AddStacks" component={AddStacks} />
          
        </Stack.Navigator>

      </NavigationContainer>
      <Toast />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
