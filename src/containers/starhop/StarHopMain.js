import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Svg from 'react-native-svg';
import { connect } from 'react-redux';

import { StarMap } from '../../components/StarMap';
import { updateLocation } from './starHopActions';
class StarHopMain extends Component {
  render() {
    console.log('starhop=', this.props.starhop);
    // console.log('stars=', STARS);
    // console.log('messier=', MESSIER);

    return (
      <View style={{ alignItems: 'center', backgroundColor: 'black', flex: 1 }}>
        <Svg width={400} height={400}>
          <StarMap
            stars={this.props.starhop.stars}
            dsos={this.props.starhop.dsos}
            view={this.props.starhop.view}
            location={this.props.starhop.location}
            skyDarkness={this.props.starhop.skyDarkness}
            size={400}
            updateLocation={this.props.updateLocation}
          />
        </Svg>
        <Svg width={300} height={300}>
          <StarMap
            stars={this.props.starhop.stars}
            dsos={this.props.starhop.dsos}
            view={this.props.starhop.eyepieceView}
            location={this.props.starhop.location}
            skyDarkness={this.props.starhop.skyDarkness}
            size={300}
            updateLocation={this.props.updateLocation}
          />
        </Svg>
      </View>
    );
  }
}

const mapStateToProps = state => state;

const dispatchToProps = {
  updateLocation
};

export default connect(mapStateToProps, dispatchToProps)(StarHopMain);
