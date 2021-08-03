import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './store/todoSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => `Value: ${state.todo.counter}`);

  return (
    <View>
      <Text>{counter}</Text>

      <Button title="+" onPress={() => {
        dispatch(increment())
      }} />
      <Button title="-" onPress={() => {
        dispatch(decrement(10))
      }} />
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})
