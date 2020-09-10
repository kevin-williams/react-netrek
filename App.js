import React from 'react';
import {NativeRouter} from 'react-router-native';
import {ApolloProvider} from '@apollo/react-hooks';
import {ThemeProvider} from 'styled-components';

import Main from './src/pages/Main';
import client from './src/client';
import {theme} from './src/utils/styles';

const App = ({history, location}) => {
  return (
    <NativeRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
