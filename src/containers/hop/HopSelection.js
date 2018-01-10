import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

const hops = [{key: 'M22'}, {key: 'M57'}]

export default class HopSelection extends Component {

  handleTargetSelection(e) {
    console.log('Selected target=', e);
  }

  render() {
    console.log('render header');
    return (
      <View style={styles.container}>
        <Text>Select a hop</Text>
        <FlatList data={hops} renderItem={({item}) => <Text>{item.key}</Text>}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  }
});