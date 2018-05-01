import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import MainPage from './src/containers/MainPage';

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <MainPage />
      </NativeRouter>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 10
  }
};
