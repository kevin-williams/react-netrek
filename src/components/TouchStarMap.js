import React, {useMemo, useState} from 'react';
import {PanResponder, View} from 'react-native';
import {Svg} from 'react-native-svg';
import {useApolloClient} from '@apollo/react-hooks';
import StarMap from '../components/StarMap';

import {RA_TO_DEG} from '../utils';

const calculateLocation = (dx, dy, client, location, view) => {
  let widthRA = (view.fov * RA_TO_DEG) / 2;
  let widthDec = view.fov / 2;

  let ra = location.ra + (2 * dx * widthRA) / view.width;
  let dec = location.dec + (2 * dy * widthDec) / view.height;

  const newLocation = {ra, dec, __typename: 'location'};
  // console.log('writing newLocation', newLocation, location, view);
  client.writeData({
    data: {
      location: newLocation,
    },
  });
};

function TouchStarMap({stars, dsos, location, view, size, skyDarkness}) {
  // console.log('TouchStarMap location=', location);
  const client = useApolloClient();
  // Used to create the new panresponder when a gesture finishes so the location is updated.
  const [newPan, setNewPan] = useState(0);

  // PanResponder will be updated after every pan finishes to get the new location
  const panResponder = useMemo(() => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_event, gesture) => {
        calculateLocation(gesture.dx, gesture.dy, client, location, view);
      },
      onPanResponderEnd: () => setNewPan(newPan + 1),
    });
  }, [newPan]);

  return (
    <View {...panResponder.panHandlers}>
      <Svg height={size} width={size}>
        <StarMap
          stars={stars}
          dsos={dsos}
          location={location}
          view={view}
          size={size}
          skyDarkness={skyDarkness}
        />
      </Svg>
    </View>
  );
}

export default TouchStarMap;
