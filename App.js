/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NativeRouter, Route, Link} from 'react-router-native';

const WelcomePage = () => (
  <SafeAreaView>
    <Text>Welcome</Text>
  </SafeAreaView>
);
const HopSelectionPage = () => (
  <SafeAreaView>
    <Text>HopSelection</Text>
  </SafeAreaView>
);
const StarMapPage = () => (
  <SafeAreaView>
    <Text>StarMap</Text>
  </SafeAreaView>
);

const App: () => React$Node = () => {
  return (
    <NativeRouter>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Link to="/" underlayColor="#f0f4f7">
            <Text>WelcomePage</Text>
          </Link>
          <Link to="/hopSelection" underlayColor="#f0f4f7">
            <Text>HopSelectionPage</Text>
          </Link>
          <Link to="/starMap" underlayColor="#f0f4f7">
            <Text>StarMapPage</Text>
          </Link>
        </View>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/hopSelection" component={HopSelectionPage} />
        <Route path="/starMap" component={StarMapPage} />
      </SafeAreaView>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
