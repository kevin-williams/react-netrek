import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

// import { connect } from 'react-redux';

import { version } from '../../package.json';
// import { updateSkyDarkness } from '../starhop/starHopActions';

// import styles from './Header.scss';
// import SkyDarkness from '../../components/starmap/SkyDarkness';

// const mapStateToProps = state => state;

// @connect(mapStateToProps, {
//   updateSkyDarkness,
// })
export default class Header extends Component {
  // handleSkyDarkness = e => {
  //   this.props.updateSkyDarkness(e);
  // };
  //

  handleFinderScreen() {
    console.log('do finder screen');
  }

  render() {
    console.log('render header');
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>StarHop Trainer {version}</Text>
        <Button onPress={this.handleFinderScreen} title="Finder" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    color: 'red',
    alignSelf: 'center',
    paddingRight: 10,
  },

  container: {
    flexDirection: 'row',
  }
});