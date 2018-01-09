import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

  render() {
    console.log('render header');
    return (
      <Text style={styles.headerText}>StarHop Trainer {version}</Text>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    color: 'red',
  }
});