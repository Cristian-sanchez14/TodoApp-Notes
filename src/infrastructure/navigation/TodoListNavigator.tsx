import React from 'react';
// import {Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import TodoListHomeScreen from '../../features/TodoListHome/screens/TodoListHomeScreen';

const TodoListStack = createStackNavigator();

// function DetailsScreen({ navigation, route }) {
//   const { itemId, otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('TodoHome')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

const TodoListNavigator = () => {
  return (
    <TodoListStack.Navigator headerMode="none" initialRouteName="TodoHome">
      <TodoListStack.Screen name="TodoHome" component={TodoListHomeScreen} />
      {/* <TodoListStack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 42 }} /> */}
    </TodoListStack.Navigator>
  );
};

export default TodoListNavigator;
