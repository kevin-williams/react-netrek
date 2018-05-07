import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StarMap } from '../../components/StarMap';

import { MESSIER } from '../../utils/messier';
import STARS from '../../../assets/db/stars0.json';
export default class StarHopMain extends Component {
  render() {
    // console.log('stars=', STARS);
    // console.log('messier=', MESSIER);

    return (
      <View>
        <Text> StarHop Main </Text>
        <StarMap
          stars={STARS.stars}
          dsos={MESSIER}
          view={{ fov: 7, magLimit: 8 }}
          location={{
            ra: 0.5,
            dec: 38.92
          }}
        />
      </View>
    );
  }
}
