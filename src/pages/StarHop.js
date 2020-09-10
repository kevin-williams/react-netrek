import React from 'react';
import {Dimensions} from 'react-native';
import {View, Text} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import styled from 'styled-components';

import TouchStarMap from '../components/TouchStarMap';

const {width, height} = Dimensions.get('window');

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

const Title = styled.Text`
  background-color: ${props => props.theme.lightgrey};
  padding-left: 10px;
`;

function StarHop() {
  const {data, loading} = useQuery(STARMAP_QUERY, {
    variables: {
      minRa: 0.0,
      maxRa: 0.9,
      minDec: 13,
      maxDec: 17,
    },
  });
  // console.log('data', data && data.location);
  // console.log('error', error);

  return (
    <View>
      <Title>StarHop</Title>
      {loading && <Text>Loading</Text>}
      {!loading && (
        <TouchStarMap
          stars={data.stars}
          dsos={data.dsos}
          location={data.location}
          view={{...data.view, width, height: width}}
          size={width}
          skyDarkness={100}
        />
      )}
    </View>
  );
}

export default StarHop;
