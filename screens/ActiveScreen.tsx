import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import TextInput from '../components/TextInput';
import TodoItem from '../components/TodoItem';
import { SwipeListView } from 'react-native-swipe-list-view';
import TodoAction from '../components/TodoAction';

export default function TabOneScreen() {
  const todoList = [{
    name: 'Netflix and Chill',
    date: '7/25/2021 9:16',
  }, {
    name: 'Write Test Casses',
    date: '7/25/2021 8:00',
  }, {
    name: 'Get Wine',
    date: '7/25/2021 16:00'
  },]

  return (
    <View style={styles.container}>
      <TextInput
        onSubmit={(e) => {
          alert(e.nativeEvent.text)
        }}
      />

      <SwipeListView
        data={todoList}
        renderItem={(data, rowMap) => (
          <TodoItem
            key={data.index}
            title={data.item.name}
            createdAt={new Date(data.item.date).getUTCDate()}
          />
        )}
        renderHiddenItem={(data, rowMap) => (
          <TodoAction />
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
