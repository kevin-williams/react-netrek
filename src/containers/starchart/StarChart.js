import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackButton } from 'react-router-native';

export class StarChart extends Component {
  render() {
    const chartImage = require('../../../assets/starchart/m81.png');

    return (
      <View>
        <BackButton />
        <Text> StarChart </Text>
        <Image source={chartImage} resizeMode="contain" />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StarChart);
