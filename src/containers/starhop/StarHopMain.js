import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { BackButton } from "react-router-native";

import { updateLocation } from './starHopActions';

import StarMapView from './StarMapView';

class StarHopMain extends Component {

  render() {
    // console.log('starhop=', this.props.starhop);
    // console.log('stars=', STARS);
    // console.log('messier=', MESSIER);

    return (
      <View style={{ alignItems: 'center', backgroundColor: 'black', flex: 1 }}>
        <BackButton />
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
