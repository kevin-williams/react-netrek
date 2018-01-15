import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { HOPS } from '../../utils/hops';

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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
});
