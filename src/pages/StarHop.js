import React from 'react';
import {View, Text} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {Svg} from 'react-native-svg';

import StarMap from '../components/StarMap';

const STARMAP_QUERY = gql`
  query($minRa: Float, $maxRa: Float, $minDec: Float, $maxDec: Float) {
    selectedHop @client
    stars(minRa: $minRa, maxRa: $maxRa, minDec: $minDec, maxDec: $maxDec)
      @client {
      ra
      dec
      mag
    }
    dsos @client {
      ra
      dec
      r1
      r2
      angle
      cat1
      id1
      mag
    }
  }
`;

const StarHop = () => {
  const {client, error, data, loading} = useQuery(STARMAP_QUERY, {
    variables: {
      minRa: 0.0,
      maxRa: 0.9,
      minDec: 13,
      maxDec: 17,
    },
  });
  console.log('data', data, loading);
  console.log('error', error);

  return (
    <View style={{backgroundColor: 'green'}}>
      <Text style={{backgroundColor: 'green'}}>StarHop</Text>
      {loading && <Text>Loading</Text>}
      {!loading && (
        <Svg height="300" width="300">
          <StarMap
            stars={data.stars}
            dsos={data.dsos}
            location={{ra: 0.5, dec: 15}}
            view={{fov: 7, magLimit: 7}}
            size={300}
            skyDarkness={100}
          />
        </Svg>
      )}
    </View>
  );
};

export default StarHop;
