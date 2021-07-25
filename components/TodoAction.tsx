import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

type TodoActionProps = {

}

const TodoAction: React.FC<TodoActionProps> = ({

}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.action}>
        <Text style={styles.text} numberOfLines={2}>
          Mark as Completed
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TodoAction

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
  },
  action: {
    padding: 4,
    position: 'absolute',
    top: 8,
    right: 0,
  },
  text: {
    color: Colors.dark.tint,
    width: 80,
    textAlign: 'center',
  },
})
