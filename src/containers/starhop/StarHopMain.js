import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
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
        <ScrollView
          contentContainerStyle={{ width: 1000, height: 1000 }}
          onScrollEndDrag={event =>
            console.log('scroll drag end', event.nativeEvent.contentOffset)
          }
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
