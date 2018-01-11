import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/containers/Header';
import HopSelection from "./src/containers/hop/HopSelection";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <HopSelection/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25
  },
});
