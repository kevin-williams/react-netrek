import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Link, Switch, Route } from 'react-router-native';

import HopSelection from './starhop/HopSelection';
import { WelcomePage } from './WelcomePage';

export default class MainPage extends Component {
  render() {
    return (
      <View>
        <Text> Main page </Text>
        <Link to="/hopSelection">
          <Text>Hop Selection</Text>
        </Link>
        <Switch>
          <Route path="/hopSelection" Component={HopSelection} />
          <Route component={WelcomePage} />
        </Switch>
      </View>
    );
  }
}
