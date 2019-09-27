import React, {useState} from 'react';
import {PanResponder, View, Text} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import TouchStarMap from '../components/TouchStarMap';

const size = 400;

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
    location @client {
      ra
      dec
    }
    view @client {
      fov
      magLimit
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
  // console.log('data', data, loading);
  // console.log('error', error);

  return (
    <View
      style={{
        backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Text style={{backgroundColor: 'green'}}>StarHop</Text>
      {loading && <Text>Loading</Text>}
      {!loading && (
        <TouchStarMap
          stars={data.stars}
          dsos={data.dsos}
          location={data.location}
          view={data.view}
          size={size}
          skyDarkness={100}
        />
      )}
    </View>
  );
};

export default StarHop;
