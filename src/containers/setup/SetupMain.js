import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { BackButton, Route, Switch } from 'react-router-native';
import HopList from './HopList';
import StarSelection from './StarSelection';

export default class SetupMain extends Component {
  render() {
    console.log('SetupMain');
    return (
      <View>
        <BackButton />
        <Text> Setup Main </Text>
        <Switch>
          <Route path="/setup/starSelection" component={StarSelection} />
          <Route component={HopList} />
        </Switch>
      </View>
    );
  }
}
