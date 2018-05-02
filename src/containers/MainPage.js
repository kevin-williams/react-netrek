import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Link, Switch, Route } from 'react-router-native';

import { WelcomePage } from './WelcomePage';
import SetupMain from './setup/SetupMain';
import StarHopMain from './starhop/StarHopMain'

export default class MainPage extends Component {
  render() {
    console.log('location', this.props.location);

    return (
      <View>
        <Text> Main page </Text>
        <Switch>
          <Route path="/setup" Component={SetupMain} />
          <Route path="/starhop" Component={StarHopMain} />
          <Route component={WelcomePage} />
        </Switch>
      </View>
    );
  }
}
