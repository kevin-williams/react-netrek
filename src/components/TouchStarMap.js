import React, {useState} from 'react';
import {PanResponder, View} from 'react-native';
import {Svg} from 'react-native-svg';
import {useApolloClient} from '@apollo/react-hooks';
import StarMap from '../components/StarMap';

import {RA_TO_DEG} from '../utils';

const TouchStarMap = ({stars, dsos, location, view, size, skyDarkness}) => {
  const [panResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        calculateLocation(gesture);
      },
    }),
  );

  const client = useApolloClient();

  const calculateLocation = gesture => {
    console.log('view', view);
    let widthRA = (view.fov * RA_TO_DEG) / 2;
    let widthDec = view.fov / 2;

    let ra = location.ra + (2 * gesture.dx * widthRA) / view.width;
    let dec = location.dec + (2 * gesture.dy * widthDec) / view.height;

    console.log('ra, dec', ra, dec);

    const newLocation = {ra, dec, __typename: 'location'};
    client.writeData({
      data: {
        location: newLocation,
      },
    });
  };

  return (
    <View {...panResponder.panHandlers}>
      <Svg height={size} width={size}>
        <StarMap
          stars={stars}
          dsos={dsos}
          location={location}
          view={view}
          size={size}
          skyDarkness={100}
        />
      </Svg>
    </View>
  );
};

export default TouchStarMap;
