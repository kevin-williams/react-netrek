import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

<<<<<<< HEAD
import { HOPS } from '../../utils/hops';
=======
const hops = [{key: 'M22', description: 'Test 1'}, {key: 'M57', description: 'Test 2'}]
>>>>>>> 01243c7912f774917e61f9f202909b56d64ba2c3

const hops = [{ key: 'M22' }, { key: 'M57' }];

export default class HopSelection extends Component {
  handleTargetSelection = e => {
    console.log('Selected target=', e);
  };

  keyExtractor = (item, index) => item.id;

  render() {
    // console.log('render hop', HOPS);
    return (
      <View style={styles.container}>
        <Text>Select a hop</Text>
<<<<<<< HEAD
        <FlatList
          data={HOPS}
          renderItem={({ item }) => (
            <View>
              <Text>{item.label}</Text>
              <Text style={{ color: 'blue' }}>{item.description}</Text>
            </View>
          )}
          onPressItem={this.handleTargetSelection}
          keyExtractor={this.keyExtractor}
        />
=======
        <FlatList data={hops} renderItem={({item}) => (<View><Text>{item.key}</Text><Text style={{color: 'lightgrey'}}> {item.description}</Text></View>)} />
>>>>>>> 01243c7912f774917e61f9f202909b56d64ba2c3
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
});
