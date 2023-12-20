import React from 'react';
// import {Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import TodoListHomeScreen from '../../features/TodoListHome/screens/TodoListHomeScreen';
// import TasksContextProvider from '../../features/TodoListHome/components/TasksContextProvider';

const TodoListStack = createStackNavigator();


const TodoListNavigator = () => {
  return (
    <>
      <TodoListStack.Navigator headerMode="none" >
        <TodoListStack.Screen name="TodoHome" component={TodoListHomeScreen} />
      </TodoListStack.Navigator>
    </>
  );
};

export default TodoListNavigator;
