import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Svg from 'react-native-svg';
import { connect } from 'react-redux';

import { StarMap } from '../../components/StarMap';
import { updateLocation } from './starHopActions';

import { RA_TO_DEG } from '../../utils';
import StarMapView from './StarMapView';

class StarHopMain extends Component {

  render() {
    // console.log('starhop=', this.props.starhop);
    // console.log('stars=', STARS);
    // console.log('messier=', MESSIER);

    return (
      <View style={{ alignItems: 'center', backgroundColor: 'black', flex: 1 }}>
        <StarMapView size={400} view={this.props.starhop.view} />
      </View>
    );
  }
}

const mapStateToProps = state => state;

const dispatchToProps = {
  updateLocation
};

export default connect(mapStateToProps, dispatchToProps)(StarHopMain);
