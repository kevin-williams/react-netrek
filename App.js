import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';

import { WelcomePage } from './src/containers/WelcomePage';
import SetupMain from './src/containers/setup/SetupMain';
import StarHopMain from './src/containers/starhop/StarHopMain';

export default class App extends Component {
  componentWillMount() {
    console.log('Mounting app');
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <NativeRouter>
          <Switch>
            <Route path="/setup" component={SetupMain} />
            <Route path="/starhop" component={StarHopMain} />
            <Route component={WelcomePage} />
          </Switch>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 10
  }
};
