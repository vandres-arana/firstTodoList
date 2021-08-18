import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import store from './src/store';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={'dark'} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
