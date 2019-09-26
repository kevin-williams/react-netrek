import React from 'react';

import {NativeRouter} from 'react-router-native';
import {ApolloProvider} from '@apollo/react-hooks';

import Main from './src/pages/Main';
import client from './src/client';

const App = ({history, location}) => {
  return (
    <NativeRouter>
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
