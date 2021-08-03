import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'

import Counter from './Counter'
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
      </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
  }
})
