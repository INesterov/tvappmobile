/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {Router} from './src/routes';

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#2D2C3C',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Router />
    </SafeAreaView>
  );
};

export default App;
