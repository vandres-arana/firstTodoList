import React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import TextInput from '../components/TextInput';
import TodoItem from '../components/TodoItem';
import {SwipeListView} from 'react-native-swipe-list-view';
import TodoAction from '../components/TodoAction';

import {
  createTaskAsync,
  selectPendingTasks,
  selectPending,
  selectMessage,
} from '../store/TodoSlice';

export default function TabOneScreen() {
  const dispatch = useDispatch();
  const todoList = useSelector(selectPendingTasks);
  const loading = useSelector(selectPending);
  const message = useSelector(selectMessage);

  const handleNewTask = async (text: string) => {
    dispatch(createTaskAsync(text));
  };

  return (
    <View style={styles.container}>
      <TextInput onSubmit={(e) => handleNewTask(e.nativeEvent.text)} />

      <Text style={styles.errorMessage}>{message}</Text>

      <SwipeListView
        data={todoList}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={(data: any, rowMap) => (
          <TodoItem
            title={data.item.name}
            category={data.item.categoryName}
            createdAt={new Date(data.item.createdAt).getTime()}
          />
        )}
        renderHiddenItem={(data: any, rowMap) => (
          <TodoAction key={data.item.id?.toString()} id={data.item.id} />
        )}
        leftOpenValue={75}
        rightOpenValue={-90}
      />

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="small" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    color: 'red',
  },
});
