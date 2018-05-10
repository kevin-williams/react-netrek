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
          view={{ fov: 3, magLimit: 15, skyDarkness: 0 }}
          location={{
            ra: 0.75,
            dec: 41.25
          }}
          size={400}
        />
      </View>
    );
  }
}
