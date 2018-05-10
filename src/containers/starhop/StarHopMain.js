import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Svg from 'react-native-svg';

import { StarMap } from '../../components/StarMap';

import { dsos } from '../../../assets/db/messier.json';
import STARS0 from '../../../assets/db/stars0.json';
export default class StarHopMain extends Component {
  render() {
    // console.log('stars=', STARS);
    // console.log('messier=', MESSIER);

    return (
      <View style={{ alignItems: 'center', backgroundColor: 'black', flex: 1 }}>
        <Svg width={400} height={400}>
          <StarMap
            stars={STARS0.stars}
            dsos={dsos}
            view={{ fov: 7, magLimit: 15, skyDarkness: 0 }}
            location={{
              ra: 0.7,
              dec: 41.25
            }}
            size={400}
          />
        </Svg>
      </View>
    );
  }
}
