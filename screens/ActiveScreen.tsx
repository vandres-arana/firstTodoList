import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import TextInput from '../components/TextInput';
import TodoItem from '../components/TodoItem';
import { SwipeListView } from 'react-native-swipe-list-view';
import TodoAction from '../components/TodoAction';

import { RootState } from '../store';
import { addTask } from '../store/TodoSlice';

export default function TabOneScreen() {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <View style={styles.container}>
      <TextInput
        onSubmit={(e) => {
          dispatch(addTask(e.nativeEvent.text));
        }}
      />

      <SwipeListView
        data={todoList}
        keyExtractor={(item, index) => item.id!.toString()}
        renderItem={(data, rowMap) => (
          <TodoItem
            title={data.item.name}
            createdAt={new Date(data.item.createdAt).getTime()}
          />
        )}
        renderHiddenItem={(data, rowMap) => (
          <TodoAction key={data.item.id?.toString()} />
        )}
        leftOpenValue={75}
        rightOpenValue={-90}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
