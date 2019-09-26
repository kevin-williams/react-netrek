import React from 'react';
import {View, Text} from 'react-native';

const Welcome = () => (
  <View style={{backgroundColor: 'blue'}}>
    <Text>Welcome to StarHop</Text>
    <Text>
      This is an app to help you learn how to guide your telescope using the
      technique of "hopping" from star to star to reach a target.
    </Text>
  </View>
);

export default Welcome;
