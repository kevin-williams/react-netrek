import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';

import { HOPS } from '../../utils/hops';

export default class HopSelection extends Component {
  handleTargetSelection = e => {
    console.log('Selected target=', e);
  };

  keyExtractor = (item, index) => item.id;

  renderHeader = () => <Text style={{ fontSize: 20 }}>Select a star hop:</Text>;

  renderHopSeparator = () => (
    <View
      style={{
        height: 2,
        width: '100%',
        backgroundColor: '#CED0CE',
        margin: 3
      }}
    />
  );

  renderHopItem = ({ item, separators }) => (
    <TouchableHighlight
      onPress={() => this.handleTargetSelection(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
    >
      <View>
        <Text style={{ color: 'darkgrey' }}>{item.label}</Text>
        <Text style={{ color: 'blue' }}>{item.description}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    console.log('render hop', HOPS);
    return (
      <FlatList
        data={HOPS}
        renderItem={this.renderHopItem}
        keyExtractor={this.keyExtractor}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={this.renderHopSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
});
