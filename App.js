import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import MainPage from './src/containers/MainPage';

export default class App extends Component {
  componentWillMount() {
    console.log('Mounting app');
  }

  render() {
    console.log('App rendering');

    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <NativeRouter>
          <MainPage />
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 10
  }
};
