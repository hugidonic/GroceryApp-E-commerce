import { useFonts } from 'expo-font';
import React from 'react';
import AppNavigator from './src/routes/AppNavigator';

import { LogBox } from 'react-native'
import "react-native-gesture-handler"
LogBox.ignoreAllLogs()

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Regular": require('./src/assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Bold": require('./src/assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Medium": require('./src/assets/fonts/Roboto-Medium.ttf'),
    "Roboto-Light": require('./src/assets/fonts/Roboto-Light.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  
  return (
    // <SafeAreaView style={{paddingTop: 25}}>
    <>
      <AppNavigator />
    </>
    // </SafeAreaView>
  );
}

