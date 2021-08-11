import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';

type TodoItemProps = {
  title: string;
  category: string;
  createdAt: number;
}

const TodoItem: React.FC<TodoItemProps> = ({
  title,
  category,
  createdAt,
}) => {
  const timeNow = moment(createdAt).fromNow();

  return (
    <View style={styles.todo}>
      <View style={styles.pin}>
        <View style={styles.line} />
        <View style={styles.dot} />
      </View>

      <View style={styles.detail}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {category}
        </Text>

        <Text style={styles.date}>
          {timeNow}
        </Text>
      </View>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    backgroundColor: '#333',
    paddingHorizontal: 8,
    marginBottom: 1,
  },
  pin: {
    width: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  line: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    width: 1,
  },
  dot: {
    backgroundColor: Colors.dark.tint,
    width: 6,
    height: 6,
    borderRadius: 50,
    position: 'absolute',
    top: '48%',
  },
  detail: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    color: '#f2f2f2',
  },
  subtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  date: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
  },
})
