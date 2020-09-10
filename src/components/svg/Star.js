import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
} from 'react-native-svg';

import {getXYCoords, isOnMap} from '../../utils';

const Star = props => {
  const {star, view, location} = props;

  let {ra, dec, mag} = star;
  let {x, y} = getXYCoords(ra, dec, view, location);

  if (!isOnMap(x, y, mag, view)) {
    return null;
  }
  // console.log('trying to draw star', x, y, mag, view);

  let radius = Math.floor(8 - mag);
  const fillStr = radius > 2 ? 'url(#star)' : 'white';

  if (radius < 1) {
    radius = 1;
  }

  // console.log('drawing star at ', x, y, radius);

  return <Circle r={radius} fill={fillStr} cx={x} cy={y} radius={radius} />;
};

export {Star};
