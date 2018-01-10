import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

const hops = [{key: 'M22', description: 'Test 1'}, {key: 'M57', description: 'Test 2'}]

export default class HopSelection extends Component {

  handleTargetSelection(e) {
    console.log('Selected target=', e);
  }

  render() {
    console.log('render header');
    return (
      <View style={styles.container}>
        <Text>Select a hop</Text>
        <FlatList data={hops} renderItem={({item}) => (<View><Text>{item.key}</Text><Text style={{color: 'lightgrey'}}> {item.description}</Text></View>)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  }
});