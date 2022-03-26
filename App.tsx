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
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import {Main} from './src/main';
import {store} from './src/store';

const client = new ApolloClient({
  uri: 'https://tvapp-back.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#2D2C3C',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Main />
        </Provider>
      </ApolloProvider>
    </SafeAreaView>
  );
};

export default App;
