import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StarMap } from '../../components/StarMap';

import { dsos } from '../../../assets/db/messier.json';
import STARS0 from '../../../assets/db/stars0.json';
export default class StarHopMain extends Component {
  render() {
    // console.log('stars=', STARS);
    // console.log('messier=', MESSIER);

    return (
      <View>
        <StarMap
          stars={STARS0.stars}
          dsos={dsos}
          view={{ fov: 7, magLimit: 8, skyDarkness: 0 }}
          location={{
            ra: 0.5,
            dec: 38.92
          }}
          size={400}
        />
      </View>
    );
  }
}
