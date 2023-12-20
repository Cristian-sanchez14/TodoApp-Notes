import {
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  Button,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NewTaskInput from '../components/NewTaskInput';
import TaskListItem from '../components/TaskListItem';
import Reanimated, { CurvedTransition } from 'react-native-reanimated';
import { useHeaderHeight } from '@react-navigation/elements';
import { SearchBar } from '@rneui/themed';

import { SetStateAction, useState } from 'react';

import { useTasksStore } from '../components/TasksStore';

type SearchBarComponentProps = {};

const TodoListHomeScreen: React.FunctionComponent<SearchBarComponentProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tab, setTab] = useState<'All' | 'Todo' | 'Finished'>('All');

  const updateSearch = (searchQuery: SetStateAction<string>) => {
    setSearchQuery(searchQuery);
  };

  const headerHeight = useHeaderHeight();

  const numberOfCompletedTasks = useTasksStore((state) =>
    state.numberOfCompletedTasks(0)
  );
  const numberOfTasks = useTasksStore((state) => state.numberOfTasks());

  const getFilteredTasks = useTasksStore((state) => state.getFilteredTasks);

  const filteredTasks = getFilteredTasks(tab, searchQuery);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.page}
    >
      <SafeAreaView
        edges={['bottom']}
        style={{ flex: 1, paddingTop: headerHeight + 35 }}
      >
        <View>
          <SearchBar
              platform="ios"
              placeholder="Check To Do List...."
              inputContainerStyle={{
                borderRadius: 10,
                padding: 0,
              }}
              inputStyle={{
                borderRadius: 10,
              }}
              searchIcon= {{type: 'material-community', color: '#86939e', name: 'note-search', size: 30 }}
              leftIconContainerStyle={{}}
              placeholderTextColor="#888"
              onChangeText={updateSearch}
              value={searchQuery}
            />
          </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-around',
          }}
        >
          <Button title="All" onPress={() => setTab('All')} />
          <Button title="Todo" onPress={() => setTab('Todo')} />
          <Button title="Finished" onPress={() => setTab('Finished')} />
        </View>
        <Text style={styles.completeTask}>
            {numberOfCompletedTasks} / {numberOfTasks}
        </Text>
        <FlatList
          data={filteredTasks}
          contentContainerStyle={{ gap: 5, padding: 10 }}
          renderItem={({ item }) => (
            <Reanimated.View layout={CurvedTransition}>
              <TaskListItem task={item} />
            </Reanimated.View>
          )}
          ListFooterComponent={() => <NewTaskInput />}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  completeTask: {
    padding: 15,
    fontFamily: 'InterBold', 
    color: 'dimgray',
  }
});

export default TodoListHomeScreen