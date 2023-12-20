import React from 'react';
import {Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodoListNavigator from './TodoListNavigator';

const Tab = createBottomTabNavigator();

const SettingsScreen = () => <Text>Settings</Text>;

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="TodoHome" component={TodoListNavigator} options={{ headerShown: false }}/>
      <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  </NavigationContainer>
);
