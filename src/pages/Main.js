import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {Link, Route} from 'react-router-native';

import Welcome from './Welcome';
import HopSelection from './HopSelection';
import StarHop from './StarHop';

const Main = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 5,
        }}>
        <Link to="/">
          <Text style={{color: 'white'}}>Welcome</Text>
        </Link>
        <Link to="/hopSelection">
          <Text style={{color: 'white'}}>Hop Selection</Text>
        </Link>
        <Link to="/starMap">
          <Text style={{color: 'white'}}>Star Map</Text>
        </Link>
      </View>
      <Route exact path="/" component={Welcome} />
      <Route path="/hopSelection" component={HopSelection} />
      <Route path="/starMap" component={StarHop} />
    </SafeAreaView>
  </>
);

export default Main;
