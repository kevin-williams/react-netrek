import React from 'react';
import {View, Text} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const STARMAP_QUERY = gql`
  query {
    selectedHop @client
    stars @client {
      ra
      dec
      mag
    }
  }
`;

const StarMap = () => {
  const {client, error, data, loading} = useQuery(STARMAP_QUERY);
  console.log('data', data, loading);
  console.log('client', client);
  console.log('error', error);

  return (
    <View style={{backgroundColor: 'green'}}>
      <Text>StarMap</Text>
      {loading && <Text>Loading</Text>}
    </View>
  );
};

export default StarMap;
