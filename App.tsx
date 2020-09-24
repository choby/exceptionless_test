import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';


import { ExceptionlessClient } from 'exceptionless';
console.log(ExceptionlessClient)

// const exceptionlessClient = ExceptionlessClient.default;
// exceptionlessClient.config.apiKey = 'YOUR_API_KEY_HERE';
// exceptionlessClient.config.useDebugLogger(); // Testing only
// exceptionlessClient.config.useLocalStorage();
// exceptionlessClient.config.defaultTags.push('Universal', 'Client');

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
