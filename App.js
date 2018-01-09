import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/containers/Header';
import HopSelection from "./src/containers/hop/HopSelection";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
