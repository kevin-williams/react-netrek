import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Svg from 'react-native-svg';
import { connect } from 'react-redux';

import { StarMap } from '../../components/StarMap';
import { updateLocation } from './starHopActions';

import { RA_TO_DEG } from '../../utils';

class StarHopMain extends Component {
  updateLocation = event => {
    const { view, location } = this.props.starhop;
    const contentOffset = event.nativeEvent.contentOffset;

    console.log('scroll drag end', contentOffset);
    console.log('scroll drag view', view);
    console.log('scroll drag location', location);

    let scaleX = view.width / view.fov / RA_TO_DEG * 1.5;
    let scaleY = view.height / view.fov * 1.5;

    console.log('scaleX, scaleY', scaleX, scaleY);

    let newLocation = {
      ra: location.ra + contentOffset.x / scaleX,
      dec: location.dec + contentOffset.y / scaleY
    };

    console.log('newLocation=', newLocation);

    this.props.updateLocation(newLocation);
  };

  render() {
    console.log('starhop=', this.props.starhop);
    // console.log('stars=', STARS);
    // console.log('messier=', MESSIER);

    return (
      <View style={{ alignItems: 'center', backgroundColor: 'black', flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ width: 1000, height: 1000 }}
          onScrollEndDrag={this.updateLocation}
        >
          <Svg width={1000} height={1000}>
            <StarMap
              stars={this.props.starhop.stars}
              dsos={this.props.starhop.dsos}
              view={this.props.starhop.view}
              location={this.props.starhop.location}
              skyDarkness={this.props.starhop.skyDarkness}
              size={1000}
              updateLocation={this.props.updateLocation}
            />
          </Svg>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => state;

const dispatchToProps = {
  updateLocation
};

export default connect(mapStateToProps, dispatchToProps)(StarHopMain);
